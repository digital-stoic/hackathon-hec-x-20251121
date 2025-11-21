import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { question, profile } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");

    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Generating board responses for question:", question);

    // Contexte du profil pour personnaliser les réponses
    const profileContext = profile
      ? `
      Profil de l'entrepreneur:
      - Âge: ${profile.answers.age || "Non précisé"}
      - Situation familiale: ${profile.answers.marital || "Non précisé"}
      - Logement: ${profile.answers.housing || "Non précisé"}
      - Enfants: ${profile.answers.hasChildren || "Non précisé"}
      - CA entreprise: ${profile.answers.revenue || "Non précisé"} €
      - Employés: ${profile.answers.employees || "Non précisé"}
    `
      : "";

    // Générer les réponses pour chaque membre du board
    const boardMembers = [
      {
        name: "Jade",
        role: "CFO",
        systemPrompt: `Tu es Alex, CFO expert en finance d'entreprise. Tu donnes des conseils financiers pragmatiques, chiffrés et orientés vers la rentabilité. Tu analyses toujours l'impact financier et le retour sur investissement. Reste concis (max 150 mots). IMPORTANT: Réponds en texte simple, sans aucun formatage markdown (pas de *, **, _, #, etc.). Utilise uniquement du texte brut avec des paragraphes séparés par des sauts de ligne.${profileContext}`,
      },
      {
        name: "Pierre",
        role: "COO",
        systemPrompt: `Tu es Sam, COO expert en opérations. Tu te concentres sur l'efficacité opérationnelle, les processus, et l'exécution. Tu donnes des conseils pratiques et actionnables. Reste concis (max 150 mots). IMPORTANT: Réponds en texte simple, sans aucun formatage markdown (pas de *, **, _, #, etc.). Utilise uniquement du texte brut avec des paragraphes séparés par des sauts de ligne.${profileContext}`,
      },
      {
        name: "Onyx",
        role: "Chief Impact Officer",
        systemPrompt: `Tu es Maya, Chief Impact Officer. Tu apportes une perspective holistique en tenant compte du bien-être de l'entrepreneur, de l'équilibre vie pro/perso, et de l'impact social. Reste concis (max 150 mots). IMPORTANT: Réponds en texte simple, sans aucun formatage markdown (pas de *, **, _, #, etc.). Utilise uniquement du texte brut avec des paragraphes séparés par des sauts de ligne.${profileContext}`,
      },
    ];

    const responses = await Promise.all(
      boardMembers.map(async (member) => {
        const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${LOVABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "google/gemini-2.5-flash",
            messages: [
              { role: "system", content: member.systemPrompt },
              { role: "user", content: question },
            ],
          }),
        });

        if (!response.ok) {
          const errorText = await response.text();
          console.error(`Error for ${member.name}:`, response.status, errorText);
          throw new Error(`Failed to generate response for ${member.name}`);
        }

        const data = await response.json();
        return {
          name: member.name,
          role: member.role,
          response: data.choices[0].message.content,
        };
      }),
    );

    // Générer la synthèse
    const synthesisPrompt = `En tant que conseiller stratégique, crée une synthèse exécutive concise (5 points maximum) basée sur ces trois perspectives:
    
    CFO (Alex): ${responses[0].response}
    COO (Sam): ${responses[1].response}
    Chief Impact Officer (Maya): ${responses[2].response}
    
    Question: ${question}
    
    Retourne uniquement une liste JSON de 5 points d'action concrets, sans préambule.
    Format: ["point 1", "point 2", "point 3", "point 4", "point 5"]`;

    const synthesisResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          {
            role: "system",
            content:
              "Tu es un conseiller stratégique qui synthétise des recommandations. Réponds uniquement avec un tableau JSON valide.",
          },
          { role: "user", content: synthesisPrompt },
        ],
      }),
    });

    if (!synthesisResponse.ok) {
      const errorText = await synthesisResponse.text();
      console.error("Synthesis error:", synthesisResponse.status, errorText);
      throw new Error("Failed to generate synthesis");
    }

    const synthesisData = await synthesisResponse.json();
    let synthesis;
    try {
      const content = synthesisData.choices[0].message.content;
      // Extract JSON array from the response
      const jsonMatch = content.match(/\[[\s\S]*\]/);
      synthesis = jsonMatch
        ? JSON.parse(jsonMatch[0])
        : [
            "Analyser la situation financière",
            "Évaluer les ressources disponibles",
            "Définir un plan d'action",
            "Mesurer les impacts",
            "Ajuster la stratégie",
          ];
    } catch (e) {
      console.error("Failed to parse synthesis:", e);
      synthesis = [
        "Analyser la situation financière",
        "Évaluer les ressources disponibles",
        "Définir un plan d'action",
        "Mesurer les impacts",
        "Ajuster la stratégie",
      ];
    }

    return new Response(JSON.stringify({ responses, synthesis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in generate-board-response:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

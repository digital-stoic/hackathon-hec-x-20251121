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
    const { age, wealth, horizon, riskProfile, impactPreference } = await req.json();
    
    console.log("Received simulator request:", { age, wealth, horizon, riskProfile, impactPreference });

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are an expert wealth advisor at BNP Paribas Wealth Management. 
    Provide sophisticated financial projections and personalized recommendations.
    Return ONLY a valid JSON object with this exact structure:
    {
      "projections": {
        "prudent": { "year5": number, "year10": number, "year15": number },
        "balanced": { "year5": number, "year10": number, "year15": number },
        "ambitious": { "year5": number, "year10": number, "year15": number }
      },
      "portfolio": {
        "cash": number,
        "equities": number,
        "privateEquity": number,
        "realEstate": number,
        "alternatives": number
      },
      "actionPlan": [
        { "title": "string", "description": "string" },
        { "title": "string", "description": "string" },
        { "title": "string", "description": "string" },
        { "title": "string", "description": "string" },
        { "title": "string", "description": "string" }
      ],
      "riskSummary": "string (2-3 sentences)",
      "impactRecommendation": "string (2-3 sentences)"
    }
    
    All portfolio percentages must sum to 100.
    All projections should be realistic based on the risk profile.`;

    const userPrompt = `Client profile:
    - Age: ${age} years old
    - Current wealth: €${wealth.toLocaleString()}
    - Investment horizon: ${horizon} years
    - Risk profile: ${riskProfile}
    - Impact preference: ${impactPreference}
    
    Generate a comprehensive wealth projection and personalized action plan.`;

    const aiResponse = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.7,
      }),
    });

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text();
      console.error("AI gateway error:", aiResponse.status, errorText);
      
      if (aiResponse.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      if (aiResponse.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      
      throw new Error(`AI gateway returned ${aiResponse.status}`);
    }

    const aiData = await aiResponse.json();
    const content = aiData.choices[0].message.content;
    
    console.log("AI response:", content);

    // Extract JSON from potential markdown code blocks
    let jsonContent = content;
    if (content.includes("```json")) {
      jsonContent = content.split("```json")[1].split("```")[0].trim();
    } else if (content.includes("```")) {
      jsonContent = content.split("```")[1].split("```")[0].trim();
    }

    const parsedResult = JSON.parse(jsonContent);

    return new Response(
      JSON.stringify(parsedResult),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error in wealth-simulator function:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Internal server error" 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
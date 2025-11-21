import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CheckCircle2, ArrowRight, ArrowLeft, Building2, FileText, CreditCard, CheckCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import bnpLogo from "@/assets/bnp-logo.jpg";

const CreateCompany = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyType: "",
    companyName: "",
    capital: "",
    activity: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const totalSteps = 4;
  const progress = (step / totalSteps) * 100;

  const companyTypes = [
    { value: "sasu", label: "SASU", description: "Société par Actions Simplifiée Unipersonnelle" },
    { value: "sas", label: "SAS", description: "Société par Actions Simplifiée" },
    { value: "sarl", label: "SARL", description: "Société à Responsabilité Limitée" },
    { value: "eurl", label: "EURL", description: "Entreprise Unipersonnelle à Responsabilité Limitée" },
  ];

  const handleNext = () => {
    if (step === 1 && !formData.companyType) {
      toast.error("Veuillez sélectionner un type de société");
      return;
    }
    if (step === 2 && (!formData.companyName || !formData.capital || !formData.activity)) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    if (step === 3 && (!formData.firstName || !formData.lastName || !formData.email || !formData.phone)) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Complete the process
      toast.success("Votre entreprise est en cours de création !");
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate("/")}>
            <img src={bnpLogo} alt="BNP Paribas Banque Privée" className="h-10 w-auto" />
            <span className="font-semibold text-lg">Private Launch</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={() => navigate("/strategies")}>
              Conseils
            </Button>
            <div className="text-sm text-muted-foreground">
              Étape {step} sur {totalSteps}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Progress Bar */}
        <div className="mb-12">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-4">
            {["Type", "Informations", "Dirigeant", "Validation"].map((label, index) => (
              <div key={index} className={`text-sm ${step > index + 1 ? "text-primary font-semibold" : step === index + 1 ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <Card className="p-8 md:p-12">
          {step === 1 && (
            <div className="space-y-8">
              <div className="text-center">
                <Building2 className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Choisissez votre type de société</h2>
                <p className="text-muted-foreground">
                  Sélectionnez la forme juridique la plus adaptée à votre projet
                </p>
              </div>

              <RadioGroup value={formData.companyType} onValueChange={(value) => updateFormData("companyType", value)}>
                <div className="space-y-4">
                  {companyTypes.map((type) => (
                    <Label
                      key={type.value}
                      htmlFor={type.value}
                      className={`flex items-center justify-between p-6 border-2 rounded-lg cursor-pointer transition-all ${
                        formData.companyType === type.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <RadioGroupItem value={type.value} id={type.value} />
                        <div>
                          <div className="font-semibold text-lg">{type.label}</div>
                          <div className="text-sm text-muted-foreground">{type.description}</div>
                        </div>
                      </div>
                      {formData.companyType === type.value && (
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      )}
                    </Label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8">
              <div className="text-center">
                <FileText className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Informations sur votre société</h2>
                <p className="text-muted-foreground">
                  Renseignez les détails de votre future entreprise
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <Label htmlFor="companyName">Nom de la société</Label>
                  <Input
                    id="companyName"
                    placeholder="Ex: Ma Super Entreprise"
                    value={formData.companyName}
                    onChange={(e) => updateFormData("companyName", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="capital">Capital social (€)</Label>
                  <Input
                    id="capital"
                    type="number"
                    placeholder="Ex: 10000"
                    value={formData.capital}
                    onChange={(e) => updateFormData("capital", e.target.value)}
                    className="mt-2"
                  />
                  <p className="text-sm text-muted-foreground mt-2">Minimum recommandé : 1000€</p>
                </div>

                <div>
                  <Label htmlFor="activity">Activité principale</Label>
                  <Input
                    id="activity"
                    placeholder="Ex: Conseil en stratégie digitale"
                    value={formData.activity}
                    onChange={(e) => updateFormData("activity", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-8">
              <div className="text-center">
                <CreditCard className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Vos informations personnelles</h2>
                <p className="text-muted-foreground">
                  En tant que dirigeant de la société
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input
                      id="firstName"
                      placeholder="Jean"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Nom</Label>
                    <Input
                      id="lastName"
                      placeholder="Dupont"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jean.dupont@email.com"
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+33 6 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-8">
              <div className="text-center">
                <CheckCheck className="w-16 h-16 text-success mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Récapitulatif de votre création</h2>
                <p className="text-muted-foreground">
                  Vérifiez les informations avant de valider
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-secondary/50">
                  <h3 className="font-semibold text-lg mb-4">Informations de la société</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type de société</span>
                      <span className="font-medium">{companyTypes.find(t => t.value === formData.companyType)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nom</span>
                      <span className="font-medium">{formData.companyName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Capital social</span>
                      <span className="font-medium">{formData.capital}€</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Activité</span>
                      <span className="font-medium">{formData.activity}</span>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-secondary/50">
                  <h3 className="font-semibold text-lg mb-4">Dirigeant</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Nom complet</span>
                      <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Téléphone</span>
                      <span className="font-medium">{formData.phone}</span>
                    </div>
                  </div>
                </Card>

                <div className="bg-primary/5 border-2 border-primary/20 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    Prochaines étapes
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ Génération automatique des statuts</li>
                    <li>✓ Dépôt du capital social</li>
                    <li>✓ Enregistrement au greffe</li>
                    <li>✓ Obtention du Kbis</li>
                    <li>✓ Ouverture du compte professionnel</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-border">
            {step > 1 ? (
              <Button variant="outline" onClick={handleBack}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour
              </Button>
            ) : (
              <Button variant="ghost" onClick={() => navigate("/")}>
                Annuler
              </Button>
            )}
            <Button variant="premium" onClick={handleNext}>
              {step === totalSteps ? "Valider la création" : "Continuer"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CreateCompany;
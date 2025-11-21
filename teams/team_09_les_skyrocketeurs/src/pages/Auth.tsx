import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Mail, Lock, User } from "lucide-react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      navigate("/map");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          toast({
            title: "Erreur de connexion",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Connexion réussie",
            description: "Bienvenue sur Flow !",
          });
          navigate("/map");
        }
      } else {
        if (!username) {
          toast({
            title: "Pseudo requis",
            description: "Veuillez entrer un pseudo",
            variant: "destructive",
          });
          setLoading(false);
          return;
        }
        const { error } = await signUp(email, password, username);
        if (error) {
          toast({
            title: "Erreur d'inscription",
            description: error.message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Inscription réussie",
            description: "Vérifie ton email pour confirmer ton compte",
          });
        }
      }
    } catch (error: any) {
      toast({
        title: "Erreur",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-block mb-6">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </Link>

        <Card className="p-8 border-border bg-card shadow-premium">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
              Flow
            </h1>
            <p className="text-muted-foreground">
              {isLogin ? "Connecte-toi à ton compte" : "Crée ton compte"}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="username" className="text-foreground font-medium">
                  Pseudo
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Ton pseudo"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required={!isLogin}
                    className="pl-10 bg-background border-border focus:border-primary"
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-medium">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="ton@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 bg-background border-border focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground font-medium">
                Mot de passe
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  className="pl-10 bg-background border-border focus:border-primary"
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold shadow-premium"
              size="lg"
            >
              {loading ? "Chargement..." : isLogin ? "Se connecter" : "S'inscrire"}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isLogin ? "Pas encore de compte ? Inscris-toi" : "Déjà un compte ? Connecte-toi"}
            </button>
          </div>
        </Card>

        {!isLogin && (
          <div className="mt-4 p-4 rounded-lg bg-primary/10 border border-primary/30">
            <p className="text-sm text-foreground text-center">
              Note : Tu recevras un email de confirmation après l'inscription
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Auth;

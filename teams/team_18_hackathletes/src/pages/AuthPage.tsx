import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUser } from '@/contexts/UserContext';
import Logo from '@/components/Logo';

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { setEmail: setUserEmail } = useUser();

  const handleSubmit = (isSignup: boolean) => {
    if (!email) return;
    setUserEmail(email);
    navigate('/questionnaire');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <Logo />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        <div className="bg-card rounded-2xl shadow-card p-8 space-y-6">

          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Email</label>
              <Input
                type="email"
                placeholder="votre@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Mot de passe</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 rounded-xl"
              />
            </div>
          </div>

          <div className="space-y-3 pt-4">
            <Button
              onClick={() => handleSubmit(true)}
              className="w-full h-12 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium transition-smooth"
            >
              Créer mon compte
            </Button>
            
            <Button
              onClick={() => handleSubmit(false)}
              variant="outline"
              className="w-full h-12 rounded-xl border-2 border-border hover:bg-muted font-medium transition-smooth"
            >
              Se connecter
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;

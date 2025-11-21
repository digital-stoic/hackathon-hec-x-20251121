import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import { useNotifications } from '@/contexts/NotificationContext';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { User, Settings, LogOut, LogIn, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import jadeCFO from '@/assets/jade-cfo.png';
import Logo from '@/components/Logo';
import NotificationPanel from '@/components/NotificationPanel';
const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<'pro' | 'perso'>('pro');
  const [showCFOAlert, setShowCFOAlert] = useState(false);
  const [hasShownCFOAlert, setHasShownCFOAlert] = useState(false);
  const [animatedActions, setAnimatedActions] = useState<number | null>(null);
  const [notificationPanelOpen, setNotificationPanelOpen] = useState(false);
  const navigate = useNavigate();
  const { userData } = useUser();
  const { addNotification } = useNotifications();

  // Données d'évolution du patrimoine sur 12 mois
  const patrimoineData = [{
    mois: 'Jan',
    pro: 45000,
    perso: 28000
  }, {
    mois: 'Fév',
    pro: 47000,
    perso: 29500
  }, {
    mois: 'Mar',
    pro: 46500,
    perso: 30000
  }, {
    mois: 'Avr',
    pro: 49000,
    perso: 31000
  }, {
    mois: 'Mai',
    pro: 51000,
    perso: 31500
  }, {
    mois: 'Jun',
    pro: 52000,
    perso: 32000
  }, {
    mois: 'Jul',
    pro: 53500,
    perso: 33000
  }, {
    mois: 'Aoû',
    pro: 55000,
    perso: 34000
  }, {
    mois: 'Sep',
    pro: 56500,
    perso: 35000
  }, {
    mois: 'Oct',
    pro: 58000,
    perso: 36000
  }, {
    mois: 'Nov',
    pro: 60000,
    perso: 37000
  }, {
    mois: 'Déc',
    pro: userData.accounts.pro.total,
    perso: userData.accounts.perso.total
  }];
  useEffect(() => {
    // Simulate actions increase after 3 seconds, only once
    if (hasShownCFOAlert) return;
    
    const timer = setTimeout(() => {
      const currentActions = userData.accounts.pro.actions || 0;
      const newActions = currentActions + 5000;
      setAnimatedActions(newActions);
      setShowCFOAlert(true);
      setHasShownCFOAlert(true);
      
      // Add notification
      addNotification({
        title: 'Jade - CFO',
        message: "20 000 € d'épargne détectés sur votre compte perso. Opportunité d'investissement !",
        avatar: jadeCFO,
        type: 'success',
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasShownCFOAlert, userData.accounts.pro.actions, addNotification]);
  const insights = {
    pro: 'Flux stable ce mois-ci, légère tendance à la hausse',
    perso: 'Bon équilibre entre revenus et dépenses personnelles'
  };
  const accountTypes = {
    pro: [{
      label: 'Compte Pro',
      key: 'comptePro'
    }, {
      label: 'Compte Titre',
      key: 'compteTitre'
    }, {
      label: 'Actions',
      key: 'actions'
    }],
    perso: [{
      label: 'Compte Titre',
      key: 'compteTitre'
    }, {
      label: 'PEL',
      key: 'pel'
    }, {
      label: 'Actions',
      key: 'actions'
    }]
  };
  return <div className="min-h-screen bg-background p-4 py-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-prussian">
            Bonjour {userData.email.split('@')[0]}
          </h1>
          
          <Logo />
          
          <div className="flex items-center gap-2">
            <NotificationPanel open={notificationPanelOpen} onOpenChange={setNotificationPanelOpen} />
            
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-10 w-10 rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/profile-result')}>
                <User className="mr-2 h-4 w-4" />
                Profil
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Paramètres
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => navigate('/auth')}>
                <LogIn className="mr-2 h-4 w-4" />
                Connexion
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => navigate('/auth')}>
                <LogOut className="mr-2 h-4 w-4" />
                Déconnexion
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.1
      }} className="space-y-4">
          
          <div className="flex gap-2">
            <Button onClick={() => setActiveTab('pro')} variant={activeTab === 'pro' ? 'default' : 'outline'} className={`h-10 px-6 rounded-xl font-medium transition-smooth ${activeTab === 'pro' ? 'bg-primary text-primary-foreground' : 'border-2 border-border hover:bg-muted'}`}>
              PRO
            </Button>
            <Button onClick={() => setActiveTab('perso')} variant={activeTab === 'perso' ? 'default' : 'outline'} className={`h-10 px-6 rounded-xl font-medium transition-smooth ${activeTab === 'perso' ? 'bg-primary text-primary-foreground' : 'border-2 border-border hover:bg-muted'}`}>
              PERSO
            </Button>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }}>
          <Card className="rounded-2xl shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-prussian">
                Évolution du Patrimoine
              </CardTitle>
              <CardDescription>
                Évolution sur les 12 derniers mois
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={patrimoineData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="mois" stroke="hsl(var(--muted-foreground))" style={{
                  fontSize: '12px'
                }} />
                  <YAxis stroke="hsl(var(--muted-foreground))" style={{
                  fontSize: '12px'
                }} tickFormatter={value => `${(value / 1000).toFixed(0)}k€`} />
                  <Tooltip contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }} formatter={(value: number) => `${value.toLocaleString()} €`} />
                  <Legend />
                  <Line type="monotone" dataKey="pro" stroke="hsl(var(--primary))" strokeWidth={2} name="Patrimoine Pro" dot={{
                  fill: 'hsl(var(--primary))'
                }} />
                  <Line type="monotone" dataKey="perso" stroke="hsl(var(--secondary))" strokeWidth={2} name="Patrimoine Perso" dot={{
                  fill: 'hsl(var(--secondary))'
                }} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div key={activeTab} initial={{
        opacity: 0,
        x: 20
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.3
      }} className="space-y-6">
          <Card className="rounded-2xl shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-prussian">
                Comptes {activeTab === 'pro' ? 'Professionnels' : 'Personnels'}
              </CardTitle>
              <CardDescription>
                Valeur totale: <span className="text-3xl font-bold text-prussian">{userData.accounts[activeTab].total.toLocaleString()} €</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {accountTypes[activeTab].map(account => {
              const value = userData.accounts[activeTab][account.key as keyof typeof userData.accounts.pro];
              if (!value) return null;
              const displayValue = account.key === 'actions' && animatedActions && activeTab === 'pro' ? animatedActions : value;
              return <div key={account.key} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <span className="text-sm font-medium text-foreground">{account.label}</span>
                    <motion.span className="text-lg font-semibold text-prussian flex items-center gap-2" animate={account.key === 'actions' && animatedActions && activeTab === 'pro' ? {
                  scale: [1, 1.2, 1]
                } : {}} transition={{
                  duration: 0.5
                }}>
                      {displayValue.toLocaleString()} €
                      {account.key === 'actions' && animatedActions && activeTab === 'pro' && <TrendingUp className="h-5 w-5 text-green-500" />}
                    </motion.span>
                  </div>;
            })}
            </CardContent>
          </Card>

          <div className="p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
            <p className="text-sm text-foreground">{insights[activeTab]}</p>
          </div>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.3
      }}>
          <Button onClick={() => navigate('/ask-question')} className="w-full h-14 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium text-lg transition-smooth">
            Poser une question au Board
          </Button>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCFOAlert && <Dialog open={showCFOAlert} onOpenChange={setShowCFOAlert}>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={jadeCFO} alt="Jade - CFO" />
                    <AvatarFallback>JC</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-xl font-semibold">Jade - CFO</div>
                    <div className="text-sm text-muted-foreground">Analyse financière</div>
                  </div>
                </DialogTitle>
              </DialogHeader>
              <DialogDescription className="sr-only">
                Opportunité d'investissement sur votre épargne
              </DialogDescription>
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} className="space-y-4 pt-4">
                <div 
                  className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-xl cursor-pointer hover:bg-green-100 dark:hover:bg-green-950/30 transition-colors"
                  onClick={() => {
                    setShowCFOAlert(false);
                    setNotificationPanelOpen(true);
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <span className="font-semibold text-green-800 dark:text-green-300">
                      Épargne détectée : 20 000 €
                    </span>
                  </div>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Opportunité d'optimiser votre épargne personnelle
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-500 mt-2">
                    Cliquez pour voir dans les notifications
                  </p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Mon analyse :</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    J'ai détecté 20 000 € sur votre compte personnel qui ne génèrent que très peu de rendement. 
                    Voici comment vous pourriez optimiser cette épargne :
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Investir une partie (ex: 10 000 €) dans un portefeuille diversifié d'ETF pourrait générer ~7% annuel.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Garder 6 mois de dépenses (~5 000 €) en épargne de précaution sur un livret A.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>Le reste pourrait alimenter une assurance-vie pour préparer vos projets à moyen terme.</span>
                    </li>
                  </ul>
                </div>

                <Button onClick={() => navigate('/ask-question')} className="w-full">
                  Poser une question au Board
                </Button>
              </motion.div>
            </DialogContent>
          </Dialog>}
      </AnimatePresence>
    </div>;
};
export default DashboardPage;
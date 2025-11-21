import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import alexCfo from '@/assets/alex-cfo.png';
import samCoo from '@/assets/sam-coo.png';
import mayaImpact from '@/assets/maya-impact.png';
import Logo from '@/components/Logo';

const BoardIntroPage = () => {
  const navigate = useNavigate();

  const boardMembers = [
    {
      name: 'Jade',
      role: 'CFO',
      description: 'Je vous accompagne sur le cashflow, la gestion des risques financiers et l\'optimisation de vos finances personnelles et professionnelles.',
      image: alexCfo
    },
    {
      name: 'Pierre',
      role: 'COO',
      description: 'Je vous aide sur l\'organisation opérationnelle, la stratégie de croissance et les décisions de recrutement.',
      image: samCoo
    },
    {
      name: 'Onyx',
      role: 'Chief Impact Officer',
      description: 'Je vous aide à aligner votre stratégie avec vos valeurs personnelles et à maintenir un équilibre durable.',
      image: mayaImpact
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 py-12">
      <Logo />
      <div className="max-w-4xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl font-semibold text-prussian">Votre Board Personnel</h1>
          <p className="text-lg text-muted-foreground">Trois experts dédiés à votre réussite</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {boardMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              className="bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-smooth p-8 space-y-4"
            >
              <div className="w-full aspect-[3/4] rounded-2xl mx-auto overflow-hidden bg-muted">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold text-prussian">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.role}</p>
              </div>

              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                "{member.description}"
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Button
            onClick={() => navigate('/dashboard')}
            className="w-full h-14 rounded-xl bg-primary hover:bg-secondary text-primary-foreground font-medium text-lg transition-smooth"
          >
            Aller à mon espace Board
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default BoardIntroPage;

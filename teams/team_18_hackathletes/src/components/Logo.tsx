import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import opalLogo from '@/assets/opal-logo.png';

const Logo = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center"
    >
      <motion.img 
        src={opalLogo} 
        alt="Opal by BNP Paribas" 
        className="h-16 w-auto cursor-pointer"
        onClick={() => navigate('/dashboard')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
    </motion.div>
  );
};

export default Logo;

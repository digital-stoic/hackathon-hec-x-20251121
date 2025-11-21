const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BNP</h3>
            <p className="text-primary-foreground/80">
              Leader mondial de la banque et des services financiers
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="/" className="hover:text-accent transition-colors">Accueil</a></li>
              <li><a href="/philanthropie" className="hover:text-accent transition-colors">Philanthropie</a></li>
              <li><a href="/se-renseigner" className="hover:text-accent transition-colors">Se Renseigner</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>contact@bnp.fr</li>
              <li>+33 1 23 45 67 89</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© 2024 BNP. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const footerLinks = {
  about: ["About Us", "BNP Paribas Group"],
  solutions: [
    "Wealth Management",
    "Private Banking",
    "Sustainable Investing",
    "Family Office Services"
  ],
  offices: [
    "Paris",
    "London",
    "Geneva",
    "Monaco",
    "Singapore",
    "Hong Kong",
    "Dubai"
  ],
  legal: [
    "Privacy Policy",
    "Terms & Conditions",
    "Regulatory Information"
  ]
};

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4">About</h3>
            <ul className="space-y-2">
              {footerLinks.about.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline opacity-90 hover:opacity-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline opacity-90 hover:opacity-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Global Offices</h3>
            <ul className="space-y-2">
              {footerLinks.offices.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline opacity-90 hover:opacity-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:underline opacity-90 hover:opacity-100">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-8 text-center opacity-75">
          <p>&copy; {new Date().getFullYear()} BNP Paribas Wealth Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
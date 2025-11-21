import { Linkedin, ArrowUp } from "lucide-react";
import bnpLogo from "@/assets/bnp-logo.png";

const aboutLinks = [
  '"One Bank" model',
  'A recognised international leading bank',
  'Careers',
  'Experts',
  'Our management',
  'Our solution-driven approach'
];

const digitalLinks = [
  'Allocation Designer',
  'BeAdvised',
  'E-Banking',
  'Private assets investor portal'
];

const legalLinks = [
  'TERMS AND CONDITIONS',
  'DATA PRIVACY CHAPTER',
  'COOKIE POLICY',
  'ACCESSIBILITY STATEMENT',
  'SITEMAP',
  'WHISTLEBLOWING',
  'COOKIE SETTINGS'
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer>
      {/* Main Footer Section */}
      <div className="bg-[#2d4a42] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Statement */}
            <div className="lg:col-span-1">
              <p className="text-lg leading-relaxed">
                BNP Paribas Wealth Management is committed to protecting your wealth as well as helping you to pass it on to your loved ones.
              </p>
            </div>

            {/* About Us */}
            <div>
              <h3 className="font-bold text-sm mb-6 tracking-wide">ABOUT US</h3>
              <ul className="space-y-3">
                {aboutLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Digital Solutions */}
            <div>
              <h3 className="font-bold text-sm mb-6 tracking-wide">DIGITAL SOLUTIONS</h3>
              <ul className="space-y-3">
                {digitalLinks.map((link, index) => (
                  <li key={index}>
                    <a href="#" className="hover:underline text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="font-bold text-sm mb-6 tracking-wide">FOLLOW US</h3>
              <a href="#" className="flex items-center gap-3 hover:underline text-sm">
                <Linkedin className="h-6 w-6" />
                <span>Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-border py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={bnpLogo} alt="BNP Paribas Wealth Management" className="h-12" />
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              {legalLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-3">
                  <a href="#" className="hover:underline whitespace-nowrap">
                    {link}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-border">|</span>
                  )}
                </div>
              ))}
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex-shrink-0 w-10 h-10 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
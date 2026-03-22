import { Mail, Phone, Linkedin, Instagram, FacebookIcon,X} from "lucide-react";

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const navLinks = [
  { label: "Background & Vision", href: "#background" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events & Dialogue", href: "#events" },
  { label: "Collaboration", href: "#collaboration" },
];

const socialLinks = [
 
  { icon: Linkedin, href: "https://www.linkedin.com/company/institute-of-civilisational-cultural-religious-studies/", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "LinkedIn" },
  { icon: FacebookIcon, href: "#", label: "LinkedIn" },
  { icon: XIcon, href: "#", label: "LinkedIn" },

];

export default function Footer() {
  const handleClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="gradient-footer text-white relative overflow-hidden" id="contact">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full bg-heritage-gold/5 blur-[100px]" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-heritage-gold/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid gap-12 md:grid-cols-3">
          {/* About */}
          <div>
            <h4 className="font-serif text-2xl font-semibold mb-2">ICCR
            </h4>
            <p className="text-heritage-gold text-xs tracking-[0.15em] uppercase font-medium mb-4">
              Institute of Civilisational & Cultural Relations
            </p>
            <p className="text-white/65 leading-relaxed text-sm">
              A platform for civilisational dialogue, cultural understanding, and institutional collaboration
              in alignment with the vision of Vikshit Bharat 2047.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">Quick Links</h4>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleClick(link.href)}
                  className="text-left text-sm text-white/60 hover:text-heritage-gold hover:translate-x-1 transition-all duration-200 py-1.5"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-5">Contact</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:ntyagi@iccrglobal.org"
                className="flex items-center gap-3 text-white/65 hover:text-heritage-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-heritage-gold/10 transition-colors">
                  <Mail className="h-3.5 w-3.5 shrink-0" />
                </div>
                ntyagi@iccrglobal.org
              </a>
              <a
                href="tel:+918979888817"
                className="flex items-center gap-3 text-white/65 hover:text-heritage-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-heritage-gold/10 transition-colors">
                  <Phone className="h-3.5 w-3.5 shrink-0" />
                </div>
                +91-9958900817
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="text-white/60 text-sm">Follow us on</p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-heritage-gold hover:border-heritage-gold/40 hover:bg-heritage-gold/10 transition-all duration-300"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-white/40 tracking-wide">
          © {new Date().getFullYear()} Institute of Civilisational & Cultural Relations. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

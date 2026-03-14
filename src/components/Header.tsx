import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { label: "Background & Vision", href: "#background" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Events & Dialogue", href: "#events" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "py-2 bg-background/80 backdrop-blur-xl border-border/50 shadow-lg shadow-foreground/[0.03]"
          : "py-4 bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        {/* Logo & Name */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="ICCRS Logo"
            className={`transition-all duration-500 rounded shadow-sm ${scrolled ? "h-9" : "h-12"}`}
          />
          <div className="block leading-tight">
            <h1
              className={`font-serif font-semibold tracking-wide transition-all duration-500 ${
                scrolled ? "text-sm text-foreground" : "text-base lg:text-lg text-white"
              }`}
            >
              ICCRS
            </h1>
            <p
              className={`transition-all duration-500 ${
                scrolled ? "text-[10px] text-muted-foreground" : "text-xs text-white/70"
              }`}
            >
              Institute of Civilisation, Culture & Religious Studies
            </p>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-heritage-gold after:transition-all after:duration-300 after:-translate-x-1/2 hover:after:w-3/4 ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className={`p-2 ${scrolled ? "text-foreground" : "text-white"}`}>
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-background border-border w-80">
              <SheetTitle className="text-foreground font-serif text-lg mb-8">Navigation</SheetTitle>
              <nav className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleClick(link.href)}
                    className="text-left px-4 py-3 text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors text-base font-medium"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

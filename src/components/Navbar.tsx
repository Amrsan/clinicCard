import { Button } from "@/components/ui/button";
import { LogIn, Menu, X, Globe } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import BlackLogo from "@/assets/black-logo.png";

import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "الرئيسية", href: "/" },
    { name: "معلومات عنا", href: "/AboutUs" },
    { name: "الشركاء", href: "/Partners" },
    { name: "العروض", href: "/Offers" },
    { name: "للاتصال بنا", href: "#contact" },
  ];

  return (
    <nav className=" overflow-hidden fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-3 ">
            {/* <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg lg:text-xl">CC</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-bold text-lg lg:text-xl text-foreground">Clinic Card</h1>
              <p className="text-xs text-muted-foreground">كلينك كارد</p>
            </div> */}
            <img className="w-24 h-24" src={BlackLogo} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 lg:gap-4">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <Globe className="w-4 h-4" />
              <span className="hidden sm:inline">العربية</span>
            </button>

            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex gap-2"
            >
              <LogIn className="w-4 h-4" />
              تسجيل الدخول
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-slide-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                );
              })}
              <Button variant="outline" className="mt-2 gap-2">
                <LogIn className="w-4 h-4" />
                تسجيل الدخول
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

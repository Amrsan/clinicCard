import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import WhiteLog from "@/assets/white-logo.png";

const Footer = () => {
  const quickLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "العروض", href: "#offers" },
    { name: "التخصصات", href: "#" },
    { name: "المستشفيات", href: "#" },
    { name: "معلومات عنا", href: "#about" },
  ];

  const supportLinks = [
    { name: "الأسئلة الشائعة", href: "#" },
    { name: "سياسة الخصوصية", href: "#" },
    { name: "الشروط والأحكام", href: "#" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  return (
    <footer
      id="contact"
      className="bg-foreground text-primary-foreground py-12 lg:py-16"
    >
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4 justify-start">
              {/* <div className="flex flex-col">
                <h3 className="font-bold text-xl">Clinic Card</h3>
                <p className="text-sm text-primary-foreground/70">كلينك كارد</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-lg">CC</span>
              </div> */}
              <img src={WhiteLog} alt="" className="w-36 h-22" />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6 text-right">
              منصة كلينك كارد تساعدك في العثور على أفضل المستشفيات والعيادات في
              مصر بأسعار تنافسية وخدمات متميزة.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 justify-end">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 hover:bg-primary-foreground/20 rounded-full flex items-center justify-center transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="font-bold text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="text-right">
            <h4 className="font-bold text-lg mb-4">الدعم</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-right">
            <h4 className="font-bold text-lg mb-4">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-start">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  القاهرة، مصر
                </span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm" dir="ltr">
                  +20 10955693586
                </span>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  info@cliniccard.com
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* Bottom Bar */}
        {/* <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm ">
              جميع الحقوق محفوظة © 2026 Clinic Card.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                سياسة الخصوصية
              </a>
              <a
                href="#"
                className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
              >
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div> */}
      </div>

      {/* New Bottom Footer Section */}
      <div className="mt-2 container mx-auto  overflow-hidden w-[90%]">
        <div className="bg-[#485696] text-white py-4 mt-0 rounded ">
          <div className="section-container flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm font-medium">
              تصميم و تطوير شركة <a href="#">فريش هيلث للخدمات الطبية</a>
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/80 transition-colors">
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white/80 transition-colors">
                <FaFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Phone, MessageCircle } from "lucide-react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const ContactButtons = () => {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/2010955693586"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="WhatsApp"
      >
        <AiOutlineWhatsApp   className="w-6 h-6 text-white" />
      </a>

      {/* Phone */}
      <a
        href="tel:+2010955693586"
        className="w-12 h-12 bg-accent hover:bg-teal rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
        aria-label="اتصل بنا"
      >
        <Phone className="w-6 h-6 text-white" />
      </a>
    </div>
  );
};

export default ContactButtons;

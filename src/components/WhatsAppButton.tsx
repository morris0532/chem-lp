import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const phoneNumber = "8612345678900"; // Based on +86 123 4567 8900
  const message = "Hello, I'm interested in your chemical products. Could you please provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-fade-in"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-3 px-3 py-1 bg-white text-[#075E54] text-sm font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        WhatsApp Us
      </span>
    </a>
  );
}

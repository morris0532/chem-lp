import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  productName?: string;
}

export function WhatsAppButton({ productName }: WhatsAppButtonProps) {
  const phoneNumber = "8613583262050"; 
  
  let message = "Hello, I'm interested in your chemical products. Could you please provide more information?";
  
  if (productName) {
    const lowerName = productName.toLowerCase();
    if (lowerName.includes("sodium thiosulfate")) {
      message = "Hello, I'm interested in your Sodium Thiosulfate. Could you please provide the latest bulk pricing and TDS?";
    } else if (lowerName.includes("oxalic acid")) {
      message = "Hello, I need Oxalic Acid for industrial use. Please send me the specifications and wholesale price list.";
    } else if (lowerName.includes("caustic soda") || lowerName.includes("sodium hydroxide")) {
      message = "Hi, I'm looking for a reliable supplier of Caustic Soda. What's your current supply capacity and price?";
    } else {
      message = `Hello, I'm interested in ${productName}. Could you please provide more details and pricing?`;
    }
  }

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-8 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 transition-transform animate-fade-in group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-3 px-3 py-1 bg-white text-[#075E54] text-sm font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden sm:block">
        WhatsApp Us
      </span>
    </a>
  );
}

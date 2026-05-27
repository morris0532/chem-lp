import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAPIBaseURL } from "@/lib/config";

const PRESET_QUESTIONS = [
  {
    question: "What is your main product?",
    answer: "Our core product is high-purity Sodium Thiosulfate, widely used in water treatment, mining, and photography."
  },
  {
    question: "Do you provide SDS/COA?",
    answer: "Yes, we provide full technical documentation including SDS and COA for every batch of our products."
  },
  {
    question: "What is your minimum order quantity?",
    answer: "Our standard MOQ is 1 metric ton, but we can provide smaller samples for testing and evaluation."
  }
];

const KEYWORD_RESPONSES: { keywords: string[], response: string }[] = [
  {
    keywords: ["price", "cost", "quote", "pricing", "how much"],
    response: "Pricing depends on the grade (Industrial/Photo/USP) and quantity. Please leave your email or WhatsApp, and our sales team will send you a formal quote within 12 hours."
  },
  {
    keywords: ["sample", "test", "trial"],
    response: "We offer free samples (up to 500g) for quality evaluation. You only need to cover the courier cost. Would you like to provide your shipping address?"
  },
  {
    keywords: ["shipping", "delivery", "lead time", "port"],
    response: "We typically ship from Tianjin or Qingdao port. Lead time is usually 7-14 days after order confirmation. We support FOB, CIF, and CFR terms."
  },
  {
    keywords: ["payment", "lc", "tt", "terms"],
    response: "We accept T/T (30% deposit, 70% against BL copy) and Irrevocable L/C at sight. Other terms can be discussed for long-term partners."
  },
  {
    keywords: ["contact", "whatsapp", "phone", "email"],
    response: "You can reach us via email at info@sinopeakchem.com or WhatsApp: +86 123 4567 8910. Alternatively, leave your details here and we'll contact you."
  }
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'agent', text: string }[]>([
    { role: 'agent', text: "Hello! 👋 Welcome to Sinopeakchem. How can I help you today with our chemical products?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isTyping]);

  const sendChatToEmail = async () => {
    const hasUserMessages = chatHistory.some(chat => chat.role === 'user');
    if (!hasUserMessages || emailSent) return;

    try {
      const apiBaseUrl = getAPIBaseURL();
      const chatContent = chatHistory
        .map(chat => `${chat.role === 'user' ? 'Customer' : 'Agent'}: ${chat.text}`)
        .join('\n\n');

      await fetch(`${apiBaseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "Chat Widget User",
          email: "info@sinopeakchem.com",
          product_name: "Chat Inquiry",
          message: chatContent,
          subject: "New Chat History from Website"
        }),
      });
      setEmailSent(true);
    } catch (error) {
      console.error("Failed to send chat history:", error);
    }
  };

  const handleClose = () => {
    sendChatToEmail();
    setIsOpen(false);
  };

  const getKeywordResponse = (text: string): string | null => {
    const lowerText = text.toLowerCase();
    for (const entry of KEYWORD_RESPONSES) {
      if (entry.keywords.some(kw => lowerText.includes(kw))) {
        return entry.response;
      }
    }
    return null;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    setChatHistory(prev => [...prev, { role: 'user', text: text }]);
    setMessage("");
    setIsTyping(true);

    const autoResponse = getKeywordResponse(text);

    // Simulate agent response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'agent', 
        text: autoResponse || "Thank you for your inquiry. Our team will review your message. For immediate assistance, please leave your contact details or email us at info@sinopeakchem.com." 
      }]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePresetClick = (q: typeof PRESET_QUESTIONS[0]) => {
    setChatHistory(prev => [...prev, { role: 'user', text: q.question }]);
    setIsTyping(true);
    
    setTimeout(() => {
      setChatHistory(prev => [...prev, { role: 'agent', text: q.answer }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-8 left-8 z-50 flex flex-col items-start">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] bg-[#0A1628] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fade-in">
          {/* Header */}
          <div className="gold-gradient p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center">
                <User className="text-[#D4A843] h-6 w-6" />
              </div>
              <div>
                <p className="text-[#0A1628] font-bold text-sm">Sales Support</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <p className="text-[#0A1628]/70 text-xs font-medium">Online</p>
                </div>
              </div>
            </div>
            <button onClick={handleClose} className="text-[#0A1628] hover:scale-110 transition-transform">
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-white/5">
            {chatHistory.map((chat, i) => (
              <div key={i} className={`flex ${chat.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  chat.role === 'user' 
                    ? 'bg-[#D4A843] text-[#0A1628] font-medium rounded-tr-none' 
                    : 'bg-white/10 text-white rounded-tl-none'
                }`}>
                  {chat.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 p-3 rounded-2xl rounded-tl-none">
                  <Loader2 className="h-4 w-4 text-white animate-spin" />
                </div>
              </div>
            )}
            
            {!isTyping && chatHistory[chatHistory.length - 1]?.role === 'agent' && (
              <div className="flex flex-wrap gap-2 mt-2">
                {PRESET_QUESTIONS.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handlePresetClick(q)}
                    className="text-xs bg-white/5 border border-white/10 hover:border-[#D4A843] hover:text-[#D4A843] text-white/70 py-1.5 px-3 rounded-full transition-colors"
                  >
                    {q.question}
                  </button>
                ))}
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(message);
            }} 
            className="p-4 border-t border-white/10 flex gap-2"
          >
            <Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843]"
            />
            <Button type="submit" size="icon" className="gold-gradient text-[#0A1628] shrink-0">
              <Send size={18} />
            </Button>
          </form>
        </div>
      )}

      <button
        onClick={() => {
          if (isOpen) {
            handleClose();
          } else {
            setIsOpen(true);
          }
        }}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-white/10 text-white rotate-90' : 'gold-gradient text-[#0A1628] hover:scale-110'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}

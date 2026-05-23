import { useState, useEffect } from "react";
import { MessageSquare, X, Send, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'agent', text: string }[]>([
    { role: 'agent', text: "Hello! 👋 Welcome to Sinopeakchem. How can I help you today with our chemical products?" }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setMessage("");
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setChatHistory(prev => [...prev, { 
        role: 'agent', 
        text: "Thank you for your message. One of our sales engineers will be with you shortly. For immediate pricing, please leave your email address." 
      }]);
      setIsTyping(false);
    }, 1500);
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
                  <div className="w-2 h-2 rounded-full bg-[#0A1628] animate-pulse" />
                  <p className="text-[#0A1628]/70 text-xs font-medium">Online</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-[#0A1628] hover:scale-110 transition-transform">
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
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-2">
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
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-white/10 text-white rotate-90' : 'gold-gradient text-[#0A1628] hover:scale-110'
        }`}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
}

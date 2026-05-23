import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { MessageSquare, CheckCircle2, Loader2 } from "lucide-react";
import { getAPIBaseURL } from "@/lib/config";

interface FloatingCTAProps {
  productName: string;
}

export function FloatingCTA({ productName }: FloatingCTAProps) {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [quantity, setQuantity] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Auto-open after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only open if it hasn't been submitted yet
      if (!submitted) {
        setOpen(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const apiBaseUrl = getAPIBaseURL();
      const response = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Floating CTA Lead", // Required field for the API
          email,
          quantity,
          product_name: productName,
          message: "Lead from floating CTA popup form",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setOpen(false);
          // Reset after closing
          setTimeout(() => {
            setSubmitted(false);
            setEmail("");
            setQuantity("");
          }, 500);
        }, 3000);
      } else {
        alert("Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-40 animate-fade-in">
        <Button
          onClick={() => setOpen(true)}
          className="gold-gradient text-[#0A1628] font-bold h-14 w-14 sm:h-auto sm:w-auto sm:px-6 rounded-full shadow-2xl shadow-[#D4A843]/40 hover:scale-105 transition-transform animate-pulse-gold"
        >
          <MessageSquare className="h-6 w-6 sm:mr-2" />
          <span className="hidden sm:inline">Get Quote</span>
        </Button>
      </div>

      {/* Popup Form */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-[#0A1628] border-white/10 text-white sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-white text-2xl font-bold">
              Get Instant Quote
            </DialogTitle>
            <DialogDescription className="text-slate-400">
              Leave your contact details and we'll get back to you with the best price for {productName}.
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="text-center py-8 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="h-8 w-8 text-[#D4A843]" />
              </div>
              <p className="text-white font-semibold mb-2 text-lg">Thank You!</p>
              <p className="text-slate-400">Your inquiry has been sent successfully.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <Input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-300">
                  Estimated Quantity
                </label>
                <Input
                  type="text"
                  placeholder="e.g. 20 MT"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full gold-gradient text-[#0A1628] font-bold py-6 rounded-xl mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Inquiry"
                )}
              </Button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Factory,
  ShieldCheck,
  Globe,
  FlaskConical,
  ChevronRight,
  CheckCircle2,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ArrowUp,
  Award,
  FileCheck,
  Truck,
  Building2,
  PackageCheck,
  Zap,
  Box,
  BadgeCheck,
  Quote,
  Star,
  Download,
} from "lucide-react";
import { products } from "@/content/products";
import { getAPIBaseURL } from "@/lib/config";
import { FloatingCTA } from "@/components/FloatingCTA";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("revealed");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

function ScrollRevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`scroll-reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ─── Navigation ─── */
function Navigation({ product }: { product: any }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Products", href: "#products" },
    { label: "Applications", href: "#applications" },
    { label: "Why Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-blur shadow-2xl shadow-black/20 py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-bold text-[#0A1628] text-lg">
            {product.chemicalFormula.substring(0, 2)}
          </div>
          <span className="text-xl font-bold text-white group-hover:text-[#D4A843] transition-colors">
            Sinopeakchem
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-[#D4A843] transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#D4A843] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a href="#contact">
            <Button className="gold-gradient text-[#0A1628] font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[#D4A843]/20">
              Request a Quote
              <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden nav-blur border-t border-white/10 animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-slate-300 hover:text-[#D4A843] py-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)}>
              <Button className="w-full gold-gradient text-[#0A1628] font-semibold">
                Request a Quote
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

/* ─── Hero ─── */
function Hero({ product }: { product: any }) {
  const stats = [
    { value: "99.6%+", label: "Ultra High Purity" },
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "24h", label: "Fast Response" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${product.images.hero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/70 to-transparent" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4A843]/5 blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4A843]/3 blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 border border-[#D4A843]/30">
            <div className="w-2 h-2 rounded-full bg-[#D4A843] animate-pulse" />
            <span className="text-sm font-bold gold-text uppercase tracking-wider">
              Top-Tier China Supplier | {product.supplyAbility} Capacity
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200 leading-tight">
          {product.heroTitle.split(' Supply Solutions')[0]}
          <br />
          <span className="gold-text">Supply Solutions</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          {product.subtitle}
          <br />
          <span className="text-slate-400">
            Bulk Wholesale · Global Logistics · Strategic Sourcing
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <a href="#contact">
            <Button
              size="lg"
              className="gold-shimmer text-[#0A1628] font-bold text-lg px-8 py-6 rounded-xl shadow-2xl shadow-[#D4A843]/30 hover:shadow-[#D4A843]/50 transition-shadow animate-pulse-gold"
            >
              Get Your Bulk Pricing
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#products">
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4A843]/40 text-[#D4A843] hover:bg-[#D4A843]/10 font-semibold text-lg px-8 py-6 rounded-xl"
            >
              <PackageCheck className="mr-2 h-5 w-5" />
              Wholesale Specs
            </Button>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-500">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 border border-white/5"
            >
              <div className="text-2xl sm:text-4xl font-bold gold-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-2 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 rounded-full border-2 border-[#D4A843]/40 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-[#D4A843] animate-bounce" />
        </div>
      </div>
    </section>
  );
}

/* ─── Trust Bar ─── */
function TrustBar() {
  const certs = [
    { icon: Building2, label: "Strategic Sourcing" },
    { icon: Box, label: "Custom Packaging" },
    { icon: Globe, label: "Global Bulk Logistics" },
    { icon: Award, label: "20+ Years Expertise" },
  ];

  return (
    <section className="relative py-8 -mt-1 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection>
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {certs.map((cert, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center gap-3 group cursor-default"
                >
                  <cert.icon className="h-8 w-8 text-[#D4A843] group-hover:scale-110 transition-transform" />
                  <span className="text-sm sm:text-base font-semibold text-white">
                    {cert.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollRevealSection>
      </div>
    </section>
  );
}

/* ─── SDS Download Dialog ─── */
function SDSDownloadDialog({ product }: { product: any }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const apiBaseUrl = getAPIBaseURL();
      
      const response = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          product_name: product.name,
          subject: `SDS Download Request - ${product.name}`,
          type: 'sds_download',
        }),
      });

      if (response.ok) {
        const sdsFileName = `${product.name.replace(/\s+/g, '-').toLowerCase()}-sds.pdf`;
        const sdsPath = `/documents/${sdsFileName}`;
        const link = document.createElement('a');
        link.href = sdsPath;
        link.download = sdsFileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setSubmitted(true);
        setTimeout(() => {
          setOpen(false);
          setSubmitted(false);
          setForm({ name: "", email: "", company: "" });
        }, 2000);
      } else {
        alert('Failed to process request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    }
  }, [form, product.name]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex-1 border-white/10 text-white hover:bg-white/5 py-7 rounded-2xl text-lg">
          <Download className="mr-2 h-5 w-5" />
          Download SDS
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-[#0A1628] border-white/10 text-white">
        <DialogHeader>
          <DialogTitle className="text-white">Download SDS Document</DialogTitle>
          <DialogDescription className="text-slate-400">
            Please provide your information to download the Safety Data Sheet for {product.name}.
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="h-8 w-8 text-[#D4A843]" />
            </div>
            <p className="text-white font-semibold mb-2">Download Started!</p>
            <p className="text-slate-400 text-sm">Your SDS document is being downloaded.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">
                Full Name <span className="text-red-400">*</span>
              </label>
              <Input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="John Smith"
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">
                Email <span className="text-red-400">*</span>
              </label>
              <Input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="john@company.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
              />
            </div>
            <div>
              <label className="text-sm text-slate-300 mb-1.5 block">
                Company Name
              </label>
              <Input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Global Chemicals Inc."
                className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
              />
            </div>
            <Button
              type="submit"
              className="w-full gold-gradient text-[#0A1628] font-bold py-6 rounded-xl mt-2"
            >
              Start Download
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

/* ─── Product Details ─── */
function ProductDetails({ product }: { product: any }) {
  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ScrollRevealSection className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4A843]/10 border border-[#D4A843]/20 mb-4">
                <FlaskConical className="h-4 w-4 text-[#D4A843]" />
                <span className="text-xs font-bold text-[#D4A843] uppercase tracking-widest">Premium Quality</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Technical Specifications
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our {product.name} is manufactured under strict quality control standards, ensuring consistent performance for industrial applications.
              </p>
            </div>

            <div className="glass rounded-2xl overflow-hidden border-white/5 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="px-6 py-4 text-sm font-bold text-[#D4A843] uppercase tracking-wider">Property</th>
                    <th className="px-6 py-4 text-sm font-bold text-[#D4A843] uppercase tracking-wider">Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {product.specifications.map((spec: any, i: number) => (
                    <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-slate-300 font-medium">{spec.label}</td>
                      <td className="px-6 py-4 text-white font-semibold">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="flex-1">
                <Button className="w-full gold-gradient text-[#0A1628] font-bold py-7 rounded-2xl text-lg shadow-xl shadow-[#D4A843]/10">
                  Request Bulk Quote
                </Button>
              </a>
              <SDSDownloadDialog product={product} />
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection delay={200} className="relative">
            <div className="absolute -inset-4 bg-[#D4A843]/10 blur-3xl rounded-full" />
            <div className="relative glass p-4 rounded-3xl border-white/10 shadow-2xl overflow-hidden group">
              <img
                src={product.images.product}
                alt={product.name}
                className="w-full h-auto rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-8 right-8 glass-strong px-6 py-4 rounded-2xl border-white/20">
                <p className="text-[#D4A843] font-bold text-2xl">99.6%+</p>
                <p className="text-white text-xs font-bold uppercase tracking-widest mt-1">Purity Level</p>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="glass p-2 rounded-xl border-white/5">
                  <div className="aspect-square bg-white/5 rounded-lg flex items-center justify-center">
                    <PackageCheck className="h-8 w-8 text-slate-600" />
                  </div>
                </div>
              ))}
            </div>
          </ScrollRevealSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Applications ─── */
function Applications({ product }: { product: any }) {
  return (
    <section id="applications" className="py-24 bg-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Industrial Applications
          </h2>
          <p className="text-slate-400 text-lg">
            Versatile chemical solutions optimized for high-performance industrial processes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {product.applications.map((app: any, i: number) => (
            <ScrollRevealSection key={i} delay={i * 100}>
              <div className="group h-full glass rounded-3xl overflow-hidden border-white/5 hover:border-[#D4A843]/30 transition-all duration-500 hover:-translate-y-2">
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] to-transparent opacity-60" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#D4A843] transition-colors">
                    {app.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─── */
function WhyUs() {
  const features = [
    {
      icon: Factory,
      title: "Direct Factory Access",
      desc: "Eliminate middlemen. Source directly from top-tier Chinese manufacturing facilities.",
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      icon: ShieldCheck,
      title: "Rigorous Quality Control",
      desc: "Multi-stage testing ensuring every batch meets international purity standards.",
      color: "from-emerald-500/20 to-emerald-600/20"
    },
    {
      icon: Truck,
      title: "Global Bulk Logistics",
      desc: "Strategic partnerships with major shipping lines for reliable worldwide delivery.",
      color: "from-orange-500/20 to-orange-600/20"
    },
    {
      icon: Zap,
      title: "Fast Response Time",
      desc: "Expert technical support and formal quotations provided within 24 hours.",
      color: "from-purple-500/20 to-purple-600/20"
    }
  ];

  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollRevealSection>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Your Strategic Partner in <br />
              <span className="gold-text">Chemical Sourcing</span>
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4 p-6 rounded-2xl glass border-white/5">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shrink-0">
                  <BadgeCheck className="text-[#0A1628] h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">ISO Certified Supplier</h4>
                  <p className="text-slate-400">Compliance with global safety and environmental regulations.</p>
                </div>
              </div>
              <div className="flex gap-4 p-6 rounded-2xl glass border-white/5">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Globe className="text-[#D4A843] h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Worldwide Network</h4>
                  <p className="text-slate-400">Serving clients across 50+ countries with localized support.</p>
                </div>
              </div>
            </div>
          </ScrollRevealSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((f, i) => (
              <ScrollRevealSection key={i} delay={i * 100}>
                <div className={`p-8 rounded-3xl glass border-white/5 h-full hover:bg-white/5 transition-all duration-300 group`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <f.icon className="h-7 w-7 text-[#D4A843]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Inquiry Form ─── */
function InquiryForm({ product }: { product: any }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product_grade: "",
    quantity: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value: string) => {
    setForm((prev) => ({ ...prev, product_grade: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const apiBaseUrl = getAPIBaseURL();
      const response = await fetch(`${apiBaseUrl}/api/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          product_name: product.name,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          company: "",
          phone: "",
          product_grade: "",
          quantity: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-[40px] overflow-hidden border-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 sm:p-16 bg-[#D4A843]">
              <h2 className="text-3xl sm:text-5xl font-bold text-[#0A1628] mb-8">
                Request Your <br />Bulk Quotation
              </h2>
              <p className="text-[#0A1628]/80 text-lg mb-12 font-medium">
                Our sales engineers are ready to provide technical support and competitive wholesale pricing for your requirements.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1628]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0A1628]/20 transition-colors">
                    <Mail className="text-[#0A1628] h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[#0A1628]/60 text-sm font-bold uppercase tracking-wider">Email Us</p>
                    <p className="text-[#0A1628] font-bold text-xl">info@sinopeakchem.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1628]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0A1628]/20 transition-colors">
                    <Phone className="text-[#0A1628] h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[#0A1628]/60 text-sm font-bold uppercase tracking-wider">Direct Line</p>
                    <p className="text-[#0A1628] font-bold text-xl">+86 123 4567 8900</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1628]/10 flex items-center justify-center shrink-0 group-hover:bg-[#0A1628]/20 transition-colors">
                    <MapPin className="text-[#0A1628] h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-[#0A1628]/60 text-sm font-bold uppercase tracking-wider">Headquarters</p>
                    <p className="text-[#0A1628] font-bold text-xl">Shanghai, China</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 sm:p-16 bg-white/5">
              {status === "success" ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <div className="w-24 h-24 rounded-full bg-[#D4A843]/10 flex items-center justify-center mb-8">
                    <CheckCircle2 className="h-12 w-12 text-[#D4A843]" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">Inquiry Sent!</h3>
                  <p className="text-slate-400 text-lg mb-8">
                    Thank you for your request. Our sales team will contact you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                    className="border-[#D4A843]/40 text-[#D4A843] hover:bg-[#D4A843]/10 px-8"
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Full Name *</label>
                      <Input
                        name="name"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        className="bg-white/5 border-white/10 text-white py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="bg-white/5 border-white/10 text-white py-6"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Company</label>
                      <Input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Global Chemicals Inc."
                        className="bg-white/5 border-white/10 text-white py-6"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Phone Number</label>
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000 (Optional)"
                        className="bg-white/5 border-white/10 text-white py-6"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Product Grade</label>
                      <Select onValueChange={handleSelectChange}>
                        <SelectTrigger className="bg-white/5 border-white/10 text-white py-6">
                          <SelectValue placeholder="Select Grade" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#0A1628] border-white/10 text-white">
                          <SelectItem value="Industrial">Industrial Grade</SelectItem>
                          <SelectItem value="Food">Food Grade</SelectItem>
                          <SelectItem value="Pharmaceutical">Pharmaceutical Grade</SelectItem>
                          <SelectItem value="Custom">Custom Specification</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Order Quantity</label>
                      <Input
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        placeholder="e.g. 20 MT"
                        className="bg-white/5 border-white/10 text-white py-6"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-300 uppercase tracking-wider">Requirements / Message</label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Please describe your specific requirements..."
                      className="bg-white/5 border-white/10 text-white min-h-[120px] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full gold-gradient text-[#0A1628] font-bold py-8 rounded-2xl text-xl shadow-2xl shadow-[#D4A843]/20 hover:opacity-90 transition-all"
                  >
                    {status === "loading" ? "Processing..." : "Get Formal Quotation"}
                  </Button>
                  
                  {status === "error" && (
                    <p className="text-red-400 text-center font-medium">Failed to send inquiry. Please try again later.</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer({ product }: { product: any }) {
  return (
    <footer className="bg-[#0A1628] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg gold-gradient flex items-center justify-center font-bold text-[#0A1628]">
                {product.chemicalFormula.substring(0, 2)}
              </div>
              <span className="text-2xl font-bold text-white">Sinopeakchem</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              A leading global supplier of high-purity {product.name} and industrial chemical solutions. Dedicated to quality, reliability, and strategic sourcing excellence.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4A843]/20 transition-colors cursor-pointer group">
                  <div className="w-5 h-5 bg-slate-600 rounded-sm group-hover:bg-[#D4A843] transition-colors" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#products" className="text-slate-400 hover:text-[#D4A843] transition-colors">Products</a></li>
              <li><a href="#applications" className="text-slate-400 hover:text-[#D4A843] transition-colors">Applications</a></li>
              <li><a href="#why-us" className="text-slate-400 hover:text-[#D4A843] transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-[#D4A843] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-400 hover:text-[#D4A843] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#D4A843] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#D4A843] transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-slate-400 hover:text-[#D4A843] transition-colors">Sitemap</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm">
            © 2024 Sinopeakchem. All rights reserved. Professional Chemical Supply Solutions.
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-slate-600" />
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Secure Supply Chain</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-slate-600" />
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">Global Logistics</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── Back to Top ─── */
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-8 left-8 z-40 w-12 h-12 rounded-full glass border-white/10 flex items-center justify-center text-[#D4A843] hover:bg-[#D4A843]/10 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUp size={20} />
    </button>
  );
}

/* ─── Main Index Page ─── */
export default function Index() {
  const { productSlug } = useParams();
  const product = products[productSlug as keyof typeof products];

  if (!product) {
    return <Navigate to="/all" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0A1628] selection:bg-[#D4A843]/30 selection:text-[#D4A843]">
      <Helmet>
        <title>{product.name} | Premium China Supplier | Sinopeakchem</title>
        <meta name="description" content={product.subtitle} />
      </Helmet>

      <Navigation product={product} />
      <Hero product={product} />
      <TrustBar />
      <ProductDetails product={product} />
      <Applications product={product} />
      <WhyUs />
      
      {/* Testimonials */}
      <section className="py-24 bg-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">Global Trust</h2>
            <p className="text-slate-400 text-lg">Partnering with industry leaders across the globe.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Michael Chen",
                role: "Procurement Director",
                company: "Global Tech Solutions",
                content: "Sinopeakchem has been our reliable partner for over 5 years. Their quality consistency and logistics support are unmatched in the industry."
              },
              {
                name: "Sarah Williams",
                role: "Quality Assurance Manager",
                company: "Pure Water Systems",
                content: "The purity levels of their sodium thiosulfate are consistently above 99.6%. Their technical documentation and SDS are always comprehensive."
              },
              {
                name: "Ahmed Hassan",
                role: "Operations Manager",
                company: "Mining Resources Ltd",
                content: "Exceptional service and fast response times. They understand the urgency of industrial supply chains and always deliver on time."
              }
            ].map((t, i) => (
              <ScrollRevealSection key={i} delay={i * 100}>
                <div className="glass p-10 rounded-[32px] border-white/5 h-full flex flex-col hover:bg-white/5 transition-all duration-500">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-4 w-4 fill-[#D4A843] text-[#D4A843]" />
                    ))}
                  </div>
                  <p className="text-slate-300 italic mb-8 flex-grow leading-relaxed">
                    "{t.content}"
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-[#D4A843] text-sm font-medium">{t.role}</p>
                    <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">{t.company}</p>
                  </div>
                </div>
              </ScrollRevealSection>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm product={product} />
      <Footer product={product} />
      <FloatingCTA productName={product.name} />
      <BackToTop />
    </div>
  );
}

import { useEffect, useRef, useState, useCallback } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";
import { products } from "@/content/products";

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
            {product.chemicalFormula} <span className="text-[#D4A843]">Pro</span>
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
              Get Quote
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
                Get Quote
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
    { value: "20+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "99%+", label: "Purity Guaranteed" },
    { value: "ISO", label: "Certified Factory" },
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
          backgroundAttachment: 'fixed' // This creates the fixed effect
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1628]/80 via-[#0A1628]/60 to-[#0A1628]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/70 to-transparent" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#D4A843]/5 blur-3xl z-0" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-[#D4A843]/3 blur-3xl z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-[#D4A843] animate-pulse" />
            <span className="text-sm text-slate-300">
              Trusted by 500+ Companies Worldwide
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up animation-delay-200 leading-tight">
          {product.heroTitle.split(' Manufacturer')[0]}
          <br />
          <span className="gold-text">Manufacturer</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
          {product.subtitle}
          <br />
          <span className="text-slate-400">
            ISO 9001 · GMP · NSF Certified
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <a href="#contact">
            <Button
              size="lg"
              className="gold-shimmer text-[#0A1628] font-bold text-lg px-8 py-6 rounded-xl shadow-2xl shadow-[#D4A843]/30 hover:shadow-[#D4A843]/50 transition-shadow animate-pulse-gold"
            >
              Get Free Quote
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
          <a href="#products">
            <Button
              size="lg"
              variant="outline"
              className="border-[#D4A843]/40 text-[#D4A843] hover:bg-[#D4A843]/10 font-semibold text-lg px-8 py-6 rounded-xl"
            >
              <FileCheck className="mr-2 h-5 w-5" />
              View Specifications
            </Button>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-500">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl font-bold gold-text">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 mt-1">
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
    { icon: ShieldCheck, label: "ISO 9001:2015" },
    { icon: Award, label: "GMP Certified" },
    { icon: FileCheck, label: "NSF International" },
    { icon: CheckCircle2, label: "REACH Compliant" },
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

/* ─── Product Specs ─── */
function ProductSpecs({ product }: { product: any }) {
  return (
    <section id="products" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection>
          <div className="text-center mb-16">
            <span className="text-[#D4A843] text-sm font-semibold tracking-widest uppercase">
              Product Specifications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Premium <span className="gold-text">Product Standards</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Our products meet the highest industry standards for purity and consistency.
            </p>
          </div>
        </ScrollRevealSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollRevealSection delay={100}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#D4A843]/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative glass rounded-3xl p-4 sm:p-6">
                <img
                  src={product.images.product}
                  alt={product.name}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </ScrollRevealSection>

          <ScrollRevealSection delay={200}>
            <div className="glass rounded-3xl p-6 sm:p-10 border-l-4 border-l-[#D4A843]">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-[#D4A843]/10 text-[#D4A843] text-xs font-bold rounded-full uppercase tracking-wider">
                  Premium Grade
                </span>
                <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-wider">
                  In Stock
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {product.name}
              </h3>
              <p className="text-[#D4A843] font-mono text-sm mb-8">
                {product.chemicalFormula} · CAS {product.cas}
              </p>

              <div className="space-y-4">
                {product.specifications.map((spec: any, i: number) => (
                  <div
                    key={i}
                    className="flex justify-between py-3 border-b border-white/5 group"
                  >
                    <span className="text-slate-400 group-hover:text-slate-300 transition-colors">
                      {spec.label}
                    </span>
                    <span className="text-white font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a href="#contact">
                  <Button className="w-full sm:w-auto gold-gradient text-[#0A1628] font-bold px-10 py-6 rounded-xl">
                    Request Full COA
                  </Button>
                </a>
              </div>
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
    <section id="applications" className="py-20 sm:py-28 bg-[#080f1f] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection>
          <div className="text-center mb-16">
            <span className="text-[#D4A843] text-sm font-semibold tracking-widest uppercase">
              Industry Applications
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Powering <span className="gold-text">Critical Industries</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Our {product.name} delivers consistent performance across diverse industrial applications.
            </p>
          </div>
        </ScrollRevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {product.applications.map((app: any, i: number) => (
            <ScrollRevealSection key={i} delay={i * 100}>
              <div className="group relative glass rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/20 to-transparent" />
                </div>
                <div className="p-6 relative -mt-12 flex-grow flex flex-col">
                  <div className="inline-block self-start px-3 py-1 bg-[#D4A843] text-[#0A1628] text-[10px] font-bold rounded-full mb-3 uppercase">
                    {app.tag}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {app.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {app.desc}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center text-[#D4A843] text-sm font-bold hover:gap-2 transition-all mt-auto"
                  >
                    Request Quote <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </ScrollRevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us ─── */
function WhyChooseUs({ product }: { product: any }) {
  const features = [
    {
      icon: Factory,
      title: "Factory Direct Pricing",
      desc: "Eliminate middlemen. As a manufacturer with 20+ years experience, we offer the most competitive pricing in the market with transparent cost structure.",
    },
    {
      icon: ShieldCheck,
      title: "99%+ Purity Guaranteed",
      desc: "Every batch undergoes rigorous QC testing with full COA documentation. Our state-of-the-art production ensures consistent purity exceeding industry standards.",
    },
    {
      icon: Globe,
      title: "Global Shipping & Logistics",
      desc: "Delivered to 50+ countries with reliable logistics partnerships. FOB, CIF, DDP terms available. 20ft/40ft container loading optimization.",
    },
    {
      icon: FlaskConical,
      title: "Free Samples Available",
      desc: "Test before you commit. We provide free samples with COA/SDS documentation so you can verify quality before placing bulk orders.",
    },
  ];

  return (
    <section id="why-us" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection>
          <div className="text-center mb-16">
            <span className="text-[#D4A843] text-sm font-semibold tracking-widest uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Your Trusted{" "}
              <span className="gold-text">Manufacturing Partner</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Two decades of expertise delivering premium {product.name} to
              industries worldwide.
            </p>
          </div>
        </ScrollRevealSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <ScrollRevealSection key={i} delay={i * 100}>
              <div className="glass rounded-2xl p-6 group hover:border-[#D4A843]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-1 gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-xl bg-[#D4A843]/10 flex items-center justify-center mb-5 group-hover:bg-[#D4A843]/20 transition-colors">
                  <feat.icon className="h-7 w-7 text-[#D4A843]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {feat.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            </ScrollRevealSection>
          ))}
        </div>

        <ScrollRevealSection delay={200}>
          <div className="mt-12 glass rounded-2xl p-8 grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <Truck className="h-8 w-8 text-[#D4A843] mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-1">Fast Lead Time</h4>
              <p className="text-slate-400 text-sm">
                7-15 days production, 3-5 days sample dispatch
              </p>
            </div>
            <div>
              <FileCheck className="h-8 w-8 text-[#D4A843] mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-1">
                Full Documentation
              </h4>
              <p className="text-slate-400 text-sm">
                COA, SDS, DMF, REACH — all certificates available
              </p>
            </div>
            <div>
              <Award className="h-8 w-8 text-[#D4A843] mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-1">Flexible MOQ</h4>
              <p className="text-slate-400 text-sm">
                From 1MT trial orders to 1000MT+ annual contracts
              </p>
            </div>
          </div>
        </ScrollRevealSection>
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
  const [submitted, setSubmitted] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }, []);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#080f1f] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollRevealSection>
          <div className="text-center mb-16">
            <span className="text-[#D4A843] text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-3">
              Request a <span className="gold-text">Free Quote</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
              Fill out the form below for {product.name} and our team will respond within 24 hours
              with competitive pricing and full documentation.
            </p>
          </div>
        </ScrollRevealSection>

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info sidebar */}
          <ScrollRevealSection delay={100} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6">
                <h3 className="text-xl font-bold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4A843]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-[#D4A843]" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Email</p>
                      <a
                        href={`mailto:${product.email}`}
                        className="text-white font-medium hover:text-[#D4A843] transition-colors"
                      >
                        {product.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4A843]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-[#D4A843]" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Phone</p>
                      <p className="text-white font-medium">
                        +86 400-888-8888
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#D4A843]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-[#D4A843]" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">Address</p>
                      <p className="text-white font-medium">
                        Chemical Industrial Park,
                        <br />
                        Shandong, China 250000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6">
                <h4 className="text-white font-semibold mb-3">
                  What You'll Receive
                </h4>
                <ul className="space-y-2">
                  {[
                    "Competitive factory pricing",
                    "Full COA & SDS documentation",
                    "Free sample arrangement",
                    "Shipping cost estimate",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                    >
                      <CheckCircle2 className="h-4 w-4 text-[#D4A843] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollRevealSection>

          {/* Form */}
          <ScrollRevealSection delay={200} className="lg:col-span-3">
            <div className="glass rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#D4A843]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="h-10 w-10 text-[#D4A843]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Inquiry Submitted!
                  </h3>
                  <p className="text-slate-400 mb-6">
                    Thank you! We'll get back to you soon. Our team will contact
                    you within 24 hours with a detailed quotation.
                  </p>
                  <Button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        company: "",
                        phone: "",
                        product_grade: "",
                        quantity: "",
                        message: "",
                      });
                    }}
                    variant="outline"
                    className="border-[#D4A843]/40 text-[#D4A843] hover:bg-[#D4A843]/10"
                  >
                    Submit Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
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
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">
                        Company <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        required
                        placeholder="Company Name"
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">
                        Phone
                      </label>
                      <Input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">
                        Product Grade <span className="text-red-400">*</span>
                      </label>
                      <Select
                        value={form.product_grade}
                        onValueChange={(val) =>
                          setForm((p) => ({ ...p, product_grade: val }))
                        }
                        required
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-[#D4A843]/20">
                          <SelectValue placeholder="Select grade" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#132042] border-white/10">
                          <SelectItem value="Pentahydrate">
                            Pentahydrate
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm text-slate-300 mb-1.5 block">
                        Quantity <span className="text-red-400">*</span>
                      </label>
                      <Input
                        name="quantity"
                        value={form.quantity}
                        onChange={handleChange}
                        required
                        placeholder="e.g. 20 MT / month"
                        className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-slate-300 mb-1.5 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your requirements, application, delivery destination, etc."
                      className="bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-[#D4A843] focus:ring-[#D4A843]/20 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full gold-gradient text-[#0A1628] font-bold text-lg py-6 rounded-xl shadow-lg shadow-[#D4A843]/20 hover:shadow-[#D4A843]/40 transition-shadow"
                  >
                    Submit Inquiry
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              )}
            </div>
          </ScrollRevealSection>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer({ product }: { product: any }) {
  return (
    <footer className="py-16 border-t border-white/5 relative z-10 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center font-bold text-[#0A1628]">
                {product.chemicalFormula.substring(0, 2)}
              </div>
              <span className="text-lg font-bold text-white">
                {product.chemicalFormula} <span className="text-[#D4A843]">Pro</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading manufacturer of premium {product.name} with 20+ years
              of experience serving global industries.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                "Pentahydrate Grade",
                "Pharmaceutical Grade",
                "Industrial Grade",
                "Custom Specifications",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#products"
                    className="text-slate-400 text-sm hover:text-[#D4A843] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Certifications</h4>
            <ul className="space-y-2">
              {[
                "ISO 9001:2015",
                "GMP Certified",
                "NSF International",
                "REACH Compliant",
                "Halal Certified",
              ].map((item, i) => (
                <li key={i}>
                  <span className="text-slate-400 text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#D4A843]" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="h-4 w-4 text-[#D4A843]" />
                <a
                  href={`mailto:${product.email}`}
                  className="hover:text-[#D4A843] transition-colors"
                >
                  {product.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="h-4 w-4 text-[#D4A843]" />
                +86 400-888-8888
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="h-4 w-4 text-[#D4A843] mt-0.5" />
                Chemical Industrial Park, Shandong, China
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 {product.chemicalFormula} Pro. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-slate-500 text-sm hover:text-[#D4A843] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 text-sm hover:text-[#D4A843] transition-colors"
            >
              Terms of Service
            </a>
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
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full gold-gradient text-[#0A1628] flex items-center justify-center shadow-lg shadow-[#D4A843]/30 hover:shadow-[#D4A843]/50 transition-all animate-fade-in"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

/* ─── Main Page ─── */
export default function Index() {
  const { productSlug } = useParams();
  const product = productSlug ? products[productSlug] : null;

  if (!product) {
    return <Navigate to="/sodium-thiosulfate" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0A1628] selection:bg-[#D4A843] selection:text-[#0A1628]">
      <Navigation product={product} />
      <Hero product={product} />
      <TrustBar />
      <ProductSpecs product={product} />
      <Applications product={product} />
      <WhyChooseUs product={product} />
      <InquiryForm product={product} />
      <Footer product={product} />
      <BackToTop />
    </div>
  );
}

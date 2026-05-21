import { products } from "@/content/products";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package } from "lucide-react";

export default function ProductIndex() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gold-gradient mb-6">
            <Package className="h-8 w-8 text-[#0A1628]" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Product Landing Pages</h1>
          <p className="text-slate-400">Select a product to view its dedicated landing page.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(products).map(([slug, product]) => (
            <a
              key={slug}
              href={`/${slug}`}
              className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4A843]/50 hover:bg-white/10 transition-all"
            >
              <div className="flex flex-col h-full">
                <span className="text-[#D4A843] text-xs font-bold uppercase tracking-widest mb-2">
                  {product.chemicalFormula}
                </span>
                <h2 className="text-xl font-bold mb-4 group-hover:text-[#D4A843] transition-colors">
                  {product.name}
                </h2>
                <div className="mt-auto flex items-center text-sm text-slate-400 group-hover:text-white transition-colors">
                  View Landing Page
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://sinopeakchem.com/en">
            <Button variant="link" className="text-slate-500 hover:text-[#D4A843]">
              Return to Main Website
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

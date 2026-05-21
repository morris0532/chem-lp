import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import ProductIndex from "./pages/ProductIndex";

const queryClient = new QueryClient();

const ExternalRedirect = () => {
  useEffect(() => {
    window.location.href = "https://sinopeakchem.com/en";
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ExternalRedirect />} />
          <Route path="/all" element={<ProductIndex />} />
          <Route path="/:productSlug" element={<Index />} />
          <Route path="*" element={<ProductIndex />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";

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
          <Route path="/:productSlug" element={<Index />} />
          <Route path="*" element={<Navigate to="/sodium-thiosulfate" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

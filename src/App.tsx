import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import BiosphereAI from "./pages/BiosphereAI";
import EcoImpact from "./pages/EcoImpact";
import RegenerationEconomy from "./pages/RegenerationEconomy";
import WisdomEngine from "./pages/WisdomEngine";
import ImpactNetwork from "./pages/ImpactNetwork";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/biosphere" element={<BiosphereAI />} />
          <Route path="/ecoimpact" element={<EcoImpact />} />
          <Route path="/regeneration" element={<RegenerationEconomy />} />
          <Route path="/wisdom" element={<WisdomEngine />} />
          <Route path="/impact" element={<ImpactNetwork />} />
          {/* Redirect unknown routes to dashboard */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
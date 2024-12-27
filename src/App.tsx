import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "@/pages/Index";
import Dashboard from "@/pages/Dashboard";
import EcoImpact from "@/pages/EcoImpact";
import BiosphereAI from "@/pages/BiosphereAI";
import EthicalNexus from "@/pages/EthicalNexus";
import RegenerationEconomy from "@/pages/RegenerationEconomy";
import WisdomEngine from "@/pages/WisdomEngine";
import ImpactNetwork from "@/pages/ImpactNetwork";
import EarthCredits from "@/pages/EarthCredits";
import CarbonOffsetProjects from "@/pages/CarbonOffsetProjects";

import "./App.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/eco-impact" element={<EcoImpact />} />
          <Route path="/biosphere-ai" element={<BiosphereAI />} />
          <Route path="/ethical-nexus" element={<EthicalNexus />} />
          <Route path="/regeneration" element={<RegenerationEconomy />} />
          <Route path="/wisdom-engine" element={<WisdomEngine />} />
          <Route path="/impact-network" element={<ImpactNetwork />} />
          <Route path="/earth-credits" element={<EarthCredits />} />
          <Route path="/carbon-offset-projects" element={<CarbonOffsetProjects />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
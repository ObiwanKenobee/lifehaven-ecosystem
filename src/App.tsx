import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
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
  );
}

export default App;
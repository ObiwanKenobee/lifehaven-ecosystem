import { motion } from "framer-motion";
import { NodeMap } from "@/components/impact/NodeMap";
import { NodeActivity } from "@/components/impact/NodeActivity";
import { GlobalInitiatives } from "@/components/impact/GlobalInitiatives";
import { CollaborationHub } from "@/components/impact/CollaborationHub";
import { ImpactMetrics } from "@/components/impact/ImpactMetrics";
import { useToast } from "@/components/ui/use-toast";

export default function ImpactNetwork() {
  const { toast } = useToast();

  return (
    <div className="container mx-auto p-6 space-y-8">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl font-bold text-sage-800">Impact Network</h1>
        <p className="text-xl text-sage-600">Connected for Change. United for Impact.</p>
        <div className="text-3xl font-bold text-sage-700">
          Active RegenNodes: <span className="text-sage-500">1,429</span>
        </div>
      </motion.section>

      {/* Map and Activity Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NodeMap />
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Node Activity</h2>
            <NodeActivity />
          </div>
        </div>
      </div>

      {/* Global Initiatives */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Global Initiatives</h2>
        <GlobalInitiatives />
      </section>

      {/* Collaboration Hub */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Collaboration Hub</h2>
        <CollaborationHub />
      </section>

      {/* Impact Metrics */}
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Impact Metrics</h2>
        <ImpactMetrics />
      </section>
    </div>
  );
}
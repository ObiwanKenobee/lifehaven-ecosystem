import { motion } from "framer-motion";
import { Leaf, Globe, Recycle } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "BioSphere AI",
    description: "Global biodiversity monitoring and AI-driven interventions for ecosystem health.",
  },
  {
    icon: Globe,
    title: "Ethical Nexus",
    description: "Transparent supply chains and labor equity through blockchain technology.",
  },
  {
    icon: Recycle,
    title: "Regeneration Economy",
    description: "Digital currency rewarding sustainable actions and promoting circular commerce.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-700 mb-4">Core Features</h2>
          <p className="text-sage-600 max-w-2xl mx-auto">
            Transformative solutions for a sustainable future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-8 rounded-2xl bg-sage-50 hover:bg-sage-100 transition-colors duration-300"
            >
              <feature.icon className="w-12 h-12 text-sage-500 mb-6" />
              <h3 className="text-xl font-semibold text-sage-700 mb-4">
                {feature.title}
              </h3>
              <p className="text-sage-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
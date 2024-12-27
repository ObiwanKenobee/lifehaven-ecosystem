import { motion } from "framer-motion";
import { Brain, Globe, Leaf, Recycle, Users, BookOpen } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "BioSphere AI",
    description: "Global biodiversity monitoring and AI-driven interventions for ecosystem health.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Globe,
    title: "Ethical Nexus",
    description: "Transparent supply chains and labor equity through blockchain technology.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Recycle,
    title: "Regeneration Economy",
    description: "Digital currency rewarding sustainable actions and promoting circular commerce.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Brain,
    title: "Wisdom Engine",
    description: "Blending ancient wisdom with cutting-edge technology for sustainable solutions.",
    color: "from-orange-500 to-amber-600",
  },
  {
    icon: Users,
    title: "Global Collaboration",
    description: "Connect and collaborate with changemakers worldwide on impactful projects.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: BookOpen,
    title: "Knowledge Hub",
    description: "Access a vast repository of sustainable practices and innovation resources.",
    color: "from-rose-500 to-pink-600",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sage-600 text-sm font-semibold tracking-wider uppercase"
          >
            Core Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-sage-700 mt-4 mb-6"
          >
            Transformative Solutions for a Sustainable Future
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sage-600 max-w-2xl mx-auto"
          >
            Discover how our integrated features work together to create lasting positive impact
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-white hover:bg-sage-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 text-sage-500 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-sage-700 mb-4">
                  {feature.title}
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
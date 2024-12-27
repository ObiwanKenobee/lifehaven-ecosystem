import { motion } from "framer-motion";
import { Globe, Users, Leaf } from "lucide-react";

export const Hero = () => {
  const impactMetrics = [
    { icon: Globe, value: "2.5M", label: "Earth Credits Generated" },
    { icon: Users, value: "150K", label: "Active Contributors" },
    { icon: Leaf, value: "1.2M", label: "Trees Planted" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-sage-50 to-sage-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/earth-bg.png')] bg-cover bg-center opacity-10 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sage-50/80" />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-700 rounded-full"
          >
            Redefining Our Future
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sage-700 to-sage-500 bg-clip-text text-transparent"
          >
            LifeSphere
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-sage-700 mb-12 leading-relaxed"
          >
            An Operating System for Sustainable Civilization
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button className="px-8 py-4 bg-sage-500 text-white rounded-lg font-medium hover:bg-sage-600 transition-colors duration-300 flex items-center justify-center gap-2">
              <Globe className="w-5 h-5" />
              Join the Movement
            </button>
            <button className="px-8 py-4 bg-white text-sage-700 rounded-lg font-medium border border-sage-200 hover:bg-sage-100 transition-colors duration-300">
              Watch Video
            </button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.2 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <metric.icon className="w-8 h-8 text-sage-500" />
                </div>
                <h3 className="text-3xl font-bold text-sage-700 mb-2">{metric.value}</h3>
                <p className="text-sage-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
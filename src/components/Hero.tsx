import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sage-50">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sage-50/30" />
      </div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-700 rounded-full">
            Redefining Our Future
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sage-700 to-sage-500 bg-clip-text text-transparent">
            LifeSphere
          </h1>
          <p className="text-xl md:text-2xl text-sage-700 mb-12 leading-relaxed">
            An Operating System for Sustainable Civilization
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button className="px-8 py-4 bg-sage-500 text-white rounded-lg font-medium hover:bg-sage-600 transition-colors duration-300">
              Join the Movement
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
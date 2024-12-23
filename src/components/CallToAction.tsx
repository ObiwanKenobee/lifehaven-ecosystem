import { motion } from "framer-motion";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-sage-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-sage-700 mb-6">
            Join the Movement
          </h2>
          <p className="text-sage-600 mb-12 text-lg">
            Together, we can reshape the future and create a thriving, regenerative world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-sage-500 text-white rounded-lg font-medium hover:bg-sage-600 transition-colors duration-300">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white text-sage-700 rounded-lg font-medium border border-sage-200 hover:bg-sage-100 transition-colors duration-300">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
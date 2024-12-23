import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { value: "10T", label: "Regenerative Industries by 2040" },
  { value: "500M", label: "Workers Empowered Globally" },
  { value: "2B", label: "Hectares of Land Restored" },
];

export const Impact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} className="py-24 bg-sage-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
          <p className="text-sage-100 max-w-2xl mx-auto">
            Measurable change for a better world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.span
                className="block text-5xl font-bold text-white mb-4"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {metric.value}
              </motion.span>
              <span className="text-sage-100">{metric.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
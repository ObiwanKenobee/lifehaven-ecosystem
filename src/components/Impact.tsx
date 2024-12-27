import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TreePine, Users, Globe } from "lucide-react";

const metrics = [
  { 
    icon: Globe,
    value: "10T",
    label: "Regenerative Industries by 2040",
    description: "Transforming global industries through sustainable practices"
  },
  {
    icon: Users,
    value: "500M",
    label: "Workers Empowered Globally",
    description: "Creating equitable opportunities worldwide"
  },
  {
    icon: TreePine,
    value: "2B",
    label: "Hectares of Land Restored",
    description: "Regenerating ecosystems for future generations"
  },
];

export const Impact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-sage-600 to-sage-700">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sage-200 text-sm font-semibold tracking-wider uppercase"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mt-4 mb-6"
          >
            Measurable Change for a Better World
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sage-100 max-w-2xl mx-auto"
          >
            Together, we're creating lasting positive impact across the globe
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.value}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex justify-center mb-6"
              >
                <metric.icon className="w-16 h-16 text-sage-200" />
              </motion.div>
              <motion.span
                className="block text-5xl font-bold text-white mb-4"
                initial={{ scale: 0.5 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {metric.value}
              </motion.span>
              <span className="block text-xl text-sage-100 mb-2">{metric.label}</span>
              <span className="text-sage-200 text-sm">{metric.description}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
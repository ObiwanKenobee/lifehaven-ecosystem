import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Impact } from "@/components/Impact";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Impact />
      <CallToAction />
    </div>
  );
};

export default Index;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { HandshakeIcon, UsersIcon, HeartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const JoinMovement = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedRole, setSelectedRole] = useState<string>("");

  const roles = [
    {
      id: "contributor",
      title: "Contributor",
      description: "Support projects and track your impact",
      icon: HandshakeIcon,
    },
    {
      id: "partner",
      title: "Partner Organization",
      description: "Collaborate on conservation initiatives",
      icon: UsersIcon,
    },
    {
      id: "advocate",
      title: "Ecosystem Advocate",
      description: "Spread awareness and drive change",
      icon: HeartIcon,
    },
  ];

  const handleJoin = () => {
    if (!selectedRole) {
      toast({
        title: "Please select a role",
        description: "Choose how you'd like to participate in the movement",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Welcome to the movement!",
      description: "We're excited to have you join us.",
    });
    
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-sage-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sage-800 text-center mb-6">
            Join the Movement
          </h1>
          <p className="text-lg text-sage-600 text-center mb-12">
            Choose your role in building a sustainable future
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {roles.map((role) => (
              <motion.div
                key={role.id}
                whileHover={{ scale: 1.02 }}
                className={`p-6 rounded-lg cursor-pointer transition-colors ${
                  selectedRole === role.id
                    ? "bg-sage-100 border-2 border-sage-500"
                    : "bg-white border border-sage-200 hover:border-sage-300"
                }`}
                onClick={() => setSelectedRole(role.id)}
              >
                <role.icon className="w-12 h-12 text-sage-500 mb-4" />
                <h3 className="text-xl font-semibold text-sage-800 mb-2">
                  {role.title}
                </h3>
                <p className="text-sage-600">{role.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button
              size="lg"
              className="bg-sage-500 hover:bg-sage-600 text-white px-8"
              onClick={handleJoin}
            >
              Get Started
            </Button>
            <p className="text-sm text-sage-500">
              By joining, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default JoinMovement;
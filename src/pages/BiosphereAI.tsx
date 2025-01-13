import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, Globe, Leaf, Trees, Plus, Pencil, Trash2 } from "lucide-react";
import { BiodiversityMap } from "@/components/biosphere/BiodiversityMap";
import { HealthyEcosystemIndicators } from "@/components/biosphere/HealthyEcosystemIndicators";
import { RiskAlerts } from "@/components/biosphere/RiskAlerts";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { SpeciesForm } from "@/components/biosphere/SpeciesForm";
import { SpeciesList } from "@/components/biosphere/SpeciesList";

export default function BiosphereAI() {
  const [isAddingSpecies, setIsAddingSpecies] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: species, isLoading } = useQuery({
    queryKey: ['species'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('species')
        .select('*')
        .order('name', { ascending: true });
      
      if (error) {
        console.error('Error fetching species:', error);
        throw error;
      }
      return data;
    }
  });

  const addSpeciesMutation = useMutation({
    mutationFn: async (newSpecies: any) => {
      const { data, error } = await supabase
        .from('species')
        .insert([newSpecies])
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['species'] });
      toast({
        title: "Success",
        description: "Species added successfully",
      });
      setIsAddingSpecies(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to add species",
        variant: "destructive",
      });
      console.error('Error adding species:', error);
    }
  });

  return (
    <div className="container mx-auto p-6 space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-sage-800">BioSphere AI Panel</h1>
        <Dialog open={isAddingSpecies} onOpenChange={setIsAddingSpecies}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add Species
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Species</DialogTitle>
            </DialogHeader>
            <SpeciesForm onSubmit={(data) => addSpeciesMutation.mutate(data)} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Map Section */}
        <Card className="lg:col-span-2 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-sage-500" />
              Global Biodiversity Index
            </CardTitle>
          </CardHeader>
          <CardContent>
            <BiodiversityMap />
          </CardContent>
        </Card>

        {/* Risk Alerts Section */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-sage-500" />
              Risk Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RiskAlerts />
          </CardContent>
        </Card>

        {/* Species List */}
        <Card className="lg:col-span-3 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-sage-500" />
              Species Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <SpeciesList data={species} isLoading={isLoading} />
          </CardContent>
        </Card>

        {/* Ecosystem Indicators */}
        <Card className="lg:col-span-3 hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trees className="h-5 w-5 text-sage-500" />
              Healthy Ecosystem Indicators
            </CardTitle>
          </CardHeader>
          <CardContent>
            <HealthyEcosystemIndicators />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
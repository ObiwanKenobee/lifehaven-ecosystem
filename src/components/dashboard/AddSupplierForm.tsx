import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";
import { Info, Upload } from "lucide-react";

interface SupplierFormData {
  name: string;
  location: string;
  riskLevel: string;
  complianceRate: number;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  sustainabilityInitiatives: string[];
  notes: string;
}

export function AddSupplierForm({ onClose }: { onClose: () => void }) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [documents, setDocuments] = useState<FileList | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<SupplierFormData>();

  const addSupplierMutation = useMutation({
    mutationFn: async (data: SupplierFormData) => {
      console.log('Adding new supplier:', data);
      // Convert location to coordinates (using a simple mapping for now)
      const coordinatesMap: Record<string, [number, number]> = {
        'north-america': [40.7128, -74.0060], // New York coordinates as default for North America
        'europe': [51.5074, -0.1278], // London coordinates as default for Europe
        'asia': [35.6762, 139.6503], // Tokyo coordinates as default for Asia
        'other': [0, 0] // Default coordinates for other
      };
      
      const coordinates = coordinatesMap[data.location] || [0, 0];
      
      const { error } = await supabase
        .from('suppliers')
        .insert({
          name: data.name,
          location: data.location,
          coordinates: `(${coordinates[0]},${coordinates[1]})`, // Format as point type
          risk_level: data.riskLevel,
          compliance_rate: data.complianceRate,
          sustainability_goals: data.sustainabilityInitiatives,
        });
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
      toast({
        title: "Success",
        description: "Supplier added successfully",
      });
      onClose();
    },
    onError: (error) => {
      console.error('Error adding supplier:', error);
      toast({
        title: "Error",
        description: "Failed to add supplier. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: SupplierFormData) => {
    addSupplierMutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Supplier Details</h3>
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Company Name</Label>
            <Input
              id="name"
              placeholder="Enter supplier company name"
              {...register("name", { required: true })}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Select {...register("location")}>
              <SelectTrigger>
                <SelectValue placeholder="Select location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="north-america">North America</SelectItem>
                <SelectItem value="europe">Europe</SelectItem>
                <SelectItem value="asia">Asia</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Risk Assessment</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="riskLevel">Risk Level</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Low: Minimal risk factors</p>
                    <p>Medium: Some potential concerns</p>
                    <p>High: Significant risk factors present</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Select {...register("riskLevel")}>
              <SelectTrigger>
                <SelectValue placeholder="Select risk level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="low">Low</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="high">High</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Compliance Metrics</h3>
          <div className="space-y-2">
            <Label>Compliance Rate (%)</Label>
            <Slider
              defaultValue={[75]}
              max={100}
              step={1}
              className="w-full"
              onValueChange={(value) => console.log(value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Contact Information</h3>
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Name</Label>
              <Input
                id="contactName"
                placeholder="Enter primary contact name"
                {...register("contactName")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactEmail">Contact Email</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="Enter contact email"
                {...register("contactEmail")}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contactPhone">Contact Phone</Label>
              <Input
                id="contactPhone"
                placeholder="Enter contact phone number"
                {...register("contactPhone")}
              />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Documents</h3>
          <div className="border-2 border-dashed rounded-lg p-4 text-center">
            <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Drag and drop files here or click to browse
            </p>
            <Input
              type="file"
              className="hidden"
              multiple
              onChange={(e) => setDocuments(e.target.files)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Sustainability Initiatives</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="circular-economy" />
              <Label htmlFor="circular-economy">Circular Economy Program</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="renewable-energy" />
              <Label htmlFor="renewable-energy">Renewable Energy Usage</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="waste-reduction" />
              <Label htmlFor="waste-reduction">Waste Reduction Program</Label>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            placeholder="Enter any additional notes or specific instructions"
            {...register("notes")}
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" className="bg-sage-500 hover:bg-sage-600">
          Save & Notify Supplier
        </Button>
      </div>
    </form>
  );
}
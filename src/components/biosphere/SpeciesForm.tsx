import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SpeciesFormProps {
  onSubmit: (data: any) => void;
  initialData?: any;
}

export function SpeciesForm({ onSubmit, initialData }: SpeciesFormProps) {
  const [formData, setFormData] = useState(initialData || {
    name: "",
    scientific_name: "",
    conservation_status: "",
    description: "",
    population_trend: "",
    habitat: [],
    threats: []
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Species Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="scientific_name">Scientific Name</Label>
        <Input
          id="scientific_name"
          value={formData.scientific_name}
          onChange={(e) => setFormData({ ...formData, scientific_name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="conservation_status">Conservation Status</Label>
        <Select
          value={formData.conservation_status}
          onValueChange={(value) => setFormData({ ...formData, conservation_status: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="LC">Least Concern</SelectItem>
            <SelectItem value="NT">Near Threatened</SelectItem>
            <SelectItem value="VU">Vulnerable</SelectItem>
            <SelectItem value="EN">Endangered</SelectItem>
            <SelectItem value="CR">Critically Endangered</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
      </div>

      <Button type="submit" className="w-full">
        {initialData ? "Update Species" : "Add Species"}
      </Button>
    </form>
  );
}
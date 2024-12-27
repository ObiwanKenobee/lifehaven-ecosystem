import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Edit, Trash, Plus, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AddSupplierForm } from "./AddSupplierForm";

export function SupplierManagement() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // Fetch suppliers
  const { data: suppliers, isLoading } = useQuery({
    queryKey: ['suppliers'],
    queryFn: async () => {
      console.log('Fetching suppliers...');
      const { data, error } = await supabase
        .from('suppliers')
        .select('*')
        .order('name')
        .limit(5);
      
      if (error) {
        console.error('Error fetching suppliers:', error);
        throw error;
      }
      console.log('Suppliers fetched:', data);
      return data;
    },
  });

  // Delete supplier mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('suppliers')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
      toast({
        title: "Supplier deleted",
        description: "The supplier has been successfully removed.",
      });
    },
    onError: (error) => {
      console.error('Error deleting supplier:', error);
      toast({
        title: "Error",
        description: "Failed to delete supplier. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this supplier?')) {
      deleteMutation.mutate(id);
    }
  };

  const getRiskLevelBadge = (riskLevel: string | null) => {
    const variants: Record<string, { color: string; icon: React.ReactNode }> = {
      high: { color: "bg-red-100 text-red-800", icon: <AlertCircle className="h-4 w-4" /> },
      medium: { color: "bg-yellow-100 text-yellow-800", icon: <AlertCircle className="h-4 w-4" /> },
      low: { color: "bg-green-100 text-green-800", icon: <CheckCircle className="h-4 w-4" /> },
    };

    const level = riskLevel?.toLowerCase() || 'unknown';
    const variant = variants[level] || { color: "bg-gray-100 text-gray-800", icon: null };

    return (
      <Badge className={`${variant.color} flex items-center gap-1`}>
        {variant.icon}
        {riskLevel || 'Unknown'}
      </Badge>
    );
  };

  const handleViewAll = () => {
    navigate('/ethical-nexus');
  };

  if (isLoading) {
    return <div>Loading suppliers...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-sage-500 hover:bg-sage-600">
              <Plus className="h-4 w-4 mr-2" />
              Add New Supplier
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[800px] sm:w-[600px] overflow-y-auto">
            <SheetHeader>
              <SheetTitle>Add New Supplier</SheetTitle>
              <SheetDescription>
                Add a new supplier to your Ethical Nexus Hub. Fill in the details below.
              </SheetDescription>
            </SheetHeader>
            <div className="py-6">
              <AddSupplierForm onClose={() => {
                const sheet = document.querySelector('[data-state="open"]');
                if (sheet) {
                  const closeButton = sheet.querySelector('button[data-state]');
                  closeButton?.click();
                }
              }} />
            </div>
          </SheetContent>
        </Sheet>
        <Button variant="outline" onClick={handleViewAll}>
          View All Suppliers
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Risk Level</TableHead>
            <TableHead>Compliance Rate</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {suppliers?.map((supplier) => (
            <TableRow key={supplier.id}>
              <TableCell className="font-medium">{supplier.name}</TableCell>
              <TableCell>{supplier.location}</TableCell>
              <TableCell>{getRiskLevelBadge(supplier.risk_level)}</TableCell>
              <TableCell>
                {supplier.compliance_rate ? `${supplier.compliance_rate}%` : 'N/A'}
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => navigate('/ethical-nexus')}
                >
                  <Edit className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(supplier.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { SupplierTable } from "./supplier/SupplierTable";
import { SupplierHeader } from "./supplier/SupplierHeader";

export function SupplierManagement() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch suppliers with improved error handling
  const { data: suppliers, isLoading, error } = useQuery({
    queryKey: ['suppliers'],
    queryFn: async () => {
      console.log('Fetching suppliers...');
      try {
        const { data, error } = await supabase
          .from('suppliers')
          .select('*')
          .order('name')
          .limit(5);
        
        if (error) {
          console.error('Supabase error fetching suppliers:', error);
          throw error;
        }
        
        console.log('Suppliers fetched successfully:', data);
        return data;
      } catch (err) {
        console.error('Error in suppliers query:', err);
        throw err;
      }
    },
    retry: 1,
  });

  // Delete supplier mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      console.log('Deleting supplier with ID:', id);
      const { error } = await supabase
        .from('suppliers')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting supplier:', error);
        throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['suppliers'] });
      toast({
        title: "Supplier deleted",
        description: "The supplier has been successfully removed.",
      });
    },
    onError: (error) => {
      console.error('Error in delete mutation:', error);
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

  if (error) {
    return (
      <div className="p-4 text-red-500">
        Error loading suppliers. Please try again later.
      </div>
    );
  }

  if (isLoading) {
    return <div className="p-4">Loading suppliers...</div>;
  }

  return (
    <div className="space-y-4">
      <SupplierHeader />
      <SupplierTable suppliers={suppliers} onDelete={handleDelete} />
    </div>
  );
}
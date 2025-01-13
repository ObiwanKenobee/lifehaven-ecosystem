import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { SpeciesForm } from "./SpeciesForm";
import { useToast } from "@/components/ui/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

interface SpeciesListProps {
  data: any[];
  isLoading: boolean;
}

export function SpeciesList({ data, isLoading }: SpeciesListProps) {
  const [editingSpecies, setEditingSpecies] = useState<any>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const updateSpeciesMutation = useMutation({
    mutationFn: async (updatedSpecies: any) => {
      const { data, error } = await supabase
        .from('species')
        .update(updatedSpecies)
        .eq('id', updatedSpecies.id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['species'] });
      toast({
        title: "Success",
        description: "Species updated successfully",
      });
      setEditingSpecies(null);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update species",
        variant: "destructive",
      });
      console.error('Error updating species:', error);
    }
  });

  const deleteSpeciesMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('species')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['species'] });
      toast({
        title: "Success",
        description: "Species deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete species",
        variant: "destructive",
      });
      console.error('Error deleting species:', error);
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Scientific Name</TableHead>
            <TableHead>Conservation Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((species) => (
            <TableRow key={species.id}>
              <TableCell>{species.name}</TableCell>
              <TableCell>{species.scientific_name}</TableCell>
              <TableCell>{species.conservation_status}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setEditingSpecies(species)}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Delete Species</AlertDialogTitle>
                        <AlertDialogDescription>
                          Are you sure you want to delete this species? This action cannot be undone.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => deleteSpeciesMutation.mutate(species.id)}
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={!!editingSpecies} onOpenChange={() => setEditingSpecies(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Species</DialogTitle>
          </DialogHeader>
          {editingSpecies && (
            <SpeciesForm
              initialData={editingSpecies}
              onSubmit={(data) => updateSpeciesMutation.mutate(data)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
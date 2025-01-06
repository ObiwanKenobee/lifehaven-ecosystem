import { Button } from "@/components/ui/button";
import { Plus, ArrowRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AddSupplierForm } from "../AddSupplierForm";
import { useNavigate } from "react-router-dom";

export function SupplierHeader() {
  const navigate = useNavigate();

  return (
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
              if (sheet instanceof HTMLElement) {
                const closeButton = sheet.querySelector('[data-state]');
                if (closeButton instanceof HTMLElement) {
                  closeButton.click();
                }
              }
            }} />
          </div>
        </SheetContent>
      </Sheet>
      <Button variant="outline" onClick={() => navigate('/ethical-nexus')}>
        View All Suppliers
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
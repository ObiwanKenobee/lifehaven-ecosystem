import { ViewAllSuppliersHeader } from "@/components/ethical-nexus/ViewAllSuppliersHeader";
import { SupplierManagement } from "@/components/dashboard/SupplierManagement";

export default function EthicalNexus() {
  return (
    <div className="container mx-auto p-6 space-y-6">
      <ViewAllSuppliersHeader />
      <SupplierManagement />
    </div>
  );
}
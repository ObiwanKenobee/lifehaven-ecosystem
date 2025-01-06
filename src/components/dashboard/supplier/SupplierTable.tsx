import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle, Edit, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Supplier {
  id: string;
  name: string;
  location: string;
  risk_level: string | null;
  compliance_rate: number | null;
}

interface SupplierTableProps {
  suppliers: Supplier[] | null;
  onDelete: (id: string) => void;
}

export function SupplierTable({ suppliers, onDelete }: SupplierTableProps) {
  const navigate = useNavigate();

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

  return (
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
                onClick={() => onDelete(supplier.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
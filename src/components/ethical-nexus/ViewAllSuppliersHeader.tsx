import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Bell,
  Download,
  Filter,
  Plus,
  Search,
  AlertTriangle,
  Users,
  BarChart,
} from "lucide-react";

export function ViewAllSuppliersHeader() {
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch suppliers for metrics
  const { data: metrics } = useQuery({
    queryKey: ['suppliers-metrics'],
    queryFn: async () => {
      console.log('Fetching supplier metrics...');
      const { data, error } = await supabase
        .from('suppliers')
        .select('risk_level, compliance_rate');
      
      if (error) {
        console.error('Error fetching supplier metrics:', error);
        throw error;
      }

      const totalSuppliers = data.length;
      const highRiskSuppliers = data.filter(s => s.risk_level === 'high').length;
      const avgComplianceRate = data.reduce((acc, curr) => acc + (curr.compliance_rate || 0), 0) / totalSuppliers;

      return {
        totalSuppliers,
        highRiskSuppliers,
        avgComplianceRate: Math.round(avgComplianceRate)
      };
    },
  });

  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md rounded-lg p-4 mb-6 space-y-4 animate-fade-in">
      {/* Search and Filters Row */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search suppliers by name, location, or compliance rate..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="north-america">North America</SelectItem>
            <SelectItem value="europe">Europe</SelectItem>
            <SelectItem value="asia">Asia</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Risk Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="low">Low Risk</SelectItem>
            <SelectItem value="medium">Medium Risk</SelectItem>
            <SelectItem value="high">High Risk</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="h-4 w-4" />
        </Button>
      </div>

      {/* Metrics and Actions Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Total Suppliers */}
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-sage-500" />
            <div>
              <div className="text-sm font-medium">{metrics?.totalSuppliers || 0}</div>
              <div className="text-xs text-muted-foreground">Total Suppliers</div>
            </div>
          </div>

          {/* Average Compliance */}
          <div className="flex items-center gap-2">
            <BarChart className="h-5 w-5 text-sage-500" />
            <div>
              <div className="text-sm font-medium">{metrics?.avgComplianceRate || 0}%</div>
              <div className="text-xs text-muted-foreground">Avg. Compliance</div>
            </div>
          </div>

          {/* High Risk Suppliers */}
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <div>
              <div className="text-sm font-medium">{metrics?.highRiskSuppliers || 0}</div>
              <div className="text-xs text-muted-foreground">High Risk</div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Bell className="h-4 w-4 mr-2" />
            <Badge variant="secondary" className="ml-1">3</Badge>
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button className="bg-sage-500 hover:bg-sage-600" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Supplier
          </Button>
        </div>
      </div>
    </div>
  );
}
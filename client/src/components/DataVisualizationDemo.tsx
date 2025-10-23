import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

export default function DataVisualizationDemo() {
  const [chartType, setChartType] = useState<"line" | "bar">("line");

  const data = [
    { month: "Jan", revenue: 4200, users: 240 },
    { month: "Feb", revenue: 5100, users: 310 },
    { month: "Mar", revenue: 6800, users: 390 },
    { month: "Apr", revenue: 7500, users: 450 },
    { month: "May", revenue: 9200, users: 520 },
    { month: "Jun", revenue: 11000, users: 680 },
  ];

  return (
    <Card className="p-6 hover-elevate">
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">Real-Time Analytics Dashboard</h3>
          <p className="text-sm text-muted-foreground">
            Interactive data visualization demonstrating analytics and business intelligence capabilities
          </p>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={() => setChartType("line")}
            variant={chartType === "line" ? "default" : "secondary"}
            size="sm"
            data-testid="button-chart-line"
          >
            Line Chart
          </Button>
          <Button
            onClick={() => setChartType("bar")}
            variant={chartType === "bar" ? "default" : "secondary"}
            size="sm"
            data-testid="button-chart-bar"
          >
            Bar Chart
          </Button>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === "line" ? (
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--background))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px"
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))", r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  stroke="hsl(var(--chart-2))" 
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--chart-2))", r: 4 }}
                />
              </LineChart>
            ) : (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                <XAxis dataKey="month" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--background))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "6px"
                  }} 
                />
                <Bar dataKey="revenue" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                <Bar dataKey="users" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
              </BarChart>
            )}
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <div className="text-sm">
              <div className="text-muted-foreground text-xs">Revenue</div>
              <div className="font-semibold">$11,000</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(var(--chart-2))" }}></div>
            <div className="text-sm">
              <div className="text-muted-foreground text-xs">Users</div>
              <div className="font-semibold">680</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground border-t">
          <TrendingUp className="w-3 h-3" />
          <span>Showcases data visualization, dashboards, and analytics platforms</span>
        </div>
      </div>
    </Card>
  );
}

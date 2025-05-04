import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, PieChart, Pie, Cell } from 'recharts';

interface FinancialData {
  year: number;
  revenue: number;
  profit: number;
}

interface DataChartProps {
  financials: FinancialData[];
  title: string;
  type?: 'bar' | 'pie';
}

const COLORS = ['#0EA5E9', '#3B82F6', '#8B5CF6', '#EC4899'];

const DataChart = ({ financials, title, type = 'bar' }: DataChartProps) => {
  // Convert data for pie chart if needed
  const pieData = financials.length > 0 
    ? [
        { name: 'Revenue', value: financials[financials.length - 1].revenue },
        { name: 'Profit', value: financials[financials.length - 1].profit },
      ]
    : [];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 pb-4">
        <div className="h-[300px] p-1">
          {type === 'bar' ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={financials} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => `$${value.toLocaleString()} Million`}
                  labelFormatter={(label) => `Year: ${label}`}
                />
                <Legend />
                <Bar dataKey="revenue" name="Revenue" fill="#0EA5E9" />
                <Bar dataKey="profit" name="Profit" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `$${value.toLocaleString()} Million`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DataChart;
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { strategies } from '../../data/sampleData';

const TYPE_LABELS: Record<string, string> = {
  trend: 'Trend',
  mean_reversion: 'Mean Reversion',
  arbitrage: 'Arbitrage',
  carry: 'Carry',
  market_making: 'Market Making',
  volatility: 'Volatility',
};

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4'];

export default function AllocationChart() {
  const allocationByType: Record<string, number> = {};
  strategies.forEach(s => {
    const label = TYPE_LABELS[s.type] ?? s.type;
    allocationByType[label] = (allocationByType[label] ?? 0) + s.equity;
  });

  const data = Object.entries(allocationByType).map(([name, value]) => ({ name, value }));

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <h3 className="text-sm font-semibold text-gray-300 mb-4">Portfolio Allocation by Strategy Type</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: 8 }}
            formatter={(value: number) => [`$${(value / 1000).toFixed(0)}K`, 'Equity']}
          />
          <Legend
            verticalAlign="bottom"
            formatter={(value: string) => <span style={{ color: '#d1d5db', fontSize: 12 }}>{value}</span>}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

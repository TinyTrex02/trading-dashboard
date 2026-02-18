import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { portfolioDailyMetrics } from '../../data/sampleData';

export default function EquityCurve() {
  const data = portfolioDailyMetrics.map(m => ({
    date: m.date,
    equity: m.equity,
    drawdown: m.drawdown,
  }));

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <h3 className="text-sm font-semibold text-gray-300 mb-4">Portfolio Equity Curve (90 Days)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis
            dataKey="date"
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            tickFormatter={(v: string) => v.slice(5)}
            interval={14}
          />
          <YAxis
            tick={{ fill: '#9ca3af', fontSize: 11 }}
            tickFormatter={(v: number) => `$${(v / 1e6).toFixed(2)}M`}
            domain={['dataMin - 50000', 'dataMax + 50000']}
          />
          <Tooltip
            contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: 8 }}
            labelStyle={{ color: '#9ca3af' }}
            formatter={(value) => (typeof value === 'number' ? [`$${value.toLocaleString()}`, 'Equity'] : [value, 'Equity'])}
          />
          <Line type="monotone" dataKey="equity" stroke="#3b82f6" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

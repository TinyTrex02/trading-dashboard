import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import type { Strategy, StrategyDailyMetric } from '../../types';

interface Props {
  strategy: Strategy;
  dailyMetrics: StrategyDailyMetric[];
}

function StatCard({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 text-center">
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{label}</p>
      <p className={`text-xl font-bold ${color ?? 'text-white'}`}>{value}</p>
    </div>
  );
}

export default function StrategyDetail({ strategy, dailyMetrics }: Props) {
  const s = strategy;
  const pnlColor = s.dailyPnl >= 0 ? 'text-green-400' : 'text-red-400';

  const chartData = dailyMetrics.map(m => ({
    date: m.date,
    equity: m.equity,
    drawdown: m.drawdown,
  }));

  return (
    <div className="space-y-6">
      {/* KPI Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <StatCard label="Balance" value={`$${(s.balance / 1000).toFixed(0)}K`} />
        <StatCard
          label="Daily P&L"
          value={`${s.dailyPnl >= 0 ? '+' : ''}$${s.dailyPnl.toLocaleString()}`}
          color={pnlColor}
        />
        <StatCard label="Exposure" value={`$${(s.grossExposure / 1000).toFixed(0)}K`} />
        <StatCard label="Sharpe (30D)" value={s.sharpe30d.toFixed(2)} />
        <StatCard label="Leverage" value={`${s.leverage.toFixed(1)}x`} />
        <StatCard label="Total Trades" value={String(s.totalTrades)} />
      </div>

      {/* Equity & Drawdown Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Equity Curve</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" tick={{ fill: '#9ca3af', fontSize: 11 }} tickFormatter={(v: string) => v.slice(5)} interval={14} />
              <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} tickFormatter={(v: number) => `$${(v / 1000).toFixed(0)}K`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: 8 }}
                formatter={(value) => (typeof value === 'number' ? [`$${value.toLocaleString()}`, 'Equity'] : [value, 'Equity'])}
              />
              <Line type="monotone" dataKey="equity" stroke="#3b82f6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
          <h3 className="text-sm font-semibold text-gray-300 mb-4">Drawdown</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="date" tick={{ fill: '#9ca3af', fontSize: 11 }} tickFormatter={(v: string) => v.slice(5)} interval={14} />
              <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} tickFormatter={(v: number) => `${v.toFixed(1)}%`} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151', borderRadius: 8 }}
                formatter={(value) => (typeof value === 'number' ? [`${value.toFixed(2)}%`, 'Drawdown'] : [value, 'Drawdown'])}
              />
              <Area type="monotone" dataKey="drawdown" stroke="#ef4444" fill="#ef444433" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Breakdown */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <StatCard label="Win Rate" value={`${(s.winRate * 100).toFixed(0)}%`} color="text-green-400" />
        <StatCard label="Avg R-Multiple" value={s.avgRMultiple.toFixed(2)} />
        <StatCard label="Profit Factor" value={s.profitFactor.toFixed(2)} color="text-green-400" />
        <StatCard label="Max Drawdown" value={`${s.maxDrawdown.toFixed(1)}%`} color="text-red-400" />
      </div>
    </div>
  );
}

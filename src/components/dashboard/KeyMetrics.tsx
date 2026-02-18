import { portfolioSummary } from '../../data/sampleData';

function MetricCard({ label, value, sub, color }: { label: string; value: string; sub?: string; color?: string }) {
  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">{label}</p>
      <p className={`text-2xl font-bold ${color ?? 'text-white'}`}>{value}</p>
      {sub && <p className={`text-sm mt-1 ${color ?? 'text-gray-400'}`}>{sub}</p>}
    </div>
  );
}

export default function KeyMetrics() {
  const s = portfolioSummary;
  const pnlColor = s.dailyPnl >= 0 ? 'text-green-400' : 'text-red-400';
  const ddColor = 'text-red-400';

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard
        label="Total Capital"
        value={`$${(s.totalCapital / 1e6).toFixed(2)}M`}
        sub={`Equity: $${(s.totalEquity / 1e6).toFixed(2)}M`}
      />
      <MetricCard
        label="Daily P&L"
        value={`${s.dailyPnl >= 0 ? '+' : ''}$${s.dailyPnl.toLocaleString()}`}
        sub={`${s.dailyPnlPercent >= 0 ? '+' : ''}${s.dailyPnlPercent.toFixed(2)}%`}
        color={pnlColor}
      />
      <MetricCard
        label="Sharpe Ratio"
        value={s.sharpe.toFixed(2)}
        sub={`Sortino: ${s.sortino.toFixed(2)}`}
      />
      <MetricCard
        label="Max Drawdown"
        value={`${s.maxDrawdown.toFixed(1)}%`}
        sub={`Current: ${s.currentDrawdown.toFixed(1)}%`}
        color={ddColor}
      />
    </div>
  );
}

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { strategies } from '../../data/sampleData';
import type { Strategy } from '../../types';

type SortKey = 'name' | 'dailyPnl' | 'sharpe30d' | 'maxDrawdown' | 'winRate';

const TYPE_LABELS: Record<string, string> = {
  trend: 'Trend',
  mean_reversion: 'Mean Rev',
  arbitrage: 'Arb',
  carry: 'Carry',
  market_making: 'MM',
  volatility: 'Vol',
};

export default function StrategyGrid() {
  const navigate = useNavigate();
  const [sortKey, setSortKey] = useState<SortKey>('dailyPnl');
  const [sortAsc, setSortAsc] = useState(false);
  const [filter, setFilter] = useState('');

  const handleSort = (key: SortKey) => {
    if (sortKey === key) setSortAsc(!sortAsc);
    else { setSortKey(key); setSortAsc(false); }
  };

  const filtered = strategies.filter(s =>
    s.name.toLowerCase().includes(filter.toLowerCase()) ||
    s.type.toLowerCase().includes(filter.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    const av = a[sortKey] as number | string;
    const bv = b[sortKey] as number | string;
    const cmp = typeof av === 'string' ? (av as string).localeCompare(bv as string) : (av as number) - (bv as number);
    return sortAsc ? cmp : -cmp;
  });

  const SortHeader = ({ label, field }: { label: string; field: SortKey }) => (
    <th
      className="text-left px-3 py-2 text-xs uppercase tracking-wider text-gray-400 cursor-pointer hover:text-gray-200 select-none"
      onClick={() => handleSort(field)}
    >
      {label} {sortKey === field ? (sortAsc ? '▲' : '▼') : ''}
    </th>
  );

  const pnlClass = (v: number) => v >= 0 ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-300">Strategy Overview</h3>
        <input
          className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm text-gray-200 placeholder-gray-500 outline-none focus:border-blue-500 w-48"
          placeholder="Filter strategies..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-t border-b border-gray-700">
            <tr>
              <th className="px-3 py-2 w-4" />
              <SortHeader label="Strategy" field="name" />
              <th className="text-left px-3 py-2 text-xs uppercase tracking-wider text-gray-400">Type</th>
              <SortHeader label="Daily P&L" field="dailyPnl" />
              <SortHeader label="Sharpe (30D)" field="sharpe30d" />
              <SortHeader label="Max DD" field="maxDrawdown" />
              <SortHeader label="Win Rate" field="winRate" />
              <th className="px-3 py-2" />
            </tr>
          </thead>
          <tbody>
            {sorted.map((s: Strategy) => (
              <tr
                key={s.id}
                className="border-b border-gray-700/50 hover:bg-gray-700/40 cursor-pointer transition-colors"
                onClick={() => navigate(`/strategy/${s.id}`)}
              >
                <td className="px-3 py-3">
                  <div className={`w-2 h-2 rounded-full ${s.dailyPnl >= 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                </td>
                <td className="px-3 py-3 font-medium text-white">{s.name}</td>
                <td className="px-3 py-3">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300">
                    {TYPE_LABELS[s.type] ?? s.type}
                  </span>
                </td>
                <td className={`px-3 py-3 font-mono ${pnlClass(s.dailyPnl)}`}>
                  {s.dailyPnl >= 0 ? '+' : ''}${s.dailyPnl.toLocaleString()}
                </td>
                <td className="px-3 py-3 font-mono">{s.sharpe30d.toFixed(2)}</td>
                <td className="px-3 py-3 font-mono text-red-400">{s.maxDrawdown.toFixed(1)}%</td>
                <td className="px-3 py-3 font-mono">{(s.winRate * 100).toFixed(0)}%</td>
                <td className="px-3 py-3 text-gray-500 text-right">→</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 text-xs text-gray-500">
        Showing {sorted.length} of {strategies.length} strategies
      </div>
    </div>
  );
}

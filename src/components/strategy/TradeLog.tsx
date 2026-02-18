import { useState } from 'react';
import type { Trade } from '../../types';

interface Props {
  trades: Trade[];
}

export default function TradeLog({ trades }: Props) {
  const [regimeFilter, setRegimeFilter] = useState<string>('all');

  const regimes = ['all', ...new Set(trades.map(t => t.regime))];

  const filtered = regimeFilter === 'all' ? trades : trades.filter(t => t.regime === regimeFilter);

  const pnlClass = (v: number | null) => {
    if (v === null) return 'text-gray-400';
    return v >= 0 ? 'text-green-400' : 'text-red-400';
  };

  const rClass = (v: number | null) => {
    if (v === null) return 'text-gray-400';
    if (v >= 2) return 'text-green-400';
    if (v >= 0) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="px-5 pt-5 pb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-300">Recent Trades</h3>
        <select
          className="bg-gray-700 border border-gray-600 rounded px-2 py-1 text-xs text-gray-200 outline-none focus:border-blue-500"
          value={regimeFilter}
          onChange={e => setRegimeFilter(e.target.value)}
        >
          {regimes.map(r => (
            <option key={r} value={r}>{r === 'all' ? 'All Regimes' : r.charAt(0).toUpperCase() + r.slice(1)}</option>
          ))}
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-t border-b border-gray-700">
            <tr>
              {['Time', 'Symbol', 'Side', 'Action', 'Qty', 'Price', 'P&L', 'R-Mult', 'Regime', 'Signal'].map(h => (
                <th key={h} className="text-left px-3 py-2 text-xs uppercase tracking-wider text-gray-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map(t => (
              <tr key={t.id} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                <td className="px-3 py-2 text-gray-400 text-xs whitespace-nowrap">
                  {new Date(t.executedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}{' '}
                  {new Date(t.executedAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })}
                </td>
                <td className="px-3 py-2 font-medium text-white">{t.symbol}</td>
                <td className="px-3 py-2">
                  <span className={`text-xs font-semibold px-1.5 py-0.5 rounded ${t.side === 'long' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                    {t.side.toUpperCase()}
                  </span>
                </td>
                <td className="px-3 py-2 text-xs capitalize text-gray-300">{t.action}</td>
                <td className="px-3 py-2 font-mono">{t.quantity}</td>
                <td className="px-3 py-2 font-mono">${t.price.toLocaleString()}</td>
                <td className={`px-3 py-2 font-mono ${pnlClass(t.realizedPnl)}`}>
                  {t.realizedPnl !== null ? `${t.realizedPnl >= 0 ? '+' : ''}$${t.realizedPnl.toLocaleString()}` : '—'}
                </td>
                <td className={`px-3 py-2 font-mono ${rClass(t.rMultiple)}`}>
                  {t.rMultiple !== null ? `${t.rMultiple >= 0 ? '+' : ''}${t.rMultiple.toFixed(1)}R` : '—'}
                </td>
                <td className="px-3 py-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300 capitalize">{t.regime}</span>
                </td>
                <td className="px-3 py-2 text-xs text-gray-400">{t.exitSignal ?? t.entrySignal}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 text-xs text-gray-500">
        Showing {filtered.length} of {trades.length} trades
      </div>
    </div>
  );
}

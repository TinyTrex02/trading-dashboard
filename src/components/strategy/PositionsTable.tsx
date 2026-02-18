import type { Position } from '../../types';

interface Props {
  positions: Position[];
}

export default function PositionsTable({ positions }: Props) {
  if (positions.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg p-5 border border-gray-700 text-gray-500 text-sm">
        No open positions for this strategy.
      </div>
    );
  }

  const pnlClass = (v: number) => v >= 0 ? 'text-green-400' : 'text-red-400';

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700">
      <div className="px-5 pt-5 pb-3">
        <h3 className="text-sm font-semibold text-gray-300">Open Positions</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-t border-b border-gray-700">
            <tr>
              {['Symbol', 'Side', 'Qty', 'Entry', 'Current', 'Size (USD)', 'P&L', 'P&L %', 'Leverage', 'SL', 'TP'].map(h => (
                <th key={h} className="text-left px-3 py-2 text-xs uppercase tracking-wider text-gray-400">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {positions.map(p => (
              <tr key={p.id} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                <td className="px-3 py-2 font-medium text-white">{p.symbol}</td>
                <td className="px-3 py-2">
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${p.side === 'long' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                    {p.side.toUpperCase()}
                  </span>
                </td>
                <td className="px-3 py-2 font-mono">{p.quantity}</td>
                <td className="px-3 py-2 font-mono">${p.entryPrice.toLocaleString()}</td>
                <td className="px-3 py-2 font-mono">${p.currentPrice.toLocaleString()}</td>
                <td className="px-3 py-2 font-mono">${p.positionSizeUsd.toLocaleString()}</td>
                <td className={`px-3 py-2 font-mono ${pnlClass(p.unrealizedPnl)}`}>
                  {p.unrealizedPnl >= 0 ? '+' : ''}${p.unrealizedPnl.toLocaleString()}
                </td>
                <td className={`px-3 py-2 font-mono ${pnlClass(p.unrealizedPnlPercent)}`}>
                  {p.unrealizedPnlPercent >= 0 ? '+' : ''}{p.unrealizedPnlPercent.toFixed(2)}%
                </td>
                <td className="px-3 py-2 font-mono">{p.leverage}x</td>
                <td className="px-3 py-2 font-mono text-gray-400">{p.stopLoss ? `$${p.stopLoss.toLocaleString()}` : '—'}</td>
                <td className="px-3 py-2 font-mono text-gray-400">{p.takeProfit ? `$${p.takeProfit.toLocaleString()}` : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

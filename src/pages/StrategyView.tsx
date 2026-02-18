import { useParams, useNavigate } from 'react-router-dom';
import { strategies, positions, trades, strategyDailyMetrics } from '../data/sampleData';
import StrategyDetail from '../components/strategy/StrategyDetail';
import PositionsTable from '../components/strategy/PositionsTable';
import TradeLog from '../components/strategy/TradeLog';

export default function StrategyView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const strategy = strategies.find(s => s.id === id);
  if (!strategy) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">Strategy not found.</p>
        <button
          className="mt-4 text-blue-400 hover:text-blue-300 text-sm"
          onClick={() => navigate('/')}
        >
          ← Back to Dashboard
        </button>
      </div>
    );
  }

  const stratPositions = positions.filter(p => p.strategyId === id);
  const stratTrades = trades.filter(t => t.strategyId === id);
  const dailyMetrics = strategyDailyMetrics[id] ?? [];

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      {/* Header with back button */}
      <div className="flex items-center gap-4">
        <button
          className="text-gray-400 hover:text-white text-sm flex items-center gap-1 transition-colors"
          onClick={() => navigate('/')}
        >
          ← Back to Portfolio
        </button>
        <h2 className="text-xl font-bold text-white">{strategy.name}</h2>
        <span className="text-xs px-2 py-0.5 rounded bg-gray-700 text-gray-300 capitalize">{strategy.type.replace('_', ' ')}</span>
        <span className="text-xs text-gray-500">{strategy.exchange} · {strategy.symbols.join(', ')}</span>
      </div>

      <StrategyDetail strategy={strategy} dailyMetrics={dailyMetrics} />
      <PositionsTable positions={stratPositions} />
      <TradeLog trades={stratTrades} />
    </div>
  );
}

import { strategies, correlationMatrix } from '../../data/sampleData';

function getColor(val: number): string {
  if (val >= 0.8) return '#22c55e';
  if (val >= 0.5) return '#4ade80';
  if (val >= 0.2) return '#86efac';
  if (val > -0.2) return '#374151';
  if (val > -0.5) return '#fca5a5';
  if (val > -0.8) return '#f87171';
  return '#ef4444';
}

export default function CorrelationHeatmap() {
  const ids = strategies.map(s => s.id);
  const shortNames = strategies.map(s => s.name.split(' ')[0]);

  const getCorr = (s1: string, s2: string) => {
    const entry = correlationMatrix.find(c => c.strategy1 === s1 && c.strategy2 === s2);
    return entry?.correlation ?? 0;
  };

  return (
    <div className="bg-gray-800 rounded-lg p-5 border border-gray-700">
      <h3 className="text-sm font-semibold text-gray-300 mb-4">Strategy Correlation Matrix</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr>
              <th className="p-1" />
              {shortNames.map((n, i) => (
                <th key={i} className="p-1 text-gray-400 font-medium text-center">{n}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ids.map((rowId, ri) => (
              <tr key={rowId}>
                <td className="p-1 text-gray-400 font-medium pr-2 text-right whitespace-nowrap">{shortNames[ri]}</td>
                {ids.map((colId, ci) => {
                  const val = getCorr(rowId, colId);
                  return (
                    <td
                      key={ci}
                      className="p-1 text-center font-mono"
                      style={{ backgroundColor: getColor(val), color: Math.abs(val) > 0.3 ? '#fff' : '#9ca3af' }}
                      title={`${strategies[ri].name} / ${strategies[ci].name}: ${val.toFixed(2)}`}
                    >
                      {ri === ci ? '' : val.toFixed(2)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

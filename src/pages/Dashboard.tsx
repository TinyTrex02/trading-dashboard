import KeyMetrics from '../components/dashboard/KeyMetrics';
import EquityCurve from '../components/dashboard/EquityCurve';
import AllocationChart from '../components/dashboard/AllocationChart';
import CorrelationHeatmap from '../components/dashboard/CorrelationHeatmap';
import StrategyGrid from '../components/dashboard/StrategyGrid';

export default function Dashboard() {
  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <KeyMetrics />
      <EquityCurve />
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <AllocationChart />
        </div>
        <div className="lg:col-span-2">
          <CorrelationHeatmap />
        </div>
      </div>
      <StrategyGrid />
    </div>
  );
}

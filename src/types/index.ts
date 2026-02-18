export interface Strategy {
  id: string;
  name: string;
  type: 'trend' | 'mean_reversion' | 'arbitrage' | 'carry' | 'market_making' | 'volatility';
  subType: string;
  symbols: string[];
  exchange: string;
  isActive: boolean;
  // Current metrics
  balance: number;
  equity: number;
  dailyPnl: number;
  dailyPnlPercent: number;
  cumulativePnl: number;
  sharpe30d: number;
  sharpe90d: number;
  sortino30d: number;
  maxDrawdown: number;
  currentDrawdown: number;
  winRate: number;
  avgRMultiple: number;
  profitFactor: number;
  totalTrades: number;
  winningTrades: number;
  losingTrades: number;
  netExposure: number;
  grossExposure: number;
  leverage: number;
}

export interface Position {
  id: string;
  strategyId: string;
  symbol: string;
  exchange: string;
  side: 'long' | 'short';
  quantity: number;
  entryPrice: number;
  currentPrice: number;
  leverage: number;
  unrealizedPnl: number;
  unrealizedPnlPercent: number;
  positionSizeUsd: number;
  stopLoss: number | null;
  takeProfit: number | null;
  openedAt: string;
}

export interface Trade {
  id: string;
  strategyId: string;
  symbol: string;
  exchange: string;
  side: 'long' | 'short';
  action: 'open' | 'close' | 'partial_close';
  quantity: number;
  price: number;
  realizedPnl: number | null;
  realizedPnlPercent: number | null;
  rMultiple: number | null;
  regime: 'trending' | 'ranging' | 'volatile' | 'calm';
  entrySignal: string;
  exitSignal: string | null;
  executedAt: string;
}

export interface DailyMetric {
  date: string;
  equity: number;
  dailyPnl: number;
  cumulativePnl: number;
  drawdown: number;
  sharpe: number;
}

export interface StrategyDailyMetric extends DailyMetric {
  strategyId: string;
}

export interface PortfolioSummary {
  totalCapital: number;
  totalEquity: number;
  dailyPnl: number;
  dailyPnlPercent: number;
  weeklyPnl: number;
  monthlyPnl: number;
  allTimePnl: number;
  sharpe: number;
  sortino: number;
  maxDrawdown: number;
  currentDrawdown: number;
  activeStrategies: number;
  openPositions: number;
  riskUtilization: number;
}

export interface CorrelationEntry {
  strategy1: string;
  strategy2: string;
  correlation: number;
}

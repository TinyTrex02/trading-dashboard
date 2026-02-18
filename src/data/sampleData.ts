import type {
  Strategy,
  Position,
  Trade,
  DailyMetric,
  StrategyDailyMetric,
  PortfolioSummary,
  CorrelationEntry,
} from '../types';

// ── Strategies ──────────────────────────────────────────────────────
export const strategies: Strategy[] = [
  {
    id: 'btc-mom',
    name: 'BTC Momentum',
    type: 'trend',
    subType: 'momentum',
    symbols: ['BTCUSDT'],
    exchange: 'Binance',
    isActive: true,
    balance: 620000,
    equity: 635200,
    dailyPnl: 4520,
    dailyPnlPercent: 0.72,
    cumulativePnl: 85200,
    sharpe30d: 2.85,
    sharpe90d: 2.41,
    sortino30d: 3.62,
    maxDrawdown: -5.4,
    currentDrawdown: -1.2,
    winRate: 0.68,
    avgRMultiple: 1.85,
    profitFactor: 2.4,
    totalTrades: 142,
    winningTrades: 97,
    losingTrades: 45,
    netExposure: 145000,
    grossExposure: 210000,
    leverage: 1.5,
  },
  {
    id: 'eth-mr',
    name: 'ETH Mean Reversion',
    type: 'mean_reversion',
    subType: 'reversion_to_mean',
    symbols: ['ETHUSDT'],
    exchange: 'Binance',
    isActive: true,
    balance: 480000,
    equity: 492800,
    dailyPnl: 3180,
    dailyPnlPercent: 0.65,
    cumulativePnl: 62800,
    sharpe30d: 3.12,
    sharpe90d: 2.78,
    sortino30d: 4.05,
    maxDrawdown: -3.8,
    currentDrawdown: -0.6,
    winRate: 0.74,
    avgRMultiple: 1.42,
    profitFactor: 2.8,
    totalTrades: 218,
    winningTrades: 161,
    losingTrades: 57,
    netExposure: 95000,
    grossExposure: 180000,
    leverage: 1.2,
  },
  {
    id: 'sol-brk',
    name: 'SOL Breakout',
    type: 'trend',
    subType: 'breakout',
    symbols: ['SOLUSDT'],
    exchange: 'Binance',
    isActive: true,
    balance: 380000,
    equity: 394500,
    dailyPnl: 2850,
    dailyPnlPercent: 0.73,
    cumulativePnl: 54500,
    sharpe30d: 2.22,
    sharpe90d: 1.95,
    sortino30d: 2.88,
    maxDrawdown: -7.2,
    currentDrawdown: -2.8,
    winRate: 0.58,
    avgRMultiple: 2.15,
    profitFactor: 2.1,
    totalTrades: 96,
    winningTrades: 56,
    losingTrades: 40,
    netExposure: 120000,
    grossExposure: 155000,
    leverage: 2.0,
  },
  {
    id: 'arb-fr',
    name: 'ARB Funding Rate',
    type: 'carry',
    subType: 'funding_rate',
    symbols: ['ARBUSDT', 'BTCUSDT', 'ETHUSDT'],
    exchange: 'Binance',
    isActive: true,
    balance: 420000,
    equity: 418200,
    dailyPnl: -1820,
    dailyPnlPercent: -0.43,
    cumulativePnl: 38200,
    sharpe30d: 1.82,
    sharpe90d: 1.65,
    sortino30d: 2.15,
    maxDrawdown: -4.1,
    currentDrawdown: -1.9,
    winRate: 0.71,
    avgRMultiple: 0.95,
    profitFactor: 1.85,
    totalTrades: 310,
    winningTrades: 220,
    losingTrades: 90,
    netExposure: 25000,
    grossExposure: 320000,
    leverage: 1.0,
  },
  {
    id: 'link-grid',
    name: 'LINK Grid Trading',
    type: 'market_making',
    subType: 'grid_trading',
    symbols: ['LINKUSDT'],
    exchange: 'OKX',
    isActive: true,
    balance: 310000,
    equity: 318900,
    dailyPnl: 1950,
    dailyPnlPercent: 0.62,
    cumulativePnl: 28900,
    sharpe30d: 2.45,
    sharpe90d: 2.12,
    sortino30d: 3.1,
    maxDrawdown: -3.2,
    currentDrawdown: -0.4,
    winRate: 0.82,
    avgRMultiple: 0.72,
    profitFactor: 3.2,
    totalTrades: 485,
    winningTrades: 398,
    losingTrades: 87,
    netExposure: 15000,
    grossExposure: 140000,
    leverage: 1.0,
  },
  {
    id: 'dot-vol',
    name: 'DOT Volatility Arb',
    type: 'volatility',
    subType: 'volatility_arbitrage',
    symbols: ['DOTUSDT'],
    exchange: 'Bybit',
    isActive: true,
    balance: 290000,
    equity: 295400,
    dailyPnl: 1620,
    dailyPnlPercent: 0.55,
    cumulativePnl: 25400,
    sharpe30d: 1.98,
    sharpe90d: 1.73,
    sortino30d: 2.52,
    maxDrawdown: -6.5,
    currentDrawdown: -3.1,
    winRate: 0.63,
    avgRMultiple: 1.35,
    profitFactor: 1.95,
    totalTrades: 178,
    winningTrades: 112,
    losingTrades: 66,
    netExposure: 68000,
    grossExposure: 125000,
    leverage: 1.8,
  },
];

// ── Positions ───────────────────────────────────────────────────────
export const positions: Position[] = [
  // BTC Momentum
  { id: 'p1', strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', quantity: 0.85, entryPrice: 96200, currentPrice: 98450, leverage: 2, unrealizedPnl: 3822.5, unrealizedPnlPercent: 4.67, positionSizeUsd: 83697, stopLoss: 93800, takeProfit: 102000, openedAt: '2025-01-10T08:15:00Z' },
  { id: 'p2', strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', quantity: 0.42, entryPrice: 97800, currentPrice: 98450, leverage: 1.5, unrealizedPnl: 273, unrealizedPnlPercent: 0.66, positionSizeUsd: 41349, stopLoss: 95500, takeProfit: 101500, openedAt: '2025-01-12T14:30:00Z' },
  // ETH Mean Reversion
  { id: 'p3', strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'short', quantity: 8.5, entryPrice: 3820, currentPrice: 3785, leverage: 1, unrealizedPnl: 297.5, unrealizedPnlPercent: 0.92, positionSizeUsd: 32470, stopLoss: 3920, takeProfit: 3680, openedAt: '2025-01-11T10:45:00Z' },
  { id: 'p4', strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'long', quantity: 12.0, entryPrice: 3650, currentPrice: 3785, leverage: 1.2, unrealizedPnl: 1620, unrealizedPnlPercent: 3.7, positionSizeUsd: 43800, stopLoss: 3550, takeProfit: 3900, openedAt: '2025-01-09T22:10:00Z' },
  // SOL Breakout
  { id: 'p5', strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'long', quantity: 420, entryPrice: 185.5, currentPrice: 192.8, leverage: 2, unrealizedPnl: 3066, unrealizedPnlPercent: 3.93, positionSizeUsd: 77910, stopLoss: 178, takeProfit: 210, openedAt: '2025-01-10T16:20:00Z' },
  { id: 'p6', strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'long', quantity: 250, entryPrice: 190.2, currentPrice: 192.8, leverage: 1.5, unrealizedPnl: 650, unrealizedPnlPercent: 1.37, positionSizeUsd: 47550, stopLoss: 184, takeProfit: 205, openedAt: '2025-01-12T09:50:00Z' },
  // ARB Funding Rate
  { id: 'p7', strategyId: 'arb-fr', symbol: 'ARBUSDT', exchange: 'Binance', side: 'long', quantity: 45000, entryPrice: 1.12, currentPrice: 1.08, leverage: 1, unrealizedPnl: -1800, unrealizedPnlPercent: -3.57, positionSizeUsd: 50400, stopLoss: 1.02, takeProfit: 1.25, openedAt: '2025-01-08T11:00:00Z' },
  { id: 'p8', strategyId: 'arb-fr', symbol: 'BTCUSDT', exchange: 'Binance', side: 'short', quantity: 0.15, entryPrice: 97500, currentPrice: 98450, leverage: 1, unrealizedPnl: -142.5, unrealizedPnlPercent: -0.97, positionSizeUsd: 14625, stopLoss: 100000, takeProfit: 94000, openedAt: '2025-01-11T06:30:00Z' },
  // LINK Grid Trading
  { id: 'p9', strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'long', quantity: 1800, entryPrice: 22.15, currentPrice: 23.40, leverage: 1, unrealizedPnl: 2250, unrealizedPnlPercent: 5.64, positionSizeUsd: 39870, stopLoss: 20.5, takeProfit: 25.0, openedAt: '2025-01-07T13:15:00Z' },
  { id: 'p10', strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'short', quantity: 950, entryPrice: 24.10, currentPrice: 23.40, leverage: 1, unrealizedPnl: 665, unrealizedPnlPercent: 2.90, positionSizeUsd: 22895, stopLoss: 25.5, takeProfit: 22.0, openedAt: '2025-01-10T19:40:00Z' },
  // DOT Volatility Arb
  { id: 'p11', strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'long', quantity: 5500, entryPrice: 8.45, currentPrice: 8.72, leverage: 1.5, unrealizedPnl: 1485, unrealizedPnlPercent: 3.2, positionSizeUsd: 46475, stopLoss: 7.90, takeProfit: 9.50, openedAt: '2025-01-09T07:20:00Z' },
  { id: 'p12', strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'short', quantity: 3200, entryPrice: 8.90, currentPrice: 8.72, leverage: 1.8, unrealizedPnl: 576, unrealizedPnlPercent: 2.02, positionSizeUsd: 28480, stopLoss: 9.30, takeProfit: 8.20, openedAt: '2025-01-11T15:55:00Z' },
];

// ── Trades ───────────────────────────────────────────────────────────
const tradeTemplates: Array<Omit<Trade, 'id'>> = [
  // BTC Momentum trades
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 0.5, price: 97850, realizedPnl: 2425, realizedPnlPercent: 5.12, rMultiple: 2.5, regime: 'trending', entrySignal: 'EMA crossover', exitSignal: 'Target hit', executedAt: '2025-01-12T18:30:00Z' },
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', action: 'open', quantity: 0.42, price: 97800, realizedPnl: null, realizedPnlPercent: null, rMultiple: null, regime: 'trending', entrySignal: 'Momentum breakout', exitSignal: null, executedAt: '2025-01-12T14:30:00Z' },
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 0.3, price: 96100, realizedPnl: -480, realizedPnlPercent: -1.65, rMultiple: -0.8, regime: 'ranging', entrySignal: 'RSI divergence', exitSignal: 'Stop loss', executedAt: '2025-01-11T22:15:00Z' },
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 0.65, price: 98200, realizedPnl: 3510, realizedPnlPercent: 5.8, rMultiple: 3.1, regime: 'trending', entrySignal: 'MACD cross', exitSignal: 'Trailing stop', executedAt: '2025-01-10T15:45:00Z' },
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 0.25, price: 95800, realizedPnl: 1050, realizedPnlPercent: 4.38, rMultiple: 2.2, regime: 'volatile', entrySignal: 'Breakdown signal', exitSignal: 'Target hit', executedAt: '2025-01-09T11:30:00Z' },
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 0.4, price: 94500, realizedPnl: -920, realizedPnlPercent: -2.4, rMultiple: -1.0, regime: 'ranging', entrySignal: 'EMA crossover', exitSignal: 'Stop loss', executedAt: '2025-01-08T09:20:00Z' },
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 0.55, price: 99100, realizedPnl: 4180, realizedPnlPercent: 7.82, rMultiple: 3.8, regime: 'trending', entrySignal: 'Volume breakout', exitSignal: 'Target hit', executedAt: '2025-01-07T16:10:00Z' },
  { strategyId: 'btc-mom', symbol: 'BTCUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 0.35, price: 95200, realizedPnl: -350, realizedPnlPercent: -1.05, rMultiple: -0.5, regime: 'calm', entrySignal: 'RSI bounce', exitSignal: 'Stop loss', executedAt: '2025-01-06T13:45:00Z' },
  // ETH Mean Reversion trades
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 5.0, price: 3720, realizedPnl: 850, realizedPnlPercent: 4.45, rMultiple: 1.8, regime: 'ranging', entrySignal: 'Bollinger touch', exitSignal: 'Mean reached', executedAt: '2025-01-12T20:00:00Z' },
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 6.0, price: 3810, realizedPnl: 1260, realizedPnlPercent: 5.72, rMultiple: 2.3, regime: 'ranging', entrySignal: 'RSI oversold', exitSignal: 'Mean reached', executedAt: '2025-01-12T11:20:00Z' },
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 4.0, price: 3680, realizedPnl: 680, realizedPnlPercent: 4.68, rMultiple: 1.5, regime: 'calm', entrySignal: 'Z-score >2', exitSignal: 'Mean reached', executedAt: '2025-01-11T14:30:00Z' },
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 8.0, price: 3790, realizedPnl: -480, realizedPnlPercent: -1.58, rMultiple: -0.6, regime: 'trending', entrySignal: 'RSI oversold', exitSignal: 'Stop loss', executedAt: '2025-01-10T19:45:00Z' },
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 7.0, price: 3850, realizedPnl: 1470, realizedPnlPercent: 5.88, rMultiple: 2.1, regime: 'ranging', entrySignal: 'Support bounce', exitSignal: 'Resistance hit', executedAt: '2025-01-09T08:15:00Z' },
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 5.5, price: 3700, realizedPnl: 935, realizedPnlPercent: 4.58, rMultiple: 1.9, regime: 'calm', entrySignal: 'Bollinger touch', exitSignal: 'Mean reached', executedAt: '2025-01-08T16:50:00Z' },
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 10.0, price: 3760, realizedPnl: -1200, realizedPnlPercent: -3.19, rMultiple: -1.2, regime: 'volatile', entrySignal: 'Z-score <-2', exitSignal: 'Stop loss', executedAt: '2025-01-07T21:30:00Z' },
  { strategyId: 'eth-mr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 6.0, price: 3640, realizedPnl: 1080, realizedPnlPercent: 4.95, rMultiple: 2.0, regime: 'ranging', entrySignal: 'RSI overbought', exitSignal: 'Target hit', executedAt: '2025-01-06T10:20:00Z' },
  // SOL Breakout trades
  { strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 300, price: 195.5, realizedPnl: 4650, realizedPnlPercent: 8.42, rMultiple: 3.5, regime: 'trending', entrySignal: 'Channel breakout', exitSignal: 'Target hit', executedAt: '2025-01-12T16:40:00Z' },
  { strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 200, price: 188.0, realizedPnl: -1400, realizedPnlPercent: -3.66, rMultiple: -1.0, regime: 'ranging', entrySignal: 'ATR breakout', exitSignal: 'Stop loss', executedAt: '2025-01-11T09:15:00Z' },
  { strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 350, price: 198.2, realizedPnl: 5740, realizedPnlPercent: 9.0, rMultiple: 4.2, regime: 'trending', entrySignal: 'Volume spike', exitSignal: 'Trailing stop', executedAt: '2025-01-10T14:20:00Z' },
  { strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 180, price: 180.5, realizedPnl: 1260, realizedPnlPercent: 3.82, rMultiple: 1.5, regime: 'volatile', entrySignal: 'Breakdown signal', exitSignal: 'Target hit', executedAt: '2025-01-09T19:50:00Z' },
  { strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 280, price: 186.0, realizedPnl: -840, realizedPnlPercent: -1.62, rMultiple: -0.7, regime: 'calm', entrySignal: 'Consolidation break', exitSignal: 'Stop loss', executedAt: '2025-01-08T12:30:00Z' },
  { strategyId: 'sol-brk', symbol: 'SOLUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 400, price: 194.8, realizedPnl: 3920, realizedPnlPercent: 5.28, rMultiple: 2.8, regime: 'trending', entrySignal: 'Momentum surge', exitSignal: 'Target hit', executedAt: '2025-01-07T17:10:00Z' },
  // ARB Funding Rate trades
  { strategyId: 'arb-fr', symbol: 'ARBUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 20000, price: 1.15, realizedPnl: 600, realizedPnlPercent: 2.68, rMultiple: 1.2, regime: 'calm', entrySignal: 'Funding negative', exitSignal: 'Funding neutral', executedAt: '2025-01-12T23:00:00Z' },
  { strategyId: 'arb-fr', symbol: 'BTCUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 0.1, price: 97200, realizedPnl: 280, realizedPnlPercent: 2.88, rMultiple: 1.0, regime: 'calm', entrySignal: 'Funding elevated', exitSignal: 'Funding settled', executedAt: '2025-01-12T08:00:00Z' },
  { strategyId: 'arb-fr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 3.0, price: 3790, realizedPnl: 450, realizedPnlPercent: 3.96, rMultiple: 1.3, regime: 'ranging', entrySignal: 'Basis wide', exitSignal: 'Basis converge', executedAt: '2025-01-11T16:00:00Z' },
  { strategyId: 'arb-fr', symbol: 'ARBUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 30000, price: 1.08, realizedPnl: -360, realizedPnlPercent: -1.1, rMultiple: -0.5, regime: 'volatile', entrySignal: 'Funding positive', exitSignal: 'Stop loss', executedAt: '2025-01-10T04:30:00Z' },
  { strategyId: 'arb-fr', symbol: 'BTCUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 0.08, price: 96800, realizedPnl: 216, realizedPnlPercent: 2.79, rMultiple: 0.9, regime: 'calm', entrySignal: 'Funding elevated', exitSignal: 'Funding settled', executedAt: '2025-01-09T20:00:00Z' },
  { strategyId: 'arb-fr', symbol: 'ETHUSDT', exchange: 'Binance', side: 'short', action: 'close', quantity: 4.0, price: 3680, realizedPnl: 520, realizedPnlPercent: 3.53, rMultiple: 1.1, regime: 'calm', entrySignal: 'Funding positive', exitSignal: 'Funding neutral', executedAt: '2025-01-08T12:00:00Z' },
  { strategyId: 'arb-fr', symbol: 'ARBUSDT', exchange: 'Binance', side: 'long', action: 'close', quantity: 25000, price: 1.18, realizedPnl: 750, realizedPnlPercent: 2.54, rMultiple: 1.4, regime: 'ranging', entrySignal: 'Basis wide', exitSignal: 'Basis converge', executedAt: '2025-01-07T08:00:00Z' },
  // LINK Grid Trading trades
  { strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'long', action: 'close', quantity: 400, price: 23.80, realizedPnl: 520, realizedPnlPercent: 5.92, rMultiple: 1.2, regime: 'ranging', entrySignal: 'Grid buy level', exitSignal: 'Grid sell level', executedAt: '2025-01-12T21:15:00Z' },
  { strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'short', action: 'close', quantity: 350, price: 22.90, realizedPnl: 385, realizedPnlPercent: 4.82, rMultiple: 0.9, regime: 'ranging', entrySignal: 'Grid sell level', exitSignal: 'Grid buy level', executedAt: '2025-01-12T17:30:00Z' },
  { strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'long', action: 'close', quantity: 500, price: 24.20, realizedPnl: 750, realizedPnlPercent: 6.38, rMultiple: 1.5, regime: 'calm', entrySignal: 'Grid buy level', exitSignal: 'Grid sell level', executedAt: '2025-01-11T13:45:00Z' },
  { strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'short', action: 'close', quantity: 600, price: 23.50, realizedPnl: -180, realizedPnlPercent: -1.28, rMultiple: -0.3, regime: 'trending', entrySignal: 'Grid sell level', exitSignal: 'Stop loss', executedAt: '2025-01-10T08:20:00Z' },
  { strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'long', action: 'close', quantity: 450, price: 23.10, realizedPnl: 405, realizedPnlPercent: 3.98, rMultiple: 0.8, regime: 'ranging', entrySignal: 'Grid buy level', exitSignal: 'Grid sell level', executedAt: '2025-01-09T15:10:00Z' },
  { strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'long', action: 'close', quantity: 380, price: 22.60, realizedPnl: 342, realizedPnlPercent: 3.98, rMultiple: 0.7, regime: 'calm', entrySignal: 'Grid buy level', exitSignal: 'Grid sell level', executedAt: '2025-01-08T20:40:00Z' },
  { strategyId: 'link-grid', symbol: 'LINKUSDT', exchange: 'OKX', side: 'short', action: 'close', quantity: 500, price: 24.50, realizedPnl: 600, realizedPnlPercent: 4.90, rMultiple: 1.0, regime: 'ranging', entrySignal: 'Grid sell level', exitSignal: 'Grid buy level', executedAt: '2025-01-07T11:55:00Z' },
  // DOT Volatility Arb trades
  { strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'long', action: 'close', quantity: 3000, price: 8.95, realizedPnl: 1350, realizedPnlPercent: 5.31, rMultiple: 2.1, regime: 'volatile', entrySignal: 'Vol crush entry', exitSignal: 'Vol expand exit', executedAt: '2025-01-12T19:20:00Z' },
  { strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'short', action: 'close', quantity: 2500, price: 8.30, realizedPnl: 1250, realizedPnlPercent: 6.02, rMultiple: 2.4, regime: 'volatile', entrySignal: 'IV/RV spread', exitSignal: 'Spread converge', executedAt: '2025-01-12T10:40:00Z' },
  { strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'long', action: 'close', quantity: 4000, price: 8.60, realizedPnl: -800, realizedPnlPercent: -2.33, rMultiple: -0.9, regime: 'calm', entrySignal: 'Vol crush entry', exitSignal: 'Stop loss', executedAt: '2025-01-11T17:30:00Z' },
  { strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'short', action: 'close', quantity: 2000, price: 8.15, realizedPnl: 900, realizedPnlPercent: 5.52, rMultiple: 1.8, regime: 'volatile', entrySignal: 'Gamma scalp', exitSignal: 'Target hit', executedAt: '2025-01-10T23:00:00Z' },
  { strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'long', action: 'close', quantity: 3500, price: 8.82, realizedPnl: 1120, realizedPnlPercent: 3.83, rMultiple: 1.6, regime: 'volatile', entrySignal: 'Vol crush entry', exitSignal: 'Vol expand exit', executedAt: '2025-01-09T14:15:00Z' },
  { strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'short', action: 'close', quantity: 1800, price: 8.50, realizedPnl: -360, realizedPnlPercent: -2.35, rMultiple: -0.7, regime: 'trending', entrySignal: 'IV/RV spread', exitSignal: 'Stop loss', executedAt: '2025-01-08T07:45:00Z' },
  { strategyId: 'dot-vol', symbol: 'DOTUSDT', exchange: 'Bybit', side: 'long', action: 'close', quantity: 2800, price: 9.10, realizedPnl: 1960, realizedPnlPercent: 8.29, rMultiple: 3.2, regime: 'volatile', entrySignal: 'Vol crush entry', exitSignal: 'Target hit', executedAt: '2025-01-07T19:30:00Z' },
];

export const trades: Trade[] = tradeTemplates.map((t, i) => ({
  ...t,
  id: `t${i + 1}`,
}));

// ── Daily Metrics (90 days) ─────────────────────────────────────────
function generateDailyMetrics(days: number, startEquity: number, volatility: number, drift: number): DailyMetric[] {
  const metrics: DailyMetric[] = [];
  let equity = startEquity;
  let peak = equity;
  let cumPnl = 0;

  const startDate = new Date();
  startDate.setDate(startDate.getDate() - days);

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);

    const dailyReturn = (drift + volatility * (Math.random() * 2 - 1)) / 100;
    const dailyPnl = equity * dailyReturn;
    equity += dailyPnl;
    cumPnl += dailyPnl;
    peak = Math.max(peak, equity);
    const drawdown = ((equity - peak) / peak) * 100;

    metrics.push({
      date: date.toISOString().split('T')[0],
      equity: Math.round(equity),
      dailyPnl: Math.round(dailyPnl),
      cumulativePnl: Math.round(cumPnl),
      drawdown: parseFloat(drawdown.toFixed(2)),
      sharpe: parseFloat((1.5 + Math.random() * 2).toFixed(2)),
    });
  }
  return metrics;
}

export const portfolioDailyMetrics: DailyMetric[] = generateDailyMetrics(90, 2200000, 0.8, 0.15);

export const strategyDailyMetrics: Record<string, StrategyDailyMetric[]> = {
  'btc-mom': generateDailyMetrics(90, 550000, 1.2, 0.18).map(m => ({ ...m, strategyId: 'btc-mom' })),
  'eth-mr': generateDailyMetrics(90, 430000, 0.6, 0.14).map(m => ({ ...m, strategyId: 'eth-mr' })),
  'sol-brk': generateDailyMetrics(90, 340000, 1.5, 0.16).map(m => ({ ...m, strategyId: 'sol-brk' })),
  'arb-fr': generateDailyMetrics(90, 382000, 0.4, 0.10).map(m => ({ ...m, strategyId: 'arb-fr' })),
  'link-grid': generateDailyMetrics(90, 290000, 0.5, 0.10).map(m => ({ ...m, strategyId: 'link-grid' })),
  'dot-vol': generateDailyMetrics(90, 270000, 1.0, 0.09).map(m => ({ ...m, strategyId: 'dot-vol' })),
};

// ── Portfolio Summary ───────────────────────────────────────────────
export const portfolioSummary: PortfolioSummary = {
  totalCapital: 2500000,
  totalEquity: 2555000,
  dailyPnl: 12300,
  dailyPnlPercent: 0.49,
  weeklyPnl: 42500,
  monthlyPnl: 128000,
  allTimePnl: 295000,
  sharpe: 2.15,
  sortino: 2.85,
  maxDrawdown: -8.2,
  currentDrawdown: -1.8,
  activeStrategies: 6,
  openPositions: 12,
  riskUtilization: 62,
};

// ── Correlation Matrix ──────────────────────────────────────────────
const strategyIds = strategies.map(s => s.id);
const correlationValues: number[][] = [
  [1.00,  0.35,  0.62, -0.15,  0.08,  0.28],
  [0.35,  1.00,  0.18,  0.05, -0.12,  0.42],
  [0.62,  0.18,  1.00, -0.08,  0.15,  0.38],
  [-0.15, 0.05, -0.08,  1.00,  0.22, -0.05],
  [0.08, -0.12,  0.15,  0.22,  1.00,  0.10],
  [0.28,  0.42,  0.38, -0.05,  0.10,  1.00],
];

export const correlationMatrix: CorrelationEntry[] = [];
for (let i = 0; i < strategyIds.length; i++) {
  for (let j = 0; j < strategyIds.length; j++) {
    correlationMatrix.push({
      strategy1: strategyIds[i],
      strategy2: strategyIds[j],
      correlation: correlationValues[i][j],
    });
  }
}

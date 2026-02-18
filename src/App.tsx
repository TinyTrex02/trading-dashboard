import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import StrategyView from './pages/StrategyView';

export default function App() {
  return (
    <BrowserRouter basename="/trading-dashboard">
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/strategy/:id" element={<StrategyView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

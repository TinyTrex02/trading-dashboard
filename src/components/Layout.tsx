import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-sm font-bold">TD</div>
            <span className="text-lg font-semibold text-white">Portfolio Dashboard</span>
          </Link>
          {!isHome && (
            <span className="text-gray-500 text-sm ml-2">/ Strategy Detail</span>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>Last Update: {new Date().toLocaleTimeString('en-US', { hour12: false, timeZone: 'UTC' })} UTC</span>
          <div className="w-2 h-2 rounded-full bg-green-500" title="Connected" />
        </div>
      </header>

      {/* Main content */}
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

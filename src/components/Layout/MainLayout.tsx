import { ReactNode } from 'react';
import { useAuth } from '../../contexts/AuthContext';

interface MainLayoutProps {
  children: ReactNode;
  currentView: string;
  onViewChange: (view: string) => void;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { signOut, profile } = useAuth();

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm border-b border-slate-200 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src="/nomina.png" alt="AXYRA Logo" className="h-10" />
            <h1 className="text-xl font-bold text-slate-800">AXYRA Nómina</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-600">{profile?.full_name}</span>
            <button
              onClick={signOut}
              className="text-sm text-blue-600 hover:text-blue-700"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}

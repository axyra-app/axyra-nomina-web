import { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { MainLayout } from './components/Layout/MainLayout';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Companies } from './components/Companies/Companies';
import { Employees } from './components/Employees/Employees';
import { HourTypes } from './components/HourTypes/HourTypes';
import { HourRecords } from './components/HourRecords/HourRecords';
import { Payroll } from './components/Payroll/Payroll';
import { Settings } from './components/Settings/Settings';

function AppContent() {
  const { user, loading } = useAuth();
  const [showRegister, setShowRegister] = useState(false);
  const [currentView, setCurrentView] = useState('dashboard');

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-slate-600">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    if (showRegister) {
      return <Register onToggle={() => setShowRegister(false)} />;
    }
    return <Login onToggle={() => setShowRegister(true)} />;
  }

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'companies':
        return <Companies />;
      case 'employees':
        return <Employees />;
      case 'hour-types':
        return <HourTypes />;
      case 'hour-records':
        return <HourRecords />;
      case 'payroll':
        return <Payroll />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout currentView={currentView} onViewChange={setCurrentView}>
      {renderView()}
    </MainLayout>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;

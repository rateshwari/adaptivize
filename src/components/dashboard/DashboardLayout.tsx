
import { ReactNode } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 pt-16 md:pl-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

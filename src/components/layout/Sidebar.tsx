
import { Home, BookOpen, Users, BarChart4, Star, Settings, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const location = useLocation();
  
  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileExpanded(false);
  }, [location]);
  
  // Handle resize to reset mobile states
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileExpanded(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const navigationItems = [
    { icon: Home, path: '/', label: 'Dashboard' },
    { icon: BookOpen, path: '/learning', label: 'Learning' },
    { icon: Users, path: '/community', label: 'Community' },
    { icon: BarChart4, path: '/career', label: 'Career' },
    { icon: Star, path: '/achievements', label: 'Achievements' },
    { icon: Settings, path: '/settings', label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile Menu Toggle */}
      <button 
        className="fixed bottom-6 right-6 md:hidden z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent shadow-lg flex items-center justify-center text-white"
        onClick={() => setMobileExpanded(!mobileExpanded)}
      >
        {mobileExpanded ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>
      
      {/* Desktop Sidebar */}
      <aside 
        className={cn(
          "hidden md:flex flex-col h-screen sticky top-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-r border-gray-200 dark:border-gray-800 transition-all duration-300 pt-16 overflow-hidden",
          collapsed ? "w-20" : "w-64"
        )}
      >
        <button 
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          onClick={() => setCollapsed(!collapsed)}
        >
          <Menu className="w-4 h-4 text-gray-600 dark:text-gray-300" />
        </button>
        
        <div className="flex-1 px-3 py-4">
          <nav className="flex flex-col space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-3 rounded-lg transition-all relative group",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <item.icon className="min-w-5 w-5 h-5" />
                {!collapsed && (
                  <span className="ml-3 transition-opacity duration-200">{item.label}</span>
                )}
                {location.pathname === item.path && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-full" />
                )}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className={cn(
          "px-3 py-4 border-t border-gray-200 dark:border-gray-800",
          collapsed ? "flex justify-center" : ""
        )}>
          <div className={cn(
            "flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10",
            collapsed ? "justify-center" : ""
          )}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
              <span className="text-xs font-bold">JS</span>
            </div>
            {!collapsed && (
              <div className="overflow-hidden">
                <p className="text-sm font-medium truncate">John Smith</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">Premium Member</p>
              </div>
            )}
          </div>
        </div>
      </aside>
      
      {/* Mobile Sidebar */}
      <div className={cn(
        "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300",
        mobileExpanded ? "opacity-100" : "opacity-0 pointer-events-none"
      )}>
        <aside className={cn(
          "absolute right-0 top-0 h-full bg-white dark:bg-gray-900 w-64 transition-transform duration-300 transform shadow-xl overflow-y-auto",
          mobileExpanded ? "translate-x-0" : "translate-x-full"
        )}>
          <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse-slow"></div>
              </div>
              <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                adaptivize
              </span>
            </Link>
            <button 
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileExpanded(false)}
            >
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
          
          <nav className="p-4 space-y-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center px-3 py-3 rounded-lg transition-all relative group",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="ml-3">{item.label}</span>
                {location.pathname === item.path && (
                  <span className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r-full" />
                )}
              </Link>
            ))}
          </nav>
          
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white">
                <span className="text-xs font-bold">JS</span>
              </div>
              <div>
                <p className="text-sm font-medium">John Smith</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Premium Member</p>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;

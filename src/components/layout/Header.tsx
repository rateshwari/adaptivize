
import { useState, useEffect } from 'react';
import { Bell, Search, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-3",
      scrolled ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse-slow"></div>
            </div>
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              adaptivize
            </span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { path: "/", label: "Dashboard" },
            { path: "/learning", label: "Learning" },
            { path: "/community", label: "Community" },
            { path: "/career", label: "Career" },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "px-4 py-2 rounded-lg transition-all relative group hover:text-primary",
                location.pathname === item.path
                  ? "text-primary font-medium"
                  : "text-gray-600 dark:text-gray-300"
              )}
            >
              {item.label}
              {location.pathname === item.path && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full animate-fade-in" />
              )}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Search className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <button className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 p-0.5">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

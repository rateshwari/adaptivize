
import { useState, useEffect } from 'react';
import { Calendar, TrendingUp, CheckCircle2 } from 'lucide-react';

const WelcomeSection = () => {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  
  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
    
    // Format current time
    const formatTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    
    formatTime();
    const intervalId = setInterval(formatTime, 60000); // Update every minute
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="dashboard-card p-6 overflow-hidden relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pattern-dots"></div>
      
      <div className="relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {greeting}, John
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              It's {currentTime} • <span className="font-medium">Monday, May 15</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="font-medium">Study plan:</span>
            <span className="text-gray-600 dark:text-gray-300">Week 12 of 24</span>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover-lift">
            <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Today's Focus</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Complete React Advanced Patterns module</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover-lift">
            <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-900/30">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Skill Progress</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Frontend development skills up 12% this month</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover-lift">
            <div className="rounded-full p-2 bg-purple-100 dark:bg-purple-900/30">
              <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Upcoming</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Group project meeting in 2 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;

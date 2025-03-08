
import { useState, useEffect } from 'react';
import { Calendar, TrendingUp, CheckCircle2, BrainCircuit, BookText, Medal } from 'lucide-react';
import { cn } from '@/lib/utils';

const WelcomeSection = () => {
  const [greeting, setGreeting] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [userName, setUserName] = useState('John');
  const [currentStreak, setCurrentStreak] = useState(7);
  
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              {greeting}, {userName}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              It's {currentTime} • <span className="font-medium">Monday, May 15</span> • <span className="text-primary font-medium">Day {currentStreak} streak! 🔥</span>
            </p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="font-medium">Study plan:</span>
              <span className="text-gray-600 dark:text-gray-300">Week 12 of 24</span>
            </div>
            
            <div className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
              Pro Learner
            </div>
          </div>
        </div>
        
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover-lift">
            <div className="rounded-full p-2 bg-green-100 dark:bg-green-900/30">
              <CheckCircle2 className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Today's Focus</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Complete React Advanced Patterns module</p>
              <div className="mt-2 flex items-center">
                <div className="w-24 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '65%' }}></div>
                </div>
                <span className="text-xs text-gray-500 ml-2">65%</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover-lift">
            <div className="rounded-full p-2 bg-blue-100 dark:bg-blue-900/30">
              <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Skill Progress</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Frontend development skills up 12% this month</p>
              <div className="mt-2 flex items-center space-x-1">
                <span className="text-xs px-1.5 py-0.5 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded">React +8%</span>
                <span className="text-xs px-1.5 py-0.5 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 rounded">TypeScript +5%</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover-lift">
            <div className="rounded-full p-2 bg-amber-100 dark:bg-amber-900/30">
              <BrainCircuit className="w-6 h-6 text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Learning Style</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Visual learner with active participation</p>
              <div className="mt-2 flex items-center">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs">
                    <BookText className="w-3 h-3" />
                  </div>
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">
                    <Medal className="w-3 h-3" />
                  </div>
                </div>
                <span className="text-xs text-gray-500 ml-2">Matched content</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white/50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover-lift">
            <div className="rounded-full p-2 bg-purple-100 dark:bg-purple-900/30">
              <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900 dark:text-gray-100">Upcoming</h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">Group project meeting in 2 days</p>
              <div className="mt-2">
                <button className="text-xs text-primary hover:underline">View calendar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;


import { useEffect, useState } from 'react';
import { Bell, Trending, Users, Clock, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

const RightSidebar = () => {
  const [mentorOnline, setMentorOnline] = useState(2);
  
  useEffect(() => {
    // Simulate mentors coming online/offline
    const interval = setInterval(() => {
      setMentorOnline(prev => Math.max(1, Math.min(4, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6 sticky top-24">
      {/* Community Activity Feed */}
      <div className="dashboard-card overflow-hidden">
        <div className="p-4 border-b border-gray-100 dark:border-gray-700 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-4 h-4 text-primary" />
            <h3 className="font-semibold text-lg">Activity Feed</h3>
          </div>
          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Live</span>
        </div>
        
        <div className="max-h-[320px] overflow-y-auto p-4 space-y-4">
          {activities.map((activity, index) => (
            <div 
              key={index} 
              className={cn(
                "p-3 rounded-lg border-l-2 animate-fade-in", 
                activity.category === 'community' ? "border-purple-400 bg-purple-50 dark:bg-purple-900/10" : 
                activity.category === 'learning' ? "border-blue-400 bg-blue-50 dark:bg-blue-900/10" : 
                "border-amber-400 bg-amber-50 dark:bg-amber-900/10"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3",
                  activity.category === 'community' ? "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" : 
                  activity.category === 'learning' ? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" : 
                  "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
                )}>
                  {activity.category === 'community' && <Users className="w-4 h-4" />}
                  {activity.category === 'learning' && <Clock className="w-4 h-4" />}
                  {activity.category === 'industry' && <Trending className="w-4 h-4" />}
                </div>
                <div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{activity.message}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mentor Availability */}
      <div className="dashboard-card p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Users className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-lg">Mentor Availability</h3>
        </div>
        
        <div className="space-y-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">Available Now</span>
            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 font-medium">
              {mentorOnline} mentors
            </span>
          </div>
          
          {mentors.slice(0, mentorOnline).map((mentor, index) => (
            <div key={index} className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover-lift">
              <div className={cn(
                "w-10 h-10 rounded-full flex items-center justify-center text-white mr-3",
                mentor.color
              )}>
                <span className="font-semibold">{mentor.initials}</span>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm">{mentor.name}</h4>
                <p className="text-xs text-gray-500">{mentor.expertise}</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
          ))}
          
          <a href="/community" className="block text-center text-sm text-primary hover:underline mt-3">
            View all mentors
          </a>
        </div>
      </div>
      
      {/* Industry Trends */}
      <div className="dashboard-card p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Trending className="w-4 h-4 text-primary" />
          <h3 className="font-semibold text-lg">Industry Trends</h3>
        </div>
        
        <div className="space-y-3">
          {trends.map((trend, index) => (
            <a href={trend.link} key={index} className="block p-3 rounded-lg border border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="flex justify-between items-start">
                <p className="text-sm font-medium">{trend.title}</p>
                <ExternalLink className="w-3 h-3 text-gray-400 flex-shrink-0 mt-1" />
              </div>
              <div className="flex items-center mt-2">
                <div className={cn(
                  "text-xs px-2 py-1 rounded-full",
                  trend.isHot ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400" : 
                  "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                )}>
                  {trend.isHot ? 'Hot Trend' : 'Emerging'}
                </div>
                <span className="text-xs text-gray-500 ml-2">{trend.category}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

// Sample data
const activities = [
  {
    category: 'community',
    message: 'Alex K. responded to your question about React hooks',
    time: '10 minutes ago'
  },
  {
    category: 'learning',
    message: 'New module "Advanced State Management" is now available',
    time: '1 hour ago'
  },
  {
    category: 'industry',
    message: 'TypeScript 5.0 features are trending in discussion forums',
    time: '3 hours ago'
  },
  {
    category: 'community',
    message: 'Your project received 3 new reviews from peers',
    time: '5 hours ago'
  },
  {
    category: 'learning',
    message: 'You've reached 70% completion in React Advanced Patterns!',
    time: 'Yesterday'
  }
];

const mentors = [
  {
    name: 'David Chen',
    initials: 'DC',
    expertise: 'React, TypeScript • 7 years exp.',
    color: 'bg-gradient-to-br from-blue-600 to-blue-800'
  },
  {
    name: 'Sarah Johnson',
    initials: 'SJ',
    expertise: 'UI/UX, Frontend • 5 years exp.',
    color: 'bg-gradient-to-br from-purple-600 to-purple-800'
  },
  {
    name: 'Michael Kim',
    initials: 'MK',
    expertise: 'Backend, API Design • 8 years exp.',
    color: 'bg-gradient-to-br from-green-600 to-green-800'
  },
  {
    name: 'Priya Patel',
    initials: 'PP',
    expertise: 'Data Visualization • 6 years exp.',
    color: 'bg-gradient-to-br from-amber-600 to-amber-800'
  }
];

const trends = [
  {
    title: 'Serverless Architecture Adoption',
    category: 'Cloud',
    isHot: true,
    link: '#'
  },
  {
    title: 'Low-Code Development Platforms',
    category: 'Development',
    isHot: false,
    link: '#'
  },
  {
    title: 'Web Assembly for Performance',
    category: 'Frontend',
    isHot: true,
    link: '#'
  }
];

export default RightSidebar;

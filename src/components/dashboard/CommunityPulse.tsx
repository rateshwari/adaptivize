
import { useState } from 'react';
import { Users, MessageSquare, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Discussion {
  id: number;
  title: string;
  participants: number;
  replies: number;
  active: boolean;
  time: string;
}

const CommunityPulse = () => {
  const [filter, setFilter] = useState<'all' | 'trending' | 'recent'>('trending');
  
  const discussions: Discussion[] = [
    {
      id: 1,
      title: 'Best practices for React Context API',
      participants: 12,
      replies: 42,
      active: true,
      time: '15m ago'
    },
    {
      id: 2,
      title: 'How to structure large-scale React applications?',
      participants: 8,
      replies: 31,
      active: true,
      time: '1h ago'
    },
    {
      id: 3,
      title: 'Career transition: from backend to fullstack',
      participants: 5,
      replies: 19,
      active: false,
      time: '3h ago'
    },
    {
      id: 4,
      title: 'Latest trends in frontend development for 2023',
      participants: 23,
      replies: 67,
      active: true,
      time: '4h ago'
    }
  ];
  
  const filteredDiscussions = () => {
    switch (filter) {
      case 'trending':
        return [...discussions].sort((a, b) => b.replies - a.replies);
      case 'recent':
        return [...discussions].sort((a, b) => a.id - b.id);
      default:
        return discussions;
    }
  };

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="mr-3 p-2 rounded-full bg-green-100 dark:bg-green-900/30">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="section-heading">Community Pulse</h3>
          </div>
          
          <div className="flex space-x-1 text-xs">
            {(['trending', 'recent', 'all'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={cn(
                  "px-2 py-1 rounded-md capitalize transition-colors",
                  filter === type
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                )}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <div className="space-y-3">
          {filteredDiscussions().map((discussion) => (
            <div 
              key={discussion.id}
              className="relative p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700 hover-lift cursor-pointer"
            >
              {discussion.active && (
                <span className="absolute top-4 right-4 w-2 h-2 rounded-full bg-green-500 animate-pulse-slow"></span>
              )}
              
              <h4 className="font-medium text-gray-900 dark:text-gray-100 pr-6">{discussion.title}</h4>
              
              <div className="mt-2 flex items-center text-xs text-gray-500 dark:text-gray-400 space-x-4">
                <span className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {discussion.participants} participants
                </span>
                <span className="flex items-center">
                  <MessageSquare className="w-3 h-3 mr-1" />
                  {discussion.replies} replies
                </span>
                <span>{discussion.time}</span>
              </div>
            </div>
          ))}
          
          <a href="/community" className="block text-center text-sm text-primary hover:underline pt-2 flex items-center justify-center">
            View all community discussions
            <ArrowUpRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CommunityPulse;

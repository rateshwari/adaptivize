
import { Lightbulb, ExternalLink, BookOpen, Users, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const QuickActions = () => {
  const recommendations = [
    {
      id: 1,
      title: 'Resume React Pattern Course',
      description: 'Continue where you left off (65% complete)',
      icon: BookOpen,
      color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400',
      link: '/learning/content'
    },
    {
      id: 2,
      title: 'Join Frontend Study Group',
      description: '12 peers are currently active',
      icon: Users,
      color: 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400',
      link: '/community'
    },
    {
      id: 3,
      title: 'React useCallback Masterclass',
      description: '30-minute video recommended for you',
      icon: PlayCircle,
      color: 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400',
      link: '/learning'
    }
  ];

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-3 p-2 rounded-full bg-amber-100 dark:bg-amber-900/30">
            <Lightbulb className="w-5 h-5 text-amber-600 dark:text-amber-400" />
          </div>
          <h3 className="section-heading">Quick Actions</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-3">
          {recommendations.map((item) => (
            <Link 
              to={item.link}
              key={item.id}
              className="group relative flex items-center p-4 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover-lift glow-effect"
            >
              <div className={cn("p-2 rounded-full mr-4", item.color)}>
                <item.icon className="w-5 h-5" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">{item.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{item.description}</p>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-400 dark:text-gray-500 group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickActions;

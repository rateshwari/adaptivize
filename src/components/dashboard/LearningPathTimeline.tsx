
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Award, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Module {
  id: number;
  title: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  status: 'completed' | 'current' | 'upcoming';
  progress: number;
  icon: 'clock' | 'award' | 'book';
}

const LearningPathTimeline = () => {
  const [scrollPos, setScrollPos] = useState(0);
  
  const modules: Module[] = [
    {
      id: 1,
      title: 'Foundations of React',
      duration: '2 weeks',
      difficulty: 'beginner',
      status: 'completed',
      progress: 100,
      icon: 'award'
    },
    {
      id: 2,
      title: 'JavaScript Advanced Concepts',
      duration: '3 weeks',
      difficulty: 'intermediate',
      status: 'completed',
      progress: 100,
      icon: 'award'
    },
    {
      id: 3,
      title: 'React Advanced Patterns',
      duration: '4 weeks',
      difficulty: 'advanced',
      status: 'current',
      progress: 65,
      icon: 'book'
    },
    {
      id: 4,
      title: 'State Management',
      duration: '3 weeks',
      difficulty: 'intermediate',
      status: 'upcoming',
      progress: 0,
      icon: 'clock'
    },
    {
      id: 5,
      title: 'API Integration',
      duration: '2 weeks',
      difficulty: 'intermediate',
      status: 'upcoming',
      progress: 0,
      icon: 'clock'
    },
    {
      id: 6,
      title: 'Testing React Applications',
      duration: '3 weeks',
      difficulty: 'advanced',
      status: 'upcoming',
      progress: 0,
      icon: 'clock'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    const scrollAmount = 300;
    const newPos = direction === 'left' 
      ? Math.max(0, scrollPos - scrollAmount)
      : Math.min(container.scrollWidth - container.clientWidth, scrollPos + scrollAmount);
    
    container.scrollTo({ left: newPos, behavior: 'smooth' });
    setScrollPos(newPos);
  };

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'clock':
        return <Clock className="w-4 h-4" />;
      case 'award':
        return <Award className="w-4 h-4" />;
      case 'book':
        return <BookOpen className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'intermediate':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
      case 'advanced':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'from-green-500 to-green-600';
      case 'current':
        return 'from-blue-500 to-blue-600';
      case 'upcoming':
        return 'from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700';
      default:
        return 'from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700';
    }
  };

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="section-heading">Your Learning Path</h3>
          <div className="flex space-x-2">
            <button 
              onClick={() => handleScroll('left')} 
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button 
              onClick={() => handleScroll('right')} 
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
        
        <div 
          id="timeline-container"
          className="relative overflow-x-auto pb-6 hide-scrollbar"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex space-x-12 px-4 min-w-max">
            {modules.map((module, index) => (
              <div key={module.id} className="timeline-item min-w-[200px] max-w-[200px]">
                {/* Connecting line - only after first item */}
                {index > 0 && (
                  <div className="absolute h-0.5 w-12 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-600 dark:to-gray-700 left-0 top-6 -ml-12"></div>
                )}
                
                {/* Timeline node with progress */}
                <div className="relative">
                  <div className={cn(
                    "timeline-node w-6 h-6",
                    module.status === 'completed' ? 'bg-gradient-to-br from-green-500 to-green-600' : 
                    module.status === 'current' ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                    'bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700'
                  )}>
                    {module.status === 'completed' && (
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        ✓
                      </span>
                    )}
                  </div>
                  
                  {/* Progress indicator for current module */}
                  {module.status === 'current' && (
                    <div className="absolute w-12 h-12 rounded-full border-2 border-dashed border-blue-400 dark:border-blue-600 animate-pulse-slow -m-3"></div>
                  )}
                </div>
                
                {/* Module card */}
                <div className={cn(
                  "mt-4 bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all hover-lift cursor-pointer border",
                  module.status === 'completed' ? 'border-green-200 dark:border-green-900/50' :
                  module.status === 'current' ? 'border-blue-200 dark:border-blue-900/50' :
                  'border-gray-200 dark:border-gray-700'
                )}>
                  <div className="flex items-start justify-between mb-2">
                    <span className={cn(
                      "text-xs px-2 py-0.5 rounded-full font-medium",
                      getDifficultyColor(module.difficulty)
                    )}>
                      {module.difficulty}
                    </span>
                    <div className={cn(
                      "rounded-full p-1.5",
                      module.status === 'completed' ? 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400' :
                      module.status === 'current' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400' :
                      'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                    )}>
                      {renderIcon(module.icon)}
                    </div>
                  </div>
                  
                  <h4 className="font-medium text-sm line-clamp-2 h-10">{module.title}</h4>
                  
                  <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                    {module.duration}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={cn(
                        "h-full bg-gradient-to-r rounded-full transition-all duration-1000",
                        getStatusColor(module.status)
                      )}
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningPathTimeline;

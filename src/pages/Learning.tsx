
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { BookOpen, PlayCircle, FileText, CheckCircle2, Clock, Star, Filter, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const Learning = () => {
  const [activeTab, setActiveTab] = useState('in-progress');
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  
  const courses = [
    {
      id: 1,
      title: 'React Advanced Patterns',
      description: 'Master advanced React patterns including Render Props, HOCs, and Hooks.',
      progress: 65,
      totalLessons: 24,
      completedLessons: 16,
      estimatedTime: '4 weeks',
      difficulty: 'Advanced',
      category: 'Frontend',
      image: 'linear-gradient(to right, #4facfe 0%, #00f2fe 100%)',
      modules: [
        { id: 1, title: 'Component Composition', completed: true },
        { id: 2, title: 'Render Props Pattern', completed: true },
        { id: 3, title: 'Higher-Order Components', completed: true },
        { id: 4, title: 'Custom Hooks', completed: false, current: true },
        { id: 5, title: 'Context API Advanced Usage', completed: false },
        { id: 6, title: 'Performance Optimization', completed: false },
      ]
    },
    {
      id: 2,
      title: 'State Management with Redux',
      description: 'Learn how to manage application state effectively with Redux.',
      progress: 30,
      totalLessons: 18,
      completedLessons: 6,
      estimatedTime: '3 weeks',
      difficulty: 'Intermediate',
      category: 'Frontend',
      image: 'linear-gradient(to right, #fa709a 0%, #fee140 100%)',
      modules: [
        { id: 1, title: 'Redux Fundamentals', completed: true },
        { id: 2, title: 'Actions and Reducers', completed: true },
        { id: 3, title: 'Redux Middleware', completed: false, current: true },
        { id: 4, title: 'Redux Toolkit', completed: false },
        { id: 5, title: 'Async Operations', completed: false },
      ]
    }
  ];
  
  const handleExpandModule = (courseId: number) => {
    if (expandedModule === courseId) {
      setExpandedModule(null);
    } else {
      setExpandedModule(courseId);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Learning Experience
            </h1>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Continue your personalized learning journey
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search courses" 
                className="pl-9 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
            </div>
            
            <button className="flex items-center space-x-1 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm">
              <Filter className="w-4 h-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            {['in-progress', 'recommended', 'completed', 'bookmarked'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-3 text-sm font-medium transition-colors relative",
                  activeTab === tab
                    ? "text-primary"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100"
                )}
              >
                {tab === 'in-progress' && <Clock className="w-4 h-4 inline mr-1" />}
                {tab === 'recommended' && <Star className="w-4 h-4 inline mr-1" />}
                {tab === 'completed' && <CheckCircle2 className="w-4 h-4 inline mr-1" />}
                {tab === 'bookmarked' && <BookOpen className="w-4 h-4 inline mr-1" />}
                {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                
                {activeTab === tab && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="p-6">
            {activeTab === 'in-progress' && (
              <div className="space-y-6">
                {courses.map((course) => (
                  <div key={course.id} className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
                    <div className="h-24 relative" style={{ background: course.image }}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <h3 className="text-xl font-bold text-white drop-shadow-md px-6">{course.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex flex-wrap justify-between items-center mb-4">
                        <div className="flex space-x-2 mb-2 md:mb-0">
                          <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400 font-medium">
                            {course.difficulty}
                          </span>
                          <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 font-medium">
                            {course.category}
                          </span>
                        </div>
                        
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <Clock className="w-4 h-4 inline mr-1" />
                          {course.estimatedTime}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                        {course.description}
                      </p>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span>{course.completedLessons} of {course.totalLessons} lessons complete</span>
                          <span className="font-medium">{course.progress}%</span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <button 
                          className="text-sm text-primary hover:text-primary/80 flex items-center"
                          onClick={() => handleExpandModule(course.id)}
                        >
                          {expandedModule === course.id ? 'Hide modules' : 'Show modules'}
                        </button>
                        
                        <Link 
                          to="/learning/content" 
                          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                        >
                          Continue Learning
                        </Link>
                      </div>
                      
                      {expandedModule === course.id && (
                        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                          <h4 className="font-medium mb-3">Course Modules</h4>
                          <div className="space-y-2">
                            {course.modules.map((module) => (
                              <div 
                                key={module.id} 
                                className={cn(
                                  "p-3 rounded-lg flex items-center justify-between",
                                  module.completed ? "bg-green-50 dark:bg-green-900/10" : 
                                  module.current ? "bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/30" : 
                                  "bg-gray-50 dark:bg-gray-800/50"
                                )}
                              >
                                <div className="flex items-center">
                                  {module.completed ? (
                                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-3" />
                                  ) : module.current ? (
                                    <PlayCircle className="w-5 h-5 text-blue-500 mr-3" />
                                  ) : (
                                    <FileText className="w-5 h-5 text-gray-400 mr-3" />
                                  )}
                                  <span className={module.current ? "font-medium" : ""}>{module.title}</span>
                                </div>
                                
                                {module.current && (
                                  <Link 
                                    to="/learning/content" 
                                    className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-0.5 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/40 transition-colors"
                                  >
                                    Continue
                                  </Link>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab !== 'in-progress' && (
              <div className="text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mx-auto flex items-center justify-center mb-4">
                  {activeTab === 'recommended' && <Star className="w-8 h-8 text-gray-400" />}
                  {activeTab === 'completed' && <CheckCircle2 className="w-8 h-8 text-gray-400" />}
                  {activeTab === 'bookmarked' && <BookOpen className="w-8 h-8 text-gray-400" />}
                </div>
                <h3 className="text-xl font-medium mb-2">No {activeTab} courses yet</h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                  {activeTab === 'recommended' && "We're preparing personalized recommendations based on your learning patterns."}
                  {activeTab === 'completed' && "You haven't completed any courses yet. Keep learning!"}
                  {activeTab === 'bookmarked' && "Bookmark courses to save them for later."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Learning;

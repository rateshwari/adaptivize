
import { useState } from 'react';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { ArrowLeft, Bookmark, BookmarkCheck, ChevronDown, ChevronUp, ExternalLink, Eye, MessageSquare, PanelRight, PanelRightClose } from 'lucide-react';
import { cn } from '@/lib/utils';

const LearningContent = () => {
  const [focusMode, setFocusMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [bookmarked, setBookmarked] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  
  return (
    <DashboardLayout>
      <div className="animate-fade-in">
        {/* Top Navigation */}
        <div className={cn(
          "flex flex-col md:flex-row justify-between items-start md:items-center py-4 mb-6 transition-all duration-300",
          focusMode ? "opacity-30 hover:opacity-100" : ""
        )}>
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <a href="/learning" className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex items-center">
                <ArrowLeft className="w-4 h-4 mr-1" />
                Back to courses
              </a>
              <span className="text-gray-400">/</span>
              <span className="text-gray-500">React Advanced Patterns</span>
              <span className="text-gray-400">/</span>
              <span className="text-primary font-medium">Custom Hooks</span>
            </div>
            <h1 className="text-2xl font-bold">Building Advanced Custom Hooks</h1>
          </div>
          
          <div className="flex items-center space-x-3 mt-4 md:mt-0">
            <div className="bg-gray-100 dark:bg-gray-800 h-2 w-32 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-accent h-full rounded-full" style={{ width: '65%' }}></div>
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-400">65% complete</span>
            
            <button 
              onClick={() => setBookmarked(!bookmarked)} 
              className={cn(
                "p-2 rounded-full transition-colors",
                bookmarked ? "text-yellow-500 bg-yellow-100 dark:bg-yellow-900/30" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
              aria-label={bookmarked ? "Remove bookmark" : "Add bookmark"}
            >
              {bookmarked ? <BookmarkCheck className="w-5 h-5" /> : <Bookmark className="w-5 h-5" />}
            </button>
            
            <button 
              onClick={() => setFocusMode(!focusMode)} 
              className={cn(
                "p-2 rounded-full transition-colors",
                focusMode ? "text-blue-500 bg-blue-100 dark:bg-blue-900/30" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
              aria-label={focusMode ? "Exit focus mode" : "Enter focus mode"}
            >
              <Eye className="w-5 h-5" />
            </button>
            
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={cn(
                "p-2 rounded-full transition-colors md:hidden",
                "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
              aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              {sidebarOpen ? <PanelRightClose className="w-5 h-5" /> : <PanelRight className="w-5 h-5" />}
            </button>
          </div>
        </div>
        
        {/* Main Content Area with Sidebar */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Content Area */}
          <div className={cn(
            "flex-1 transition-all duration-500",
            focusMode ? "max-w-3xl mx-auto" : ""
          )}>
            <div className={cn(
              "bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-300",
              focusMode ? "p-8 md:p-12" : "p-6 md:p-8"
            )}>
              <div className={cn(
                "prose dark:prose-invert max-w-none",
                focusMode ? "prose-lg md:prose-xl" : "prose-base"
              )}>
                <h2>Understanding the Power of Custom Hooks</h2>
                
                <p>
                  Custom Hooks are JavaScript functions that utilize React's built-in Hooks to encapsulate reusable stateful logic. They follow the same rules as React's built-in Hooks and start with the word "use" by convention.
                </p>
                
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500 my-6">
                  <strong>Key Insight:</strong> Custom Hooks allow you to extract component logic into reusable functions, making your code more modular and easier to test.
                </div>
                
                <p>
                  Let's examine a real-world scenario where custom hooks provide significant advantages over traditional approaches. Imagine you need to track window dimensions across multiple components in your application.
                </p>
                
                <h3>Creating a Window Size Hook</h3>
                
                <p>
                  Instead of duplicating the resize event listener logic in multiple components, we can create a custom hook:
                </p>
                
                <pre><code>{`
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
                `}</code></pre>
                
                <p>
                  This custom hook encapsulates all the logic needed for tracking window dimensions and updates automatically whenever the window is resized.
                </p>
                
                <h3>Using the Hook in Components</h3>
                
                <p>
                  Now that we have our custom hook, using it in any component becomes trivially simple:
                </p>
                
                <pre><code>{`
function ResponsiveComponent() {
  const { width, height } = useWindowSize();
  
  return (
    <div>
      <p>Window width: {width}px</p>
      <p>Window height: {height}px</p>
    </div>
  );
}
                `}</code></pre>
                
                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border-l-4 border-amber-500 my-6">
                  <strong>Practice Exercise:</strong> Try creating a custom hook that manages a form's state and validation. How would you structure it to be reusable across different forms?
                </div>
                
                <h2>Advanced Pattern: Combining Multiple Hooks</h2>
                
                <p>
                  One of the most powerful aspects of custom hooks is their composability. You can combine multiple hooks to create more sophisticated behavior.
                </p>
                
                <p>
                  Let's build a more advanced example that combines state management, side effects, and context:
                </p>
                
                <pre><code>{`
function useDataFetching(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(\`Network response was not ok: \${response.status}\`);
        }
        
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}
                `}</code></pre>
              </div>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex justify-between mt-6">
              <button className="px-4 py-2 flex items-center text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Previous: Higher-Order Components
              </button>
              
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors flex items-center">
                Next: Context API Advanced Usage
                <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
              </button>
            </div>
          </div>
          
          {/* Right Sidebar */}
          {(sidebarOpen || !focusMode) && (
            <div className={cn(
              "w-full md:w-80 flex-shrink-0 transition-all duration-300",
              focusMode ? "md:opacity-30 md:hover:opacity-100" : "",
              sidebarOpen ? "block" : "hidden md:block" 
            )}>
              <div className="sticky top-24 space-y-6">
                {/* Content Outline */}
                <div className="dashboard-card overflow-hidden">
                  <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                    <h3 className="font-semibold">Content Outline</h3>
                  </div>
                  
                  <div className="p-4 max-h-[300px] overflow-y-auto">
                    <ul className="space-y-3">
                      {outlineItems.map((item, index) => (
                        <li key={index}>
                          <button 
                            onClick={() => setCurrentSection(index)}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center justify-between",
                              currentSection === index ? 
                                "bg-primary/10 text-primary font-medium" : 
                                "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                            )}
                          >
                            <span>{item.title}</span>
                            {item.hasSubitems && (
                              currentSection === index ? 
                                <ChevronUp className="w-4 h-4" /> : 
                                <ChevronDown className="w-4 h-4" />
                            )}
                          </button>
                          
                          {currentSection === index && item.hasSubitems && (
                            <ul className="mt-2 pl-4 space-y-2">
                              {item.subitems?.map((subitem, subIndex) => (
                                <li key={subIndex}>
                                  <button className="w-full text-left px-3 py-1.5 rounded-lg text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                                    {subitem}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Related Concepts */}
                <div className="dashboard-card p-4">
                  <h3 className="font-semibold mb-3">Related Concepts</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {relatedConcepts.map((concept, index) => (
                      <a 
                        key={index}
                        href="#"
                        className="px-3 py-1.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {concept}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Resources */}
                <div className="dashboard-card p-4">
                  <h3 className="font-semibold mb-3">Additional Resources</h3>
                  
                  <div className="space-y-2">
                    {resources.map((resource, index) => (
                      <a 
                        key={index}
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                      >
                        <resource.icon className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                          {resource.title}
                        </span>
                        <ExternalLink className="w-3 h-3 text-gray-400" />
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Notes */}
                <div className="dashboard-card p-4">
                  <h3 className="font-semibold mb-3">Your Notes</h3>
                  
                  <textarea 
                    className="w-full p-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent resize-none"
                    placeholder="Take notes as you learn..."
                    rows={4}
                  ></textarea>
                  
                  <div className="flex justify-between mt-2">
                    <button className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300">
                      Clear
                    </button>
                    <button className="text-xs text-primary hover:text-primary/80 flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Share in discussion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

// Sample data
const outlineItems = [
  {
    title: "Introduction to Custom Hooks",
    hasSubitems: false
  },
  {
    title: "Understanding the Power of Custom Hooks",
    hasSubitems: true,
    subitems: [
      "Creating a Window Size Hook",
      "Using the Hook in Components"
    ]
  },
  {
    title: "Advanced Pattern: Combining Multiple Hooks",
    hasSubitems: true,
    subitems: [
      "Data Fetching with Hooks",
      "Managing Complex State"
    ]
  },
  {
    title: "Custom Hook Best Practices",
    hasSubitems: true,
    subitems: [
      "Naming Conventions",
      "Testing Custom Hooks",
      "Performance Considerations"
    ]
  },
  {
    title: "Real-World Examples",
    hasSubitems: false
  },
  {
    title: "Exercises and Challenges",
    hasSubitems: false
  }
];

const relatedConcepts = [
  "useEffect",
  "useState",
  "useContext",
  "useCallback",
  "useMemo",
  "useReducer",
  "Hook Rules",
  "React Lifecycle",
  "Effect Cleanup"
];

const resources = [
  {
    title: "React Hooks Documentation",
    url: "https://reactjs.org/docs/hooks-intro.html",
    icon: ExternalLink
  },
  {
    title: "Custom Hooks Design Patterns",
    url: "#",
    icon: ExternalLink
  },
  {
    title: "Video: Advanced Hook Strategies",
    url: "#",
    icon: ExternalLink
  },
  {
    title: "GitHub: Hook Examples Repository",
    url: "#",
    icon: ExternalLink
  }
];

export default LearningContent;


import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { BarChart4, BookOpen, Map, TrendingUp } from "lucide-react";

const Career = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="section-heading">Career Development</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="dashboard-card p-6 lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-2 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Map className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h2 className="text-xl font-semibold">Career Path Explorer</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Explore potential career paths based on your current skill set and interests.
            </p>
            
            <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Interactive career path visualization coming soon</span>
            </div>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-sm mb-1">Frontend Architect</h3>
                <div className="flex items-center text-xs text-green-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span>High demand</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">94% skill match</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-sm mb-1">Full Stack Developer</h3>
                <div className="flex items-center text-xs text-green-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span>High demand</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">87% skill match</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium text-sm mb-1">DevOps Engineer</h3>
                <div className="flex items-center text-xs text-yellow-500">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  <span>Medium demand</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">62% skill match</p>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card p-6">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
                <BarChart4 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-xl font-semibold">Skill Gap Analysis</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Identify skills you need to develop to reach your career goals.
            </p>
            
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>React</span>
                  <span>Advanced</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Node.js</span>
                  <span>Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '60%' }}></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>DevOps</span>
                  <span>Beginner</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </div>
              
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span>Cloud Architecture</span>
                  <span>Beginner</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }}></div>
                </div>
              </div>
            </div>
            
            <button className="mt-4 w-full py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm">
              View personalized learning plan
            </button>
          </div>
          
          <div className="dashboard-card p-6 lg:col-span-3">
            <div className="flex items-center mb-4">
              <div className="mr-3 p-2 rounded-full bg-green-100 dark:bg-green-900/30">
                <BookOpen className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-xl font-semibold">Recommended Certifications</h2>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Industry-recognized certifications to boost your career profile.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium mb-2">AWS Certified Developer</h3>
                <p className="text-sm text-gray-500 mb-3">Validate your skills in developing and maintaining AWS-based applications.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">High impact</span>
                  <button className="text-xs text-primary hover:underline">Learn more</button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium mb-2">React Advanced Certification</h3>
                <p className="text-sm text-gray-500 mb-3">Master advanced React patterns and performance optimization techniques.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">Recommended</span>
                  <button className="text-xs text-primary hover:underline">Learn more</button>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700">
                <h3 className="font-medium mb-2">TypeScript Professional</h3>
                <p className="text-sm text-gray-500 mb-3">Demonstrate expertise in TypeScript and advanced type system features.</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Skill alignment</span>
                  <button className="text-xs text-primary hover:underline">Learn more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Career;

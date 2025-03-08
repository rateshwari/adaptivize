
import DashboardLayout from "@/components/dashboard/DashboardLayout";

const Community = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="section-heading">Community Hub</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="dashboard-card p-6">
            <h2 className="text-xl font-semibold mb-4">Skill Affinity Map</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with peers based on shared skills and interests. Explore the community clusters to find your learning tribe.
            </p>
            <div className="h-48 bg-gray-100 dark:bg-gray-700 rounded-lg mt-4 flex items-center justify-center">
              <span className="text-gray-500 dark:text-gray-400">Community map visualization coming soon</span>
            </div>
          </div>
          
          <div className="dashboard-card p-6">
            <h2 className="text-xl font-semibold mb-4">Mentor Matching</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Find mentors with expertise in your areas of interest. Get personalized guidance on your learning journey.
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mr-3">
                  <span className="font-semibold">JS</span>
                </div>
                <div>
                  <h3 className="font-medium">Jennifer Smith</h3>
                  <p className="text-sm text-gray-500">React, TypeScript Expert • 95% match</p>
                </div>
              </div>
              <div className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent mr-3">
                  <span className="font-semibold">MB</span>
                </div>
                <div>
                  <h3 className="font-medium">Michael Brown</h3>
                  <p className="text-sm text-gray-500">Backend Developer • 82% match</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card p-6 lg:col-span-2">
            <h2 className="text-xl font-semibold mb-4">Discussion Threads</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Join conversations on trending topics and contribute your insights.
            </p>
            <div className="space-y-4">
              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">React Server Components - Worth learning?</h3>
                  <span className="text-xs text-gray-500">32 replies</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  With the latest React updates, are server components the future of React development?
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20"></div>
                    <div className="w-6 h-6 rounded-full bg-accent/20"></div>
                    <div className="w-6 h-6 rounded-full bg-indigo-200"></div>
                  </div>
                  <button className="text-xs text-primary hover:text-primary/80">Join discussion</button>
                </div>
              </div>
              
              <div className="p-4 border border-gray-100 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="font-medium">TypeScript best practices in 2025</h3>
                  <span className="text-xs text-gray-500">18 replies</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  What TypeScript patterns are you finding most effective in modern development?
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-green-200"></div>
                    <div className="w-6 h-6 rounded-full bg-blue-200"></div>
                    <div className="w-6 h-6 rounded-full bg-purple-200"></div>
                  </div>
                  <button className="text-xs text-primary hover:text-primary/80">Join discussion</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;

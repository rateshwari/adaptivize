
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Community = () => {
  // Mock data for the skill clusters
  const skillClusters = [
    { id: 1, name: "Frontend", color: "bg-blue-100 dark:bg-blue-900", textColor: "text-blue-700 dark:text-blue-300", count: 87, skills: ["React", "Vue", "Angular"] },
    { id: 2, name: "Backend", color: "bg-green-100 dark:bg-green-900", textColor: "text-green-700 dark:text-green-300", count: 64, skills: ["Node.js", "Python", "Java"] },
    { id: 3, name: "DevOps", color: "bg-purple-100 dark:bg-purple-900", textColor: "text-purple-700 dark:text-purple-300", count: 42, skills: ["Docker", "Kubernetes", "CI/CD"] },
    { id: 4, name: "Data Science", color: "bg-yellow-100 dark:bg-yellow-900", textColor: "text-yellow-700 dark:text-yellow-300", count: 35, skills: ["Python", "R", "TensorFlow"] },
    { id: 5, name: "Mobile", color: "bg-red-100 dark:bg-red-900", textColor: "text-red-700 dark:text-red-300", count: 29, skills: ["React Native", "Flutter", "Swift"] },
  ];

  // Mock data for community members
  const communityMembers = [
    { id: 1, name: "Jennifer Smith", initials: "JS", role: "React, TypeScript Expert", match: 95, bg: "bg-primary/20", text: "text-primary" },
    { id: 2, name: "Michael Brown", initials: "MB", role: "Backend Developer", match: 82, bg: "bg-accent/20", text: "text-accent" },
    { id: 3, name: "Alex Wong", initials: "AW", role: "Mobile Developer", match: 78, bg: "bg-indigo-200", text: "text-indigo-700" },
    { id: 4, name: "Sarah Johnson", initials: "SJ", role: "UI/UX Designer", match: 65, bg: "bg-green-200", text: "text-green-700" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <h1 className="section-heading">Community Hub</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Skill Affinity Map</CardTitle>
              <CardDescription>
                Connect with peers based on shared skills and interests. Explore the community clusters to find your learning tribe.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 mb-6">
                {skillClusters.map((cluster) => (
                  <div 
                    key={cluster.id} 
                    className={`relative rounded-lg p-4 ${cluster.color} shadow-sm transition-all hover:shadow-md cursor-pointer flex-1 min-w-[140px]`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-medium ${cluster.textColor}`}>{cluster.name}</h3>
                      <Badge variant="outline">{cluster.count}</Badge>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {cluster.skills.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                      ))}
                    </div>
                    <div className="flex -space-x-2 mt-3">
                      {Array(3).fill(0).map((_, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-white/30 dark:bg-gray-700/30 border border-white/50 dark:border-gray-600/50"></div>
                      ))}
                      {cluster.count > 3 && (
                        <div className="w-6 h-6 rounded-full bg-white/80 dark:bg-gray-700/80 flex items-center justify-center text-xs">
                          +{cluster.count - 3}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full" variant="outline">View Full Community Map</Button>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Mentor Matching</CardTitle>
              <CardDescription>
                Find mentors with expertise in your areas of interest. Get personalized guidance on your learning journey.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {communityMembers.map((member) => (
                <div key={member.id} className="flex items-center p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <Avatar className={`${member.bg} h-10 w-10 mr-3 ${member.text}`}>
                    <div className="font-semibold">{member.initials}</div>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.role} • {member.match}% match</p>
                  </div>
                  <Button variant="ghost" size="sm">Connect</Button>
                </div>
              ))}
              <Button className="w-full mt-2" variant="outline">Find More Mentors</Button>
            </CardContent>
          </Card>
          
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Discussion Threads</CardTitle>
              <CardDescription>
                Join conversations on trending topics and contribute your insights.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                    <Button size="sm" variant="link" className="text-primary hover:text-primary/80">Join discussion</Button>
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
                    <Button size="sm" variant="link" className="text-primary hover:text-primary/80">Join discussion</Button>
                  </div>
                </div>
                
                <Button className="w-full" variant="default">Start a new discussion</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Community;


import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, BookOpen, Code, Cpu, Zap, Trophy } from "lucide-react";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div>
                <h1 className="text-3xl font-bold">Achievements</h1>
                <p className="text-gray-500 mt-1">Track your progress and unlock rewards</p>
              </div>
              <div className="px-4 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg flex items-center">
                <Trophy className="h-6 w-6 text-amber-500 mr-3" />
                <div>
                  <div className="text-sm font-semibold">Your Level: Advanced Learner</div>
                  <div className="text-xs text-gray-500">1250 XP • Next level: 1500 XP</div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="badges" className="space-y-6">
              <TabsList className="grid grid-cols-3 max-w-md">
                <TabsTrigger value="badges">Badges</TabsTrigger>
                <TabsTrigger value="certificates">Certificates</TabsTrigger>
                <TabsTrigger value="stats">Statistics</TabsTrigger>
              </TabsList>

              <TabsContent value="badges" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {badges.map((badge, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border flex items-start ${
                        badge.unlocked 
                          ? "bg-white dark:bg-gray-800" 
                          : "bg-gray-100 dark:bg-gray-800/50 opacity-70"
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-md flex items-center justify-center mr-4 ${
                        badge.unlocked ? badge.color : "bg-gray-200 dark:bg-gray-700"
                      }`}>
                        {badge.unlocked ? (
                          <badge.icon className="w-6 h-6 text-white" />
                        ) : (
                          <Award className="w-6 h-6 text-gray-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{badge.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{badge.description}</p>
                        {badge.unlocked ? (
                          <Badge variant="outline" className="bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-900">
                            Unlocked
                          </Badge>
                        ) : (
                          <div className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span>Progress</span>
                              <span>{badge.progress}%</span>
                            </div>
                            <Progress value={badge.progress} className="h-1.5" />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certificates" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {certificates.map((cert, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-white dark:bg-gray-800 flex items-center">
                      <div className={`w-12 h-12 rounded-md ${cert.color} flex items-center justify-center mr-4`}>
                        <cert.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{cert.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                      </div>
                      <button className="text-primary hover:underline text-sm">
                        Download
                      </button>
                    </div>
                  ))}
                </div>

                <div className="p-6 border rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 text-center">
                  <h3 className="font-medium text-lg mb-2">Complete more courses to earn certificates</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-lg mx-auto">
                    Earn recognized certificates by completing full learning paths and demonstrating your knowledge.
                  </p>
                  <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
                    Explore Courses
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="stats" className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="p-4 rounded-lg border bg-white dark:bg-gray-800">
                      <div className="flex items-center space-x-2 mb-2">
                        <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
                        <span className="text-sm text-gray-500">{stat.label}</span>
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className={`text-xs ${stat.changeColor} mt-1 flex items-center`}>
                        {stat.change > 0 ? '↑' : '↓'} {Math.abs(stat.change)}% from last month
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg border bg-white dark:bg-gray-800">
                    <h3 className="font-medium mb-4">Learning Activity</h3>
                    <div className="h-48 flex items-center justify-center">
                      <p className="text-gray-500">Activity chart will be displayed here</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-lg border bg-white dark:bg-gray-800">
                    <h3 className="font-medium mb-4">Skill Distribution</h3>
                    <div className="h-48 flex items-center justify-center">
                      <p className="text-gray-500">Skill chart will be displayed here</p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  );
};

// Sample data
const badges = [
  {
    name: "Fast Learner",
    description: "Completed 5 courses in under 30 days",
    unlocked: true,
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    icon: Zap,
    progress: 100
  },
  {
    name: "Code Warrior",
    description: "Submitted 20 coding exercises successfully",
    unlocked: true,
    color: "bg-gradient-to-br from-amber-500 to-amber-700",
    icon: Code,
    progress: 100
  },
  {
    name: "Team Player",
    description: "Participated in 3 group projects",
    unlocked: false,
    color: "",
    icon: Award,
    progress: 67
  },
  {
    name: "Knowledge Seeker",
    description: "Read 50 articles in the learning library",
    unlocked: false,
    color: "",
    icon: Award,
    progress: 42
  },
  {
    name: "Tech Pioneer",
    description: "Completed the advanced technology track",
    unlocked: true,
    color: "bg-gradient-to-br from-purple-500 to-purple-700",
    icon: Cpu,
    progress: 100
  },
  {
    name: "Master of Concepts",
    description: "Passed all concept quizzes with >90% score",
    unlocked: false,
    color: "",
    icon: Award,
    progress: 85
  }
];

const certificates = [
  {
    name: "Front-End Web Development",
    date: "Issued on May 15, 2023",
    color: "bg-gradient-to-br from-blue-500 to-blue-700",
    icon: Code
  },
  {
    name: "React Framework Mastery",
    date: "Issued on August 3, 2023",
    color: "bg-gradient-to-br from-cyan-500 to-cyan-700",
    icon: BookOpen
  }
];

const stats = [
  {
    label: "Courses Completed",
    value: "12",
    change: 25,
    changeColor: "text-green-500",
    icon: BookOpen,
    iconColor: "text-blue-500"
  },
  {
    label: "Learning Hours",
    value: "87",
    change: 12,
    changeColor: "text-green-500",
    icon: Code,
    iconColor: "text-purple-500"
  },
  {
    label: "Badges Earned",
    value: "8",
    change: 0,
    changeColor: "text-gray-500",
    icon: Award,
    iconColor: "text-amber-500"
  },
  {
    label: "Current Streak",
    value: "7 days",
    change: -3,
    changeColor: "text-red-500",
    icon: Zap,
    iconColor: "text-green-500"
  }
];

export default Achievements;

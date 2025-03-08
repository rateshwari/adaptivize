
import { BarChart, BarChart4, TrendingUp, ArrowUpRight } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const IndustryInsights = () => {
  const skillDemandData = [
    { name: 'React', value: 35 },
    { name: 'Node.js', value: 25 },
    { name: 'TypeScript', value: 20 },
    { name: 'Python', value: 15 },
    { name: 'Other', value: 5 },
  ];
  
  const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#6B7280'];
  
  const insightsList = [
    {
      title: 'React Demand',
      trend: 'up',
      value: '+12%',
      description: 'Increase in demand for React developers this quarter'
    },
    {
      title: 'TypeScript Adoption',
      trend: 'up',
      value: '+24%',
      description: 'Growth in TypeScript usage among frontend developers'
    },
    {
      title: 'Backend Experience',
      trend: 'up',
      value: '+8%',
      description: 'More companies requiring full-stack experience'
    }
  ];

  return (
    <div className="dashboard-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="mr-3 p-2 rounded-full bg-indigo-100 dark:bg-indigo-900/30">
              <BarChart4 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="section-heading">Industry Insights</h3>
          </div>
          
          <a href="/career" className="text-xs text-primary flex items-center hover:underline">
            More insights
            <ArrowUpRight className="w-3 h-3 ml-1" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h4 className="font-medium text-sm text-gray-600 dark:text-gray-300">Top Skills in Demand</h4>
            
            <div className="h-[180px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={skillDemandData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {skillDemandData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Demand']}
                    contentStyle={{ 
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: 'none',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                </ResponsiveContainer>
              </div>
              
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {skillDemandData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center text-xs">
                    <span 
                      className="inline-block w-3 h-3 rounded-full mr-1"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    ></span>
                    {entry.name}
                  </div>
                ))}
              </div>
            </div>
          
          <div>
            <h4 className="font-medium text-sm text-gray-600 dark:text-gray-300 mb-4">Market Trends</h4>
            
            <div className="space-y-3">
              {insightsList.map((insight, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-lg bg-white/70 dark:bg-gray-800/70 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="font-medium text-sm">{insight.title}</h5>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs font-medium text-green-500">{insight.value}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{insight.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 text-center">
              <button className="text-xs px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                Align your skills with market trends
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryInsights;

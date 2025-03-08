
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Filter } from 'lucide-react';

interface Skill {
  id: number;
  name: string;
  level: number;
  category: string;
  x: number;
  y: number;
  size: number;
  color: string;
}

const SkillVisualization = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [filters, setFilters] = useState<string[]>([]);
  const [availableFilters] = useState(['Frontend', 'Backend', 'DevOps', 'Data Science']);

  // Generate mock skill data
  useEffect(() => {
    const categories = ['Frontend', 'Backend', 'DevOps', 'Data Science'];
    const colors = [
      'from-blue-400 to-blue-600', 
      'from-green-400 to-green-600', 
      'from-yellow-400 to-yellow-600', 
      'from-purple-400 to-purple-600'
    ];
    
    const mockSkills: Skill[] = [
      { id: 1, name: 'React', level: 85, category: 'Frontend', x: 0, y: 0, size: 0, color: colors[0] },
      { id: 2, name: 'TypeScript', level: 80, category: 'Frontend', x: 0, y: 0, size: 0, color: colors[0] },
      { id: 3, name: 'CSS/Tailwind', level: 90, category: 'Frontend', x: 0, y: 0, size: 0, color: colors[0] },
      { id: 4, name: 'Node.js', level: 75, category: 'Backend', x: 0, y: 0, size: 0, color: colors[1] },
      { id: 5, name: 'Express', level: 70, category: 'Backend', x: 0, y: 0, size: 0, color: colors[1] },
      { id: 6, name: 'MongoDB', level: 65, category: 'Backend', x: 0, y: 0, size: 0, color: colors[1] },
      { id: 7, name: 'Docker', level: 60, category: 'DevOps', x: 0, y: 0, size: 0, color: colors[2] },
      { id: 8, name: 'AWS', level: 55, category: 'DevOps', x: 0, y: 0, size: 0, color: colors[2] },
      { id: 9, name: 'Python', level: 70, category: 'Data Science', x: 0, y: 0, size: 0, color: colors[3] },
      { id: 10, name: 'Machine Learning', level: 50, category: 'Data Science', x: 0, y: 0, size: 0, color: colors[3] },
    ];
    
    // Position skills randomly around a center point
    if (containerRef.current) {
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      
      mockSkills.forEach((skill) => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = 50 + Math.random() * 120;
        skill.x = centerX + Math.cos(angle) * distance;
        skill.y = centerY + Math.sin(angle) * distance;
        skill.size = 30 + (skill.level / 10);
      });
    }
    
    setSkills(mockSkills);
  }, []);

  // Reposition skills when container size changes
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && skills.length) {
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        const centerX = width / 2;
        const centerY = height / 2;
        
        setSkills(skills.map(skill => {
          const angle = Math.random() * 2 * Math.PI;
          const distance = 50 + Math.random() * 120;
          return {
            ...skill,
            x: centerX + Math.cos(angle) * distance,
            y: centerY + Math.sin(angle) * distance
          };
        }));
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [skills]);

  const toggleFilter = (category: string) => {
    if (filters.includes(category)) {
      setFilters(filters.filter(f => f !== category));
    } else {
      setFilters([...filters, category]);
    }
  };

  const getFilteredSkills = () => {
    if (filters.length === 0) return skills;
    return skills.filter(skill => filters.includes(skill.category));
  };

  return (
    <div className="dashboard-card overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="section-heading">Your Skill Landscape</h3>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <div className="flex space-x-1">
              {availableFilters.map(category => (
                <button
                  key={category}
                  onClick={() => toggleFilter(category)}
                  className={`text-xs px-2 py-1 rounded-full transition-colors ${
                    filters.includes(category)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div 
          ref={containerRef} 
          className="relative h-[300px] bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-noise-pattern"></div>
          
          {/* Central hub */}
          <div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent opacity-20 animate-pulse-slow"
          ></div>
          <div 
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-medium"
          >
            YOU
          </div>
          
          {/* Skill nodes */}
          {getFilteredSkills().map((skill) => (
            <div 
              key={skill.id}
              className="skill-node cursor-pointer bg-gradient-to-br hover:shadow-lg"
              style={{
                left: `${skill.x}px`,
                top: `${skill.y}px`,
                width: `${skill.size}px`,
                height: `${skill.size}px`,
                background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                '--tw-gradient-from': skill.color.split(' ')[0].replace('from-', ''),
                '--tw-gradient-to': skill.color.split(' ')[1].replace('to-', ''),
                transform: `translate(-50%, -50%) scale(${hoveredSkill?.id === skill.id ? 1.2 : 1})`,
                zIndex: hoveredSkill?.id === skill.id ? 10 : 1,
              }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {hoveredSkill?.id === skill.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-2 whitespace-nowrap z-20">
                  <p className="font-medium text-sm">{skill.name}</p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 rounded-full mt-1 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {/* Connectors between central hub and skills */}
          {getFilteredSkills().map((skill) => {
            const centerX = containerRef.current ? containerRef.current.clientWidth / 2 : 0;
            const centerY = containerRef.current ? containerRef.current.clientHeight / 2 : 0;
            
            const dx = skill.x - centerX;
            const dy = skill.y - centerY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const angle = Math.atan2(dy, dx) * (180 / Math.PI);
            
            return (
              <div 
                key={`connector-${skill.id}`}
                className="skill-connector"
                style={{
                  left: `${centerX}px`,
                  top: `${centerY}px`,
                  width: `${distance}px`,
                  transform: `rotate(${angle}deg)`,
                  opacity: hoveredSkill ? (hoveredSkill.id === skill.id ? 0.8 : 0.2) : 0.4
                }}
              ></div>
            );
          })}
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="text-xs">
              <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
              Frontend
            </div>
            <div className="text-xs">
              <span className="inline-block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
              Backend
            </div>
            <div className="text-xs">
              <span className="inline-block w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
              DevOps
            </div>
            <div className="text-xs">
              <span className="inline-block w-3 h-3 rounded-full bg-purple-500 mr-1"></span>
              Data Science
            </div>
          </div>
          
          <a href="#" className="text-xs text-primary flex items-center hover:underline">
            Full Skill Analysis
            <ArrowUpRight className="w-3 h-3 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SkillVisualization;


import DashboardLayout from '@/components/dashboard/DashboardLayout';
import WelcomeSection from '@/components/dashboard/WelcomeSection';
import SkillVisualization from '@/components/dashboard/SkillVisualization';
import LearningPathTimeline from '@/components/dashboard/LearningPathTimeline';
import QuickActions from '@/components/dashboard/QuickActions';
import CommunityPulse from '@/components/dashboard/CommunityPulse';
import IndustryInsights from '@/components/dashboard/IndustryInsights';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 animate-fade-in">
        <WelcomeSection />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <SkillVisualization />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
        
        <LearningPathTimeline />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CommunityPulse />
          <IndustryInsights />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

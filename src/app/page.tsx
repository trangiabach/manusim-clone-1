import Header from '@/components/sections/header';
import HeroSection from '@/components/sections/hero';
import TaskInput from '@/components/sections/task-input';
import OutputTypes from '@/components/sections/output-types';
import UseCasesSection from '@/components/sections/use-cases';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="flex flex-col items-center">
        <HeroSection />
        <div className="w-full max-w-[768px] px-4">
          <TaskInput />
          <OutputTypes />
        </div>
        <UseCasesSection />
      </main>
    </div>
  );
}
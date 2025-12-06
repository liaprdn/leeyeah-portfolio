import Header from './components/Header';
import Hero from './components/Hero';
import ProjectHighlights from './components/ProjectHighlights';
import SkillsTools from './components/SkillsTools';
import ResumeContact from './components/ResumeContact';
import FadeIn from './components/FadeIn';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Kamu panggil di sini layaknya tag HTML biasa */}
      <Header />
      <FadeIn>
        <Hero />
      </FadeIn>
      <div className="w-full h-[1px] bg-mustard opacity-30 mx-auto max-w-7xl"></div>
      <FadeIn delay={0.2}>
        <ProjectHighlights />
      </FadeIn>
      <div className="w-full h-[1px] bg-mustard opacity-30 mx-auto max-w-7xl"></div>
      <FadeIn>
      <SkillsTools />
      </FadeIn>
      <div className="w-full h-[1px] bg-mustard opacity-30 mx-auto max-w-7xl"></div>
      <FadeIn>
        <ResumeContact /> 
      </FadeIn>
    </main>
  );
}
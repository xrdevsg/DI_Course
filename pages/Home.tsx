import React from 'react';
import { courses, shiftComparison, approachComparison } from '../data';
import CourseCard from '../components/CourseCard';
import ComparisonTable from '../components/ComparisonTable';
import { ArrowDown, ArrowRight, Cpu, Sparkles, Users, Zap } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-brand-dark to-brand-dark"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-brand-accent mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-brand-accent rounded-full mr-2 animate-pulse"></span>
            Brand Brief v1.0
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tight mb-6 leading-tight">
            DESIGNING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">INTELLIGENCE</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-400 font-light mb-12">
            Your ideas. <span className="text-white font-medium">AI Unlocked.</span>
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a href="#courses" className="px-8 py-4 bg-white text-brand-dark font-bold rounded-full hover:bg-gray-100 transition-colors">
              View Courses
            </a>
            <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
              The AI landscape has fundamentally changed. This isn't automation. This is augmentation.
            </p>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-600">
          <ArrowDown size={24} />
        </div>
      </section>

      {/* The Shift Section */}
      <section className="py-24 bg-brand-dark relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">THE SHIFT</h2>
                <p className="text-xl text-gray-400">Why AI Changes Everything. The reality: AI won't replace you. But someone who knows AI might.</p>
            </div>
            
            <ComparisonTable 
              title="Then (2024) vs Now (2026)"
              subtitle="We have moved from novelty to core infrastructure."
              leftHeader="Then (2024)"
              rightHeader="Now (2026)"
              rows={shiftComparison}
              highlightRight={true}
            />
        </div>
      </section>

       {/* The Problem & Solution Grid */}
       <section className="py-24 bg-brand-gray border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">What's Broken in AI Learning?</h2>
              <div className="space-y-6">
                 {[
                    { title: "Theory-heavy", desc: "Lectures about AI, not doing AI." },
                    { title: "Tool-specific", desc: "Learn ChatGPT until next update makes it obsolete." },
                    { title: "Passive", desc: "Watch demos, follow along, forget next week." },
                    { title: "No outcome", desc: "Walk out with notes, not with something real." }
                 ].map((item, i) => (
                    <div key={i} className="flex items-start">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 mr-4">✕</div>
                        <div>
                            <h4 className="text-white font-bold">{item.title}</h4>
                            <p className="text-gray-400 text-sm">{item.desc}</p>
                        </div>
                    </div>
                 ))}
              </div>
            </div>
            
            <div className="bg-brand-dark p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-8">The Designing Intelligence Difference</h3>
                <div className="grid grid-cols-1 gap-4">
                    {approachComparison.map((row, i) => (
                        <div key={i} className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0">
                             <span className="text-gray-500 text-sm w-1/3">{row.left}</span>
                             <div className="flex-1 flex items-center">
                                <ArrowRight size={14} className="text-brand-accent mx-2" />
                             </div>
                             <span className="text-white font-medium text-right w-1/2">{row.right}</span>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course List */}
      <section id="courses" className="py-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">The Curriculum</h2>
            <p className="text-xl text-gray-400">Four tracks. One goal: AI Mastery.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto / Audience */}
      <section className="py-24 bg-brand-dark border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-16">Who is this for?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Sparkles className="text-yellow-400 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">Gen Z</h3>
                    <p className="text-gray-400 text-sm">"Stop watching AI tutorials. Start building with AI."</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Users className="text-blue-400 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">Professionals</h3>
                    <p className="text-gray-400 text-sm">"AI fluency isn't optional anymore. It's your competitive edge."</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Cpu className="text-purple-400 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">Corporate</h3>
                    <p className="text-gray-400 text-sm">"Upskill your team with practical AI capabilities — not just awareness."</p>
                </div>
                <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                    <Zap className="text-green-400 mb-4" size={32} />
                    <h3 className="text-xl font-bold text-white mb-2">Beginners</h3>
                    <p className="text-gray-400 text-sm">"No coding. No tech background. Just your ideas — and AI to unlock them."</p>
                </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-2xl font-bold text-white mb-4">DESIGNING <span className="text-brand-accent">INTELLIGENCE</span></p>
            <p className="text-gray-500">© 2026 MAGES Institute of Excellence. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
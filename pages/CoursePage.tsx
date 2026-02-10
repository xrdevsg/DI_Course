import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, Clock, Wrench, Briefcase, User, PlayCircle, BarChart, Code, Layers } from 'lucide-react';
import { courses } from '../data';

const CoursePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-dark text-white">
        <h1 className="text-4xl font-bold mb-4">Course Not Found</h1>
        <Link to="/" className="text-brand-accent hover:underline">Return Home</Link>
      </div>
    );
  }

  // Helper to choose icon based on course number (cosmetic)
  const getIcon = () => {
    switch (course.number) {
        case '01': return <BarChart className="w-12 h-12 text-blue-400" />;
        case '02': return <PlayCircle className="w-12 h-12 text-pink-400" />;
        case '03': return <Code className="w-12 h-12 text-teal-400" />;
        case '04': return <Layers className="w-12 h-12 text-orange-400" />;
        default: return <Wrench className="w-12 h-12" />;
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark pt-16">
      {/* Hero Header */}
      <div className="relative bg-brand-gray border-b border-white/5 overflow-hidden">
         <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l ${course.color} opacity-10 blur-3xl`}></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Courses
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
                <div className="max-w-3xl">
                    <span className={`inline-block px-3 py-1 mb-4 text-sm font-bold tracking-wider uppercase rounded-full bg-white/5 border border-white/10 text-brand-accent`}>
                        Course #{course.number}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight">{course.title}</h1>
                    <p className="text-2xl text-gray-300 font-light mb-8">{course.tagline}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg">
                            <Clock size={16} className="mr-2 text-brand-accent" />
                            {course.duration}
                        </div>
                        <div className="flex items-center bg-white/5 px-4 py-2 rounded-lg">
                            <Wrench size={16} className="mr-2 text-brand-accent" />
                            {course.tools.join(', ')}
                        </div>
                    </div>
                </div>
                <div className="hidden md:block">
                    {getIcon()}
                </div>
            </div>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-16">
                
                {/* Intro / Why Now */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-4">Why This Course?</h2>
                    <p className="text-gray-300 text-lg leading-relaxed">
                        {course.whyNow ? (
                            <><span className="text-brand-accent font-semibold">{course.whyNow}</span> <br/></>
                        ) : null}
                        {course.shortDescription}
                    </p>
                </section>

                {/* Target Audience */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">This is for you if:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {course.targetAudience.map((item, idx) => (
                            <div key={idx} className="flex items-start p-4 bg-white/5 rounded-lg border border-white/5">
                                <CheckCircle size={20} className="text-brand-accent mr-3 mt-1 flex-shrink-0" />
                                <span className="text-gray-300">{item}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* The Journey */}
                <section className="relative pl-8 border-l border-white/10 space-y-8">
                     <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-brand-accent ring-4 ring-brand-dark"></div>
                     <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{course.journey.title}</h2>
                        <p className="text-gray-400 mb-6">{course.journey.description}</p>
                        <div className="space-y-4">
                            {course.journey.steps.map((step, i) => (
                                <div key={i} className="flex items-center text-gray-200">
                                    <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs mr-4 font-mono">{i + 1}</span>
                                    {step}
                                </div>
                            ))}
                        </div>
                     </div>
                </section>

                {/* Outcomes */}
                <section className="bg-gradient-to-br from-brand-gray to-black p-8 rounded-2xl border border-white/10">
                    <h2 className="text-2xl font-bold text-white mb-6">You'll Walk Away With</h2>
                    <ul className="space-y-4">
                        {course.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start">
                                <span className="text-brand-accent mr-3 font-bold">✓</span>
                                <span className="text-gray-200 text-lg">{outcome}</span>
                            </li>
                        ))}
                    </ul>
                </section>

            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                    <div className="bg-white p-6 rounded-2xl shadow-xl text-brand-dark">
                        <h3 className="text-xl font-bold mb-6 border-b border-gray-200 pb-4">Who Buys This?</h3>
                        
                        <div className="space-y-6">
                            <div>
                                <div className="flex items-center font-bold text-brand-accent mb-2">
                                    <User size={18} className="mr-2" /> For Individuals
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {course.forWho.individuals}
                                </p>
                            </div>
                            
                            <div>
                                <div className="flex items-center font-bold text-brand-accent mb-2">
                                    <Briefcase size={18} className="mr-2" /> For Teams
                                </div>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    {course.forWho.teams}
                                </p>
                            </div>
                        </div>

                        <button className="w-full mt-8 bg-black text-white py-3 px-4 rounded-lg font-bold hover:bg-gray-800 transition-colors flex items-center justify-center">
                            Enroll Now <ArrowRight size={16} className="ml-2" />
                        </button>
                    </div>

                    <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
                        <h4 className="text-white font-bold mb-4">Tools You'll Master</h4>
                        <div className="flex flex-wrap gap-2">
                            {course.tools.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/5">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default CoursePage;
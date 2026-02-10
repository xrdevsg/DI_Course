import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-br from-brand-accent/20 to-purple-500/20 p-2 rounded-xl border border-white/10 group-hover:border-brand-accent/50 transition-colors">
                <BrainCircuit className="text-brand-accent" size={24} />
              </div>
              <span className="text-lg font-bold tracking-tighter text-white hidden sm:block">
                DESIGNING <span className="text-brand-accent">INTELLIGENCE</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isHome ? 'text-white' : 'text-gray-400 hover:text-white'}`}>Home</Link>
              <Link to="/course/business-ai-toolkit" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Business AI</Link>
              <Link to="/course/multimodal-content" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Multimodal</Link>
              <Link to="/course/ai-agent-workflows" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Agentic Workflows</Link>
              <Link to="/course/design-to-prototype" className="text-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Prototype</Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <Link to="/" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
             <Link to="/course/business-ai-toolkit" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Business AI</Link>
             <Link to="/course/multimodal-content" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Multimodal</Link>
             <Link to="/course/ai-agent-workflows" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Agentic Workflows</Link>
             <Link to="/course/design-to-prototype" onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Prototype</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
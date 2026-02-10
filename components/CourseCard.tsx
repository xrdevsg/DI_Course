import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { Course } from '../types';

interface Props {
  course: Course;
}

const CourseCard: React.FC<Props> = ({ course }) => {
  return (
    <Link to={`/course/${course.id}`} className="group block h-full">
      <div className="relative h-full bg-brand-gray border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-brand-accent/10 hover:-translate-y-1 overflow-hidden">
        {/* Gradient Blob for effect */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${course.color} opacity-20 blur-3xl rounded-full group-hover:opacity-30 transition-opacity`} />
        
        <div className="flex justify-between items-start mb-6">
            <span className={`inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-full bg-white/5 border border-white/10 text-white`}>
                Course #{course.number}
            </span>
            <div className="flex items-center text-gray-400 text-xs">
                <Clock size={14} className="mr-1" />
                {course.duration}
            </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-brand-accent transition-colors">{course.title}</h3>
        <p className="text-sm text-brand-accent mb-4 font-medium">{course.tagline}</p>
        
        <p className="text-gray-400 mb-8 flex-grow leading-relaxed">
          {course.shortDescription}
        </p>

        <div className="flex items-center text-sm font-medium text-white mt-auto group-hover:translate-x-1 transition-transform">
          Explore Course <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
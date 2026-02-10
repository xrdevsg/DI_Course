import React from 'react';
import { ComparisonRow } from '../types';

interface Props {
  title: string;
  subtitle: string;
  leftHeader: string;
  rightHeader: string;
  rows: ComparisonRow[];
  highlightRight?: boolean;
}

const ComparisonTable: React.FC<Props> = ({ title, subtitle, leftHeader, rightHeader, rows, highlightRight = false }) => {
  return (
    <div className="py-12 bg-brand-gray/30 rounded-2xl border border-white/5 overflow-hidden">
      <div className="px-6 mb-8 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
      </div>
      
      <div className="overflow-x-auto px-4 md:px-8">
        <div className="min-w-[600px]">
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-sm font-semibold uppercase tracking-wider text-gray-500">
            <div className="col-span-2"></div>
            <div className="col-span-5 text-left pl-4">{leftHeader}</div>
            <div className={`col-span-5 text-left pl-4 ${highlightRight ? 'text-brand-accent' : ''}`}>{rightHeader}</div>
          </div>
          
          <div className="space-y-4 pt-4">
            {rows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-12 gap-4 items-center group hover:bg-white/5 p-3 rounded-lg transition-colors">
                <div className="col-span-2 text-xs md:text-sm font-medium text-gray-500 uppercase">{row.label}</div>
                <div className="col-span-5 text-gray-400 pl-4 border-l border-white/5">{row.left}</div>
                <div className={`col-span-5 pl-4 border-l border-white/5 font-medium ${highlightRight ? 'text-white' : 'text-gray-200'}`}>
                  {row.right}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
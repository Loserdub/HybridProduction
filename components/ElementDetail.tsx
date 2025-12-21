
import React from 'react';
import { ElementData } from '../types';

interface ElementDetailProps {
  element: ElementData | null;
}

const DetailRow: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="flex justify-between py-2 border-b border-gray-700">
    <span className="text-gray-400">{label}</span>
    <span className="font-medium text-right">{value ?? 'N/A'}</span>
  </div>
);

export const ElementDetail: React.FC<ElementDetailProps> = ({ element }) => {
  if (!element) {
    return (
      <div className="h-full min-h-[400px] flex items-center justify-center p-6 bg-gray-800/50 rounded-lg shadow-xl animate-fade-in">
        <p className="text-gray-400 text-center">Select an element to see its details.</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-800/50 rounded-lg shadow-xl animate-fade-in sticky top-8">
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">{element.name} ({element.symbol})</h2>
        <p className="text-lg text-gray-400 capitalize">{element.category}</p>
      </div>
      
      <div className="space-y-2 text-sm">
        <DetailRow label="Atomic Number" value={element.number} />
        <DetailRow label="Atomic Mass" value={`${element.atomic_mass.toFixed(4)} u`} />
        <DetailRow label="Phase (at STP)" value={element.phase} />
        <DetailRow label="Density" value={element.density ? `${element.density} g/L` : 'N/A'} />
        <DetailRow label="Melting Point" value={element.melt ? `${element.melt} K` : 'N/A'} />
        <DetailRow label="Boiling Point" value={element.boil ? `${element.boil} K` : 'N/A'} />
        <DetailRow label="Discovered By" value={element.discovered_by} />
      </div>

      <p className="mt-4 text-sm text-gray-400 leading-relaxed">{element.summary}</p>
    </div>
  );
};

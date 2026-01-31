
import React, { useState, useCallback } from 'react';
import { PeriodicTable } from './components/PeriodicTable';
import { ElementDetail } from './components/ElementDetail';
import { ElementData } from './types';
import { playTone } from './services/audioService';

const App: React.FC = () => {
  const [selectedElement, setSelectedElement] = useState<ElementData | null>(null);

  const handleElementClick = useCallback((element: ElementData) => {
    setSelectedElement(element);
    // Formula to map atomic number to a musical frequency on a logarithmic scale
    // Base frequency of 80Hz, doubles every 24 elements (2 octaves)
    const frequency = 80 * Math.pow(2, element.number / 24);
    playTone(frequency);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-6">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          The Sonic Periodic Table
        </h1>
        <p className="text-gray-400 mt-2">Click an element to see its details and hear its resonant tone.</p>
      </div>

      <main className="flex flex-col lg:flex-row gap-6 max-w-screen-2xl mx-auto">
        <div className="flex-grow">
          <PeriodicTable onElementClick={handleElementClick} selectedElementNumber={selectedElement?.number ?? null} />
        </div>
        <div className="lg:w-80 lg:flex-shrink-0">
          <ElementDetail element={selectedElement} />
        </div>
      </main>
      <footer className="text-center text-gray-500 mt-8 text-sm">
        <p>Tones generated using the Web Audio API. Frequency based on atomic number.</p>
        <p className="mt-2">
          Made with ❤️ by{' '}
          <a 
            href="https://jray.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            jray.me
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;

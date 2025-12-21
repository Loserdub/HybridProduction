
import React from 'react';
import { ElementData } from '../types';
import { elements } from '../data/elements';
import { ElementTile } from './ElementTile';

interface PeriodicTableProps {
  onElementClick: (element: ElementData) => void;
  selectedElementNumber: number | null;
}

export const PeriodicTable: React.FC<PeriodicTableProps> = ({ onElementClick, selectedElementNumber }) => {
  return (
    <div className="bg-gray-800/50 rounded-lg shadow-2xl p-2 sm:p-4 overflow-x-auto">
      <div className="grid grid-cols-18 gap-1" style={{ gridTemplateRows: 'repeat(10, minmax(0, 1fr))', minWidth: '1100px' }}>
        {elements.map((element) => (
          <ElementTile
            key={element.number}
            element={element}
            onClick={onElementClick}
            isSelected={selectedElementNumber === element.number}
          />
        ))}
        <div className="col-start-3 row-start-6 flex items-center justify-center text-xs text-center text-gray-400 p-1">57-71</div>
        <div className="col-start-3 row-start-7 flex items-center justify-center text-xs text-center text-gray-400 p-1">89-103</div>
      </div>
    </div>
  );
};

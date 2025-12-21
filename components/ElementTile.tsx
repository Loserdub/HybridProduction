
import React from 'react';
import { ElementData } from '../types';

interface ElementTileProps {
  element: ElementData;
  onClick: (element: ElementData) => void;
  isSelected: boolean;
}

const categoryColorMap: { [key: string]: string } = {
  'diatomic nonmetal': 'bg-diatomic-nonmetal/70 hover:bg-diatomic-nonmetal/90 text-blue-900',
  'polyatomic nonmetal': 'bg-polyatomic-nonmetal/70 hover:bg-polyatomic-nonmetal/90 text-blue-900',
  'noble gas': 'bg-noble-gas/70 hover:bg-noble-gas/90 text-purple-900',
  'alkali metal': 'bg-alkali-metal/70 hover:bg-alkali-metal/90 text-pink-900',
  'alkaline earth metal': 'bg-alkaline-earth-metal/70 hover:bg-alkaline-earth-metal/90 text-yellow-900',
  'metalloid': 'bg-metalloid/70 hover:bg-metalloid/90 text-green-900',
  'post-transition metal': 'bg-post-transition-metal/70 hover:bg-post-transition-metal/90 text-indigo-900',
  'transition metal': 'bg-transition-metal/70 hover:bg-transition-metal/90 text-cyan-900',
  'lanthanide': 'bg-lanthanide/70 hover:bg-lanthanide/90 text-red-900',
  'actinide': 'bg-actinide/70 hover:bg-actinide/90 text-orange-900',
  'unknown, probably transition metal': 'bg-unknown/70 hover:bg-unknown/90 text-gray-800',
  'unknown, probably post-transition metal': 'bg-unknown/70 hover:bg-unknown/90 text-gray-800',
  'unknown, probably metalloid': 'bg-unknown/70 hover:bg-unknown/90 text-gray-800',
  'unknown, predicted to be noble gas': 'bg-unknown/70 hover:bg-unknown/90 text-gray-800',
  'unknown, but predicted to be an alkali metal': 'bg-unknown/70 hover:bg-unknown/90 text-gray-800',
};


export const ElementTile: React.FC<ElementTileProps> = ({ element, onClick, isSelected }) => {
  const colorClasses = categoryColorMap[element.category] || 'bg-gray-500/70 hover:bg-gray-500/90 text-gray-900';

  const style = {
    gridColumnStart: element.xpos,
    gridRowStart: element.ypos,
  };

  const selectedClasses = isSelected ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-white' : '';

  return (
    <div
      style={style}
      className={`p-1 sm:p-2 rounded-md cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110 hover:z-10 relative ${colorClasses} ${selectedClasses}`}
      onClick={() => onClick(element)}
    >
      <div className="text-xs font-medium text-left opacity-80">{element.number}</div>
      <div className="text-xl sm:text-2xl font-bold text-center">{element.symbol}</div>
      <div className="text-xs text-center truncate">{element.name}</div>
    </div>
  );
};

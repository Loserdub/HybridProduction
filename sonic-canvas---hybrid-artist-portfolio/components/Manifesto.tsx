import React from 'react';

const Manifesto: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-black/40 backdrop-blur-sm min-h-[60vh] flex items-center animate-fade-in-up">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-sm font-bold tracking-[0.3em] text-purple-400 mb-6 uppercase">Manifesto</h2>
        <p className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight text-white/90">
          "We are not defined by a single sound. We are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-bold">convergence</span> of noise, melody, and silence. From the raw energy of <span className="italic">loserdub</span> to the ethereal plains of <span className="italic">le vide</span>, the canvas is infinite."
        </p>
        <div className="mt-12 h-1 w-24 bg-white/20 mx-auto rounded-full"></div>
      </div>
    </section>
  );
};

export default Manifesto;
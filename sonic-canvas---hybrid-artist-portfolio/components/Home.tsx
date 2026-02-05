import React from 'react';
import SoundCloudPlayer from './SoundCloudPlayer';

const Home: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20">
      <div className="text-center z-10 space-y-4 max-w-5xl animate-fade-in-up">
        <h1 className="text-6xl sm:text-8xl md:text-9xl font-display font-bold text-white leading-none tracking-tighter mix-blend-overlay opacity-90">
          SONIC<br/>CANVAS
        </h1>
        <p className="text-lg sm:text-2xl font-light text-white/60 tracking-[0.2em] uppercase max-w-2xl mx-auto">
          A Multi-Project Auditory Experience
        </p>
      </div>

      {/* SoundCloud Embed Widget Area */}
      <div className="w-full z-20 animate-fade-in-up mt-8" style={{ animationDelay: '0.2s' }}>
         <SoundCloudPlayer />
      </div>

      <div className="absolute bottom-10 animate-bounce">
        <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll to Explore</p>
      </div>
    </section>
  );
};

export default Home;
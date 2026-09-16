import React from 'react';
import { ArrowUp, BookOpen, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-stone-900 text-stone-300 pt-16 pb-12 overflow-hidden border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Closing Message Required by Prompt */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-stone-900 to-blue-950/60 border border-stone-800 p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-lg">
          <span className="inline-block rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300 border border-emerald-500/30 mb-4">
            Final Academic Synthesis
          </span>
          <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif text-white leading-relaxed">
            &ldquo;Medellín is a diverse and dynamic city where culture, education, environment, economy and healthcare contribute to its identity and development.&rdquo;
          </blockquote>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-stone-400 font-medium">
            <span>English Course Academic Portfolio</span>
            <span>•</span>
            <span>Medellín, Colombia</span>
          </div>
        </div>

        {/* Middle Footer Navigation & Details */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white font-serif font-bold">
              M
            </div>
            <div>
              <p className="text-sm font-bold text-white tracking-wide">
                Exploring Medellín: Culture, Education and Environment
              </p>
              <p className="text-xs text-stone-400">
                Created by David Garcia, Yesica Lopez, Angie Villarreal, Catalina Portillo, and Natalia Ayala
              </p>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-stone-400">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#culture" className="hover:text-white transition-colors">Culture</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#environment" className="hover:text-white transition-colors">Environment</a>
            <a href="#economy" className="hover:text-white transition-colors">Economy</a>
            <a href="#healthcare" className="hover:text-white transition-colors">Healthcare</a>
            <a href="#references" className="hover:text-white transition-colors">References</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
          </div>

          {/* Back to top button */}
          <button
            id="btn-back-to-top-footer"
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 hover:text-white px-4 py-2.5 text-xs font-semibold border border-stone-700 transition-all shadow-xs"
            aria-label="Back to top of the page"
          >
            <span>Back to top</span>
            <ArrowUp className="h-4 w-4 text-emerald-400" />
          </button>
        </div>

        {/* Bottom copyright / disclaimer */}
        <div className="mt-8 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 text-center sm:text-left">
          <p>
            Educational non-commercial academic portfolio. All rights reserved by respective institutional authors and copyright holders.
          </p>
          <p className="flex items-center gap-1">
            <span>Academic English Activity</span>
            <span>•</span>
            <span>Antioquia, Colombia</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

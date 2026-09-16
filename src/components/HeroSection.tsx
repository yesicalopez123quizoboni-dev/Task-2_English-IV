import React, { useState } from 'react';
import { Sparkles, GraduationCap, Mountain, ArrowDown, MapPin, Award, Briefcase, HeartPulse } from 'lucide-react';
import medellinHeroImage from '../assets/images/medellin_panoramic_1789579271098.jpg';

export const HeroSection: React.FC = () => {
  const [heroImageSrc, setHeroImageSrc] = useState<string>(medellinHeroImage);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleImageError = () => {
    // Fallback to high-reliability Wikimedia Commons panoramic view of Medellín
    const fallback = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Medellin%2C_Colombia_%2848777174626%29.jpg/1600px-Medellin%2C_Colombia_%2848777174626%29.jpg';
    if (heroImageSrc !== fallback) {
      setHeroImageSrc(fallback);
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 sm:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Academic Header Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-1 text-xs font-semibold text-emerald-800 shadow-2xs">
            <Award className="h-3.5 w-3.5 text-emerald-600" />
            <span>English Academic Portfolio Project • Colombia</span>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs text-stone-500 font-medium">
            <MapPin className="h-3.5 w-3.5 text-emerald-600" />
            <span>Department of Antioquia, Colombia</span>
          </div>
        </div>

        {/* Hero Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.15] font-display">
            Exploring Medellín: <span className="text-emerald-800">Culture, Education</span> and <span className="text-amber-700">Environment</span>
          </h1>
          <p className="mt-4 sm:mt-5 text-lg sm:text-xl font-medium text-stone-600 leading-relaxed max-w-3xl">
            Discovering the identity, transformation and natural richness of Medellín
          </p>
        </div>

        {/* Big Cover Image */}
        <div className="mt-8 sm:mt-10 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-stone-200/80 shadow-md bg-stone-900 group">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-stone-950">
            {!imageLoaded && (
              <div className="absolute inset-0 bg-stone-900 animate-pulse flex items-center justify-center text-stone-500 text-xs">
                Loading panoramic view...
              </div>
            )}
            <img
              src={heroImageSrc}
              alt="Panoramic view of Medellín nestled in the Aburrá Valley surrounded by green mountains"
              className={`h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-103 ${
                imageLoaded ? 'opacity-95' : 'opacity-0'
              }`}
              loading="eager"
              referrerPolicy="no-referrer"
              onLoad={() => setImageLoaded(true)}
              onError={handleImageError}
            />
            {/* Soft overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-900/30 to-transparent pointer-events-none" />
            
            {/* Caption on image */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white pointer-events-none">
              <span className="inline-block px-2.5 py-1 mb-2 text-[11px] font-bold uppercase tracking-wider bg-emerald-700/90 text-emerald-50 rounded-md backdrop-blur-xs">
                City of Eternal Spring
              </span>
              <p className="text-sm sm:text-base text-stone-200 max-w-2xl font-normal drop-shadow-xs">
                Medellín sits in the picturesque Aburrá Valley of the Andes mountains, standing as a global beacon of urban transformation, academic excellence, economic dynamism, and biodiversity.
              </p>
            </div>
          </div>
        </div>

        {/* Introductory Text Box */}
        <div className="mt-8 rounded-2xl bg-white border border-stone-200/90 p-6 sm:p-8 shadow-xs">
          <div className="max-w-3xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-2 font-sans">
              Introduction
            </h2>
            <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-normal">
              <strong>Medellín, known as the &ldquo;City of the Eternal Spring,&rdquo;</strong> is one of Colombia&rsquo;s most dynamic cities. It is a place where tradition, education, nature, innovation, economic vigor, and healthcare excellence come together. This portfolio explores important aspects of Medellín&rsquo;s culture, education, environment, economy, and healthcare.
            </p>
          </div>
        </div>

        {/* Five Introductory Thematic Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {/* Card 1: Culture */}
          <div
            id="intro-card-culture"
            onClick={() => scrollToSection('culture')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/60 to-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-xs">
                  <Sparkles className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                  Section 1
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-800 transition-colors font-display">
                Culture
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Tradition, resilience, art and modernity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-emerald-100 flex items-center justify-between text-xs font-semibold text-emerald-800">
              <span className="truncate">David Garcia</span>
              <span className="group-hover:translate-x-0.5 transition-transform shrink-0">Explore →</span>
            </div>
          </div>

          {/* Card 2: Education */}
          <div
            id="intro-card-education"
            onClick={() => scrollToSection('education')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50/60 to-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-amber-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-700 text-white shadow-xs">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-semibold text-amber-900 bg-amber-100/80 px-2 py-0.5 rounded-full">
                  Section 2
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors font-display">
                Education
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Education as a tool for social transformation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-100 flex items-center justify-between text-xs font-semibold text-amber-900">
              <span className="truncate">Yesica Lopez</span>
              <span className="group-hover:translate-x-0.5 transition-transform shrink-0">Explore →</span>
            </div>
          </div>

          {/* Card 3: Environment */}
          <div
            id="intro-card-environment"
            onClick={() => scrollToSection('environment')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/60 to-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white shadow-xs">
                  <Mountain className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-semibold text-teal-900 bg-teal-100/80 px-2 py-0.5 rounded-full">
                  Section 3
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-teal-800 transition-colors font-display">
                Environment
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Forests, hills, ecoparks and biodiversity.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-teal-100 flex items-center justify-between text-xs font-semibold text-teal-900">
              <span className="truncate">Angie Villarreal</span>
              <span className="group-hover:translate-x-0.5 transition-transform shrink-0">Explore →</span>
            </div>
          </div>

          {/* Card 4: Economy */}
          <div
            id="intro-card-economy"
            onClick={() => scrollToSection('economy')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-200/80 bg-gradient-to-br from-blue-50/60 to-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-blue-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-700 text-white shadow-xs">
                  <Briefcase className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-semibold text-blue-900 bg-blue-100/80 px-2 py-0.5 rounded-full">
                  Section 4
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-blue-800 transition-colors font-display">
                Economy
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Commerce, technology, tourism and industry.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-100 flex items-center justify-between text-xs font-semibold text-blue-800">
              <span className="truncate">Catalina Portillo</span>
              <span className="group-hover:translate-x-0.5 transition-transform shrink-0">Explore →</span>
            </div>
          </div>

          {/* Card 5: Healthcare */}
          <div
            id="intro-card-healthcare"
            onClick={() => scrollToSection('healthcare')}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-teal-200/80 bg-gradient-to-br from-teal-50/60 to-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-teal-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-700 text-white shadow-xs">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <span className="text-[11px] font-semibold text-teal-900 bg-teal-100/80 px-2 py-0.5 rounded-full">
                  Section 5
                </span>
              </div>
              <h3 className="text-lg font-bold text-stone-900 group-hover:text-teal-800 transition-colors font-display">
                Healthcare
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Medical excellence, hospitals and Metrosalud.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-teal-100 flex items-center justify-between text-xs font-semibold text-teal-900">
              <span className="truncate">Natalia Ayala</span>
              <span className="group-hover:translate-x-0.5 transition-transform shrink-0">Explore →</span>
            </div>
          </div>
        </div>

        {/* Scroll down prompt */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => scrollToSection('culture')}
            className="inline-flex items-center gap-2 text-xs font-medium text-stone-500 hover:text-emerald-700 transition-colors py-2 px-3 rounded-full hover:bg-white"
          >
            <span>Scroll to explore sections</span>
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

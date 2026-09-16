import React from 'react';
import { ExternalLink, Utensils, Music, Flower2, Landmark, Sparkles, Shirt } from 'lucide-react';
import { TEAM_MEMBERS, CULTURE_IMAGES } from '../data/portfolioData';
import { AudioPlayerCard } from './AudioPlayerCard';
import { SafeImage } from './SafeImage';

export const CultureSection: React.FC = () => {
  const davidMember = TEAM_MEMBERS.find((m) => m.id === 'david')!;

  return (
    <section id="culture" className="py-16 sm:py-20 border-t border-stone-200/80 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-emerald-100/90 text-emerald-800 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Section 1 • Academic Contributor: David Garcia</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            Culture in Medellín: Tradition, Resilience, and Modernity
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
            Researched and presented by <strong className="text-stone-800">David Garcia</strong> for the English Academic Portfolio.
          </p>
        </div>

        {/* Audio Presentation Card for David Garcia */}
        <div className="mt-6">
          <AudioPlayerCard member={davidMember} accentColor="emerald" />
        </div>

        {/* Main Content Introduction */}
        <div className="mt-8 rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            Medellín, known as the <strong>&ldquo;City of the Eternal Spring,&rdquo;</strong> has a vibrant cultural identity. It combines deep-rooted Antioquian traditions with continuous reinvention through art, innovation, and the resilience of its people. The basis of Medellín&rsquo;s identity comes from Paisa culture, which is known for the warmth, hospitality, and entrepreneurial spirit of its inhabitants. This heritage can be seen in everyday life:
          </p>
        </div>

        {/* Everyday Heritage: Gastronomy & Folklore */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Gastronomy Card */}
          <div className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <Utensils className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">Gastronomy</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Iconic dishes like the <em className="text-stone-800 font-medium">bandeja paisa</em>, corn <em className="text-stone-800 font-medium">arepas</em>, and traditional beans, which are the center of family gatherings.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-amber-900 font-medium bg-amber-50/70 p-2.5 rounded-lg">
              <span>Culinary Pillar: Family warmth and nourishing agrarian roots.</span>
            </div>
          </div>

          {/* Folklore and Music Card */}
          <div className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                  <Music className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-stone-900 font-display">Folklore and music</h3>
              </div>
              <p className="text-stone-600 leading-relaxed text-sm sm:text-base">
                Traditional styles like <strong>trova paisa</strong> (improvised poetic duels) and tango, a music genre that became very popular in the city after the tragic death of the icon Carlos Gardel in Antioquia.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-emerald-900 font-medium bg-emerald-50/70 p-2.5 rounded-lg">
              <span>Musical Identity: Poetic wit and Gardelian tango nostalgia.</span>
            </div>
          </div>
        </div>

        {/* Cultural Expressions */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-2 w-2 rounded-full bg-emerald-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">Cultural expressions</h3>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mb-6">
            Among the most important cultural expressions that represent Medellín to the world are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Feria de las Flores */}
            <div className="rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-3 text-rose-700">
                <div className="h-10 w-10 rounded-xl bg-rose-50 border border-rose-200/80 flex items-center justify-center">
                  <Flower2 className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">Feria de las Flores</h4>
              </div>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                This is the city&rsquo;s most famous celebration, held every August. Its main event is the <strong>Silleteros Parade</strong>, where farmers from the rural area of Santa Elena carry massive, artistic floral arrangements on their backs. This tradition is a true national cultural heritage.
              </p>
            </div>

            {/* Architecture and public spaces */}
            <div className="rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-3 text-emerald-700">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center justify-center">
                  <Landmark className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">Architecture and public spaces</h4>
              </div>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Places like <strong>Plaza Botero</strong> &mdash; which displays massive sculptures by the famous artist Fernando Botero &mdash; and <strong>Pueblito Paisa</strong> represent the combination of art and local history.
              </p>
            </div>
          </div>
        </div>

        {/* Medellín's Transformation */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-amber-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">Medellín&rsquo;s transformation</h3>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mb-6">
            Over the past few decades, Medellín has shown a unique ability to turn difficult times into opportunities for art and community:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Transformation of the Comunas */}
            <div className="rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-3 text-amber-700">
                <div className="h-10 w-10 rounded-xl bg-amber-50 border border-amber-200/80 flex items-center justify-center">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">Transformation of the Comunas</h4>
              </div>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Areas like <strong>Comuna 13</strong> have become global examples of cultural tourism thanks to urban art, graffiti, hip-hop, and outdoor electric stairs, which tell inspiring stories of overcoming adversity and hope.
              </p>
            </div>

            {/* A hub for fashion and creativity */}
            <div className="rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-7 shadow-xs">
              <div className="flex items-center gap-3 mb-3 text-indigo-700">
                <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-200/80 flex items-center justify-center">
                  <Shirt className="h-5 w-5" />
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">A hub for fashion and creativity</h4>
              </div>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                The city hosts international events like <em className="text-stone-800 font-medium">Colombiamoda</em>, establishing itself as an important center for design, textiles, and modern trends in Latin America.
              </p>
            </div>
          </div>
        </div>

        {/* Culture Section Gallery */}
        <div className="mt-12">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 font-sans">
            Visual Documentation: Culture & Heritage
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {CULTURE_IMAGES.map((img, idx) => (
              <SafeImage key={idx} image={img} />
            ))}
          </div>
          {/* External resources links list */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <span className="font-semibold text-stone-700">Supplied Resources:</span>
            <a
              href="https://share.google/uropzeAxhgQ0IshkM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-700 hover:underline"
            >
              <span>Google Resource 1</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span>•</span>
            <a
              href="https://www.instagram.com/p/DMEISoUTr8V/?utm_source=ig_web_button_share_sheet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-700 hover:underline"
            >
              <span>Instagram Resource (Comuna 13)</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Source Button Requirement */}
        <div className="mt-10 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-stone-500 font-medium">
            Primary academic source for Culture in Medellín: Colombia.co official repository.
          </div>
          <a
            id="btn-read-source-culture"
            href="https://colombia.co/medellin-arte-innovacion-cultura-paisa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2.5 text-sm font-semibold shadow-xs transition-colors"
          >
            <span>Read the source</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

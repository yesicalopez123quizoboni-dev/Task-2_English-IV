import React from 'react';
import { ExternalLink, Trees, Mountain, ShieldCheck, HelpCircle, MessageSquareQuote } from 'lucide-react';
import { TEAM_MEMBERS, ENVIRONMENT_IMAGES } from '../data/portfolioData';
import { AudioPlayerCard } from './AudioPlayerCard';
import { SafeImage } from './SafeImage';

export const EnvironmentSection: React.FC = () => {
  const angieMember = TEAM_MEMBERS.find((m) => m.id === 'angie')!;

  return (
    <section id="environment" className="py-16 sm:py-20 border-t border-stone-200/80 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-teal-100/90 text-teal-900 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Section 3 • Academic Contributor: Angie Villarreal</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            Environment: Medellín
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
            Researched and presented by <strong className="text-stone-800">Angie Villarreal</strong> for the English Academic Portfolio.
          </p>
        </div>

        {/* Audio Presentation Card for Angie Villarreal */}
        <div className="mt-6">
          <AudioPlayerCard member={angieMember} accentColor="teal" />
        </div>

        {/* Main Content Paragraph 1: Forests, Ecoparks and Streams */}
        <div className="mt-8 rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
              <Trees className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              Ecosystems, Stream Ecoparks &amp; Citizen Action
            </h3>
          </div>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            Medellín has a rich and diverse natural environment. The city has large forest areas, water streams and a great variety of flora. For this reason, the city works to protect its ecosystems, manage forests sustainably, prevent biodiversity loss and promote ecological restoration. It also encourages citizens to develop good environmental practices and contribute to a more sustainable city. One important environmental strategy is the creation and protection of green spaces. Medellín has 35 ecoparks with streams and areas for planting trees. These places provide spaces for ecological trails, ecotourism, sports, recreation and cultural activities.
          </p>
        </div>

        {/* Main Content Paragraph 2: 20 Tutelar Hills */}
        <div className="mt-8 rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Mountain className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              The 20 Tutelar Hills (Cerros Tutelares)
            </h3>
          </div>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            Another important part of Medellín&rsquo;s environment is its 20 tutelar hills. These hills are important for the city&rsquo;s green connectivity because they provide ecosystem services such as water regulation, climate regulation, soil protection and biodiversity conservation. They are also natural viewpoints and places for recreation, sports and environmental education.
          </p>
        </div>

        {/* Main Content Paragraph 3: Protected Areas and Natural Reserves */}
        <div className="mt-8 rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              Protected Areas and Natural Reserves
            </h3>
          </div>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            The city also has protected areas and natural reserves. According to the Medellín Environmental Secretariat, the city has <strong>2,738.5 hectares of acquired and recovered forests</strong>. These forests protect water basins and are important for maintaining different forms of life. The city has <strong>13 natural reserves</strong>, where environmental monitoring, native species planting and ecological education activities are carried out.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
            <div className="rounded-xl bg-stone-50 p-4 border border-stone-200/70">
              <span className="text-2xl font-bold text-teal-800 font-display block">35</span>
              <span className="text-xs font-semibold text-stone-600">Stream Ecoparks with trails &amp; tree-planting</span>
            </div>
            <div className="rounded-xl bg-stone-50 p-4 border border-stone-200/70">
              <span className="text-2xl font-bold text-teal-800 font-display block">20</span>
              <span className="text-xs font-semibold text-stone-600">Tutelar Hills providing ecological connectivity</span>
            </div>
            <div className="rounded-xl bg-stone-50 p-4 border border-stone-200/70">
              <span className="text-2xl font-bold text-teal-800 font-display block">2,738.5 ha</span>
              <span className="text-xs font-semibold text-stone-600">Recovered forests across 13 natural reserves</span>
            </div>
          </div>
        </div>

        {/* Interesting Fact & Personal Opinion Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Interesting Fact Box */}
          <div className="rounded-2xl bg-amber-50/80 border border-amber-200/90 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2.5 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="h-4 w-4 text-amber-700" />
              <span>Interesting fact</span>
            </div>
            <p className="text-stone-800 text-base leading-relaxed">
              An interesting fact is that Medellín has <strong>20 tutelar hills</strong> and they are not only natural spaces. They also help regulate water and climate, protect the soil and conserve biodiversity.
            </p>
          </div>

          {/* Personal Opinion Box */}
          <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200/90 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2.5 text-emerald-900 text-xs font-bold uppercase tracking-wider mb-3">
              <MessageSquareQuote className="h-4 w-4 text-emerald-700" />
              <span>Personal opinion</span>
            </div>
            <p className="text-stone-800 text-base leading-relaxed italic font-serif">
              &ldquo;In my opinion, protecting Medellín&rsquo;s natural environment is very important. Forests, hills, ecoparks and natural reserves provide important benefits for the city. I think that protecting these spaces and promoting good environmental practices can help Medellín become a more sustainable city.&rdquo;
            </p>
            <span className="block text-right text-xs font-semibold text-emerald-800 mt-3 font-sans not-italic">
              &mdash; Angie Villarreal
            </span>
          </div>
        </div>

        {/* Environment Images Gallery */}
        <div className="mt-12">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 font-sans">
            Visual Documentation: Natural Reserves &amp; Hills
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ENVIRONMENT_IMAGES.map((img, idx) => (
              <SafeImage key={idx} image={img} />
            ))}
          </div>

          {/* Supplied Google Share links */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <span className="font-semibold text-stone-700">Supplied Resources:</span>
            <a
              href="https://share.google/1J1PioR40ychDXMAD"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-800 hover:underline"
            >
              <span>Tutelar Hills Resource</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span>•</span>
            <a
              href="https://share.google/a2jnGYdaHEXm40tG4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-teal-800 hover:underline"
            >
              <span>Forest Reserves &amp; Ecoparks</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Bibliographic Reference & Button */}
        <div className="mt-10 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-stone-700">
            <span className="font-bold text-stone-900 font-serif">Medellín biodiversa</span>. (2021, septiembre 15). Alcaldía de Medellín.
          </div>
          <a
            id="btn-source-alcaldia"
            href="https://www.medellin.gov.co/es/secretaria-medio-ambiente/medellin-biodiversa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 text-sm font-semibold shadow-xs transition-colors shrink-0"
          >
            <span>Source: Alcaldía de Medellín</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

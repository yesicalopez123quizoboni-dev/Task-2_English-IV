import React from 'react';
import { ShoppingBag, Laptop, Compass, Factory, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS, ECONOMY_IMAGES } from '../data/portfolioData';
import { AudioPlayerCard } from './AudioPlayerCard';
import { SafeImage } from './SafeImage';

export const EconomySection: React.FC = () => {
  const catalinaMember = TEAM_MEMBERS.find((m) => m.id === 'catalina')!;

  return (
    <section id="economy" className="py-16 sm:py-20 border-t border-stone-200/80 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-blue-100/90 text-blue-900 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Section 4 • Academic Contributor: Catalina Portillo</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            The Economy of Medellín
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
            Researched and presented by <strong className="text-stone-800">Catalina Portillo</strong> for the English Academic Portfolio.
          </p>
        </div>

        {/* Audio Presentation Card for Catalina Portillo */}
        <div className="mt-6">
          <AudioPlayerCard member={catalinaMember} accentColor="blue" />
        </div>

        {/* Main Presentation Article Box */}
        <div className="mt-8 rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="border-b border-stone-200/70 pb-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-800 font-sans">
              Oral &amp; Written Academic Presentation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display mt-1">
              The economy of Medellín, one of the most important cities in Colombia
            </h3>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              Medellín has a strong and growing economy and the city is known for business, technology, tourism, commerce, and industry.
            </p>
            <p>
              Commerce is an important part of the economy because Medellín has many stores, shopping centers, restaurants, and small businesses, and these businesses create jobs for many people.
            </p>
            <p>
              Technology is also very important in Medellín because the city has many companies and young people who work in technology and innovation, and Medellín is becoming an important technology center in Colombia.
            </p>
            <p>
              Tourism is another important part of the economy because many people visit Medellín because of its weather, attractions, restaurants, and beautiful places. Tourism helps hotels, restaurants, transportation services, and local businesses.
            </p>
            <p>
              Medellín also has an important industrial sector, and the city has companies that produce clothes, food, medicines, and other products.
            </p>
          </div>

          {/* Student's Academic Conclusion */}
          <div className="mt-8 rounded-xl bg-blue-50/70 border border-blue-200/80 p-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-blue-900 mb-2">
              Conclusion
            </h4>
            <p className="text-stone-800 font-medium text-base sm:text-lg leading-relaxed">
              &ldquo;In conclusion, Medellín has a diverse economy with many opportunities, and commerce, technology, tourism, and industry are important for the development of the city.&rdquo;
            </p>
            <p className="mt-3 text-sm font-semibold text-blue-950">
              Thank you for reading.
            </p>
          </div>
        </div>

        {/* Four Main Economic Area Cards */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-blue-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
              Four Main Economic Areas
            </h3>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mb-6">
            Key sectors identified by Catalina Portillo driving sustainable employment and regional development:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Commerce Card */}
            <div
              id="economy-card-commerce"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Commerce shopping bag">🛍️</span>
                  <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <ShoppingBag className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Commerce
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Stores, shopping centers, restaurants and small businesses.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-blue-800">
                Job Creation &amp; Small Businesses
              </div>
            </div>

            {/* Technology Card */}
            <div
              id="economy-card-technology"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Technology laptop">💻</span>
                  <div className="h-8 w-8 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center">
                    <Laptop className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Technology
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Innovation, technology companies and young professionals.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-indigo-800">
                Innovation Center in Colombia
              </div>
            </div>

            {/* Tourism Card */}
            <div
              id="economy-card-tourism"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Tourism globe">🌎</span>
                  <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Compass className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Tourism
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Hotels, restaurants, transportation and tourist attractions.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-emerald-800">
                Climate &amp; Beautiful Destinations
              </div>
            </div>

            {/* Industry Card */}
            <div
              id="economy-card-industry"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-blue-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Industry factory">🏭</span>
                  <div className="h-8 w-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Factory className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Industry
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Clothing, food, medicines and other products.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-amber-800">
                Diverse Manufacturing Base
              </div>
            </div>
          </div>
        </div>

        {/* Visual Documentation: Economy Gallery */}
        <div className="mt-12">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 font-sans">
            Visual Documentation: Business, Technology &amp; Industry
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {ECONOMY_IMAGES.map((img, idx) => (
              <SafeImage key={idx} image={img} />
            ))}
          </div>
        </div>

        {/* Academic Note Footer */}
        <div className="mt-10 pt-6 border-t border-stone-200/80 flex items-center gap-3 text-xs text-stone-500">
          <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
          <span>
            Presentation documented and compiled by Catalina Portillo as part of the Medellín Academic English Portfolio.
          </span>
        </div>
      </div>
    </section>
  );
};

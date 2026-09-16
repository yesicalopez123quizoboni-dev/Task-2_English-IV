import React from 'react';
import { Hospital, Stethoscope, Heart, Globe2, Building2, Sparkles, CheckCircle2 } from 'lucide-react';
import { TEAM_MEMBERS, HEALTHCARE_IMAGES } from '../data/portfolioData';
import { AudioPlayerCard } from './AudioPlayerCard';
import { SafeImage } from './SafeImage';

export const HealthcareSection: React.FC = () => {
  const nataliaMember = TEAM_MEMBERS.find((m) => m.id === 'natalia')!;

  return (
    <section id="healthcare" className="py-16 sm:py-20 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-teal-100/90 text-teal-900 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Section 5 • Academic Contributor: Natalia Ayala</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            Healthcare System and Medical Excellence in Medellín
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
            Researched and presented by <strong className="text-stone-800">Natalia Ayala</strong> for the English Academic Portfolio.
          </p>
        </div>

        {/* Audio Presentation Card for Natalia Ayala */}
        <div className="mt-6">
          <AudioPlayerCard member={nataliaMember} accentColor="teal" />
        </div>

        {/* Main Presentation Article Box */}
        <div className="mt-8 rounded-2xl bg-stone-50/70 border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="border-b border-stone-200/80 pb-4 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-800 font-sans">
              Oral &amp; Written Academic Presentation
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display mt-1">
              Healthcare system and medical excellence in Medellín
            </h3>
          </div>

          <div className="space-y-4 text-base sm:text-lg text-stone-700 leading-relaxed">
            <p>
              In my opinion, Medellín has established itself as one of the most important medical hubs in Latin America.
            </p>
            <p>
              Over the last two decades, the city has developed a robust healthcare system that combines advanced medical technology, high-quality hospitals, and specialized professionals.
            </p>
            <p>
              Currently, several hospitals in Medellín&mdash;such as <strong>Hospital Pablo Tobón Uribe</strong> and <strong>Hospital San Vicente Fundación</strong>&mdash;rank among the best clinics in Latin America.
            </p>
            <p>
              These institutions provide specialized treatments in cardiology, oncology, and complex organ transplants.
            </p>
            <p>
              Furthermore, the municipal government has implemented public health programs to improve access to medical care in low-income communities through local health centers (<strong>Metrosalud</strong>).
            </p>
            <p>
              Additionally, Medellín has become a prominent destination for medical tourism. Many international patients travel to the city because the cost of medical procedures is significantly lower than in the United States or Europe, while international quality standards are maintained.
            </p>
          </div>

          {/* Fun Fact Highlight Box */}
          <div className="mt-8 rounded-xl bg-gradient-to-r from-teal-50 via-emerald-50/60 to-white border border-teal-200/80 p-6 shadow-2xs">
            <div className="flex items-start gap-3.5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-700 text-white shadow-xs">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-teal-100 text-teal-900 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider mb-2">
                  Fun Fact
                </span>
                <p className="text-stone-800 text-base sm:text-lg font-medium leading-relaxed">
                  <strong>Fun fact:</strong> An interesting detail about Medellín is that Colombia&rsquo;s first successful heart transplant was performed there in 1985 at the Somer / Cardiovid Clinic, positioning the city as a pioneer in cardiovascular surgery and complex transplants within the region.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Information Cards for the Five Healthcare Areas */}
        <div className="mt-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-teal-600" />
            <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
              Healthcare Pillars in Medellín
            </h3>
          </div>
          <p className="text-stone-600 text-sm sm:text-base mb-6">
            Core components of Medellín&rsquo;s medical ecosystem analyzed in Natalia Ayala&rsquo;s research:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Hospitals Card */}
            <div
              id="healthcare-card-hospitals"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Hospital building">🏥</span>
                  <div className="h-8 w-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Hospital className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Hospitals
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Specialized hospitals and healthcare institutions in Medellín.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-teal-800">
                Pablo Tobón Uribe &amp; San Vicente Fundación
              </div>
            </div>

            {/* Specialized Medicine Card */}
            <div
              id="healthcare-card-specialized"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Stethoscope medical care">🩺</span>
                  <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <Stethoscope className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Specialized Medicine
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Cardiology, oncology and complex organ transplants.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-emerald-800">
                Advanced Clinical Treatments
              </div>
            </div>

            {/* Medical Innovation Card */}
            <div
              id="healthcare-card-innovation"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Heart medical health">❤️</span>
                  <div className="h-8 w-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
                    <Heart className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Medical Innovation
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Medical technology and advanced healthcare services.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-rose-800">
                Cardiovascular Pioneering Since 1985
              </div>
            </div>

            {/* Medical Tourism Card */}
            <div
              id="healthcare-card-tourism"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Globe medical tourism">🌎</span>
                  <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Globe2 className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Medical Tourism
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  International patients traveling to Medellín for medical services.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-blue-800">
                Lower Costs with International Standards
              </div>
            </div>

            {/* Public Healthcare Card */}
            <div
              id="healthcare-card-public"
              className="rounded-2xl bg-white border border-stone-200/80 p-6 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-teal-300 transition-all duration-200 lg:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl" role="img" aria-label="Community neighborhood clinic">🏘️</span>
                  <div className="h-8 w-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center">
                    <Building2 className="h-4 w-4" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-stone-900 font-display">
                  Public Healthcare
                </h4>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  Programs and local health centers that improve access to healthcare in low-income communities through Metrosalud.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-stone-100 text-xs font-semibold text-teal-800">
                Equitable Public Health Across Neighborhoods
              </div>
            </div>
          </div>
        </div>

        {/* Visual Documentation: Healthcare Gallery */}
        <div className="mt-12">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 font-sans">
            Visual Documentation: Medical Infrastructure &amp; Clinical Excellence
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {HEALTHCARE_IMAGES.map((img, idx) => (
              <SafeImage key={idx} image={img} />
            ))}
          </div>
        </div>

        {/* Academic Note Footer */}
        <div className="mt-10 pt-6 border-t border-stone-200/80 flex items-center gap-3 text-xs text-stone-500">
          <CheckCircle2 className="h-4 w-4 text-teal-600 shrink-0" />
          <span>
            Presentation documented and compiled by Natalia Ayala as part of the Medellín Academic English Portfolio.
          </span>
        </div>
      </div>
    </section>
  );
};

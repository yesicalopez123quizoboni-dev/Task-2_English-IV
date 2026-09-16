import React from 'react';
import { ExternalLink, GraduationCap, Building2, TrendingDown, Award, BookOpenCheck } from 'lucide-react';
import { TEAM_MEMBERS, EDUCATION_IMAGES } from '../data/portfolioData';
import { AudioPlayerCard } from './AudioPlayerCard';
import { SafeImage } from './SafeImage';

export const EducationSection: React.FC = () => {
  const yesicaMember = TEAM_MEMBERS.find((m) => m.id === 'yesica')!;

  return (
    <section id="education" className="py-16 sm:py-20 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-amber-100/90 text-amber-900 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Section 2 • Academic Contributor: Yesica Lopez</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            Education in Medellín
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600 font-medium">
            Researched and presented by <strong className="text-stone-800">Yesica Lopez</strong> for the English Academic Portfolio.
          </p>
        </div>

        {/* Audio Presentation Card for Yesica Lopez */}
        <div className="mt-6">
          <AudioPlayerCard member={yesicaMember} accentColor="amber" />
        </div>

        {/* Main Content Paragraph 1: Academic System & Universities */}
        <div className="mt-8 rounded-2xl bg-stone-50 border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-amber-200 text-amber-950 flex items-center justify-center">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              A Dynamic Academic Hub
            </h3>
          </div>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            Medellín, the capital of the Antioquia department, has one of the most dynamic education systems in Colombia. The city is home to seven universities, which together offer more than 250 academic programs, including undergraduate degrees, master&rsquo;s programs, and doctorates. Some of the most recognized institutions are Universidad EAFIT, Universidad Pontificia Bolivariana, and the Tecnológico de Antioquia. In addition, Colombia&rsquo;s overall adult literacy rate has reached over 98%, and Medellín&rsquo;s Secretaría de Educación works closely with the national Ministry of Education to design local strategies that improve access and quality.
          </p>

          {/* Key Stat Badges */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-200">
            <div className="rounded-xl bg-white p-4 border border-stone-200/70 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-bold text-amber-800 font-display block">7</span>
              <span className="text-xs font-semibold text-stone-600">Major Universities (EAFIT, UPB, etc.)</span>
            </div>
            <div className="rounded-xl bg-white p-4 border border-stone-200/70 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-bold text-amber-800 font-display block">250+</span>
              <span className="text-xs font-semibold text-stone-600">Academic Undergraduate & Postgrad Programs</span>
            </div>
            <div className="rounded-xl bg-white p-4 border border-stone-200/70 shadow-2xs">
              <span className="text-2xl sm:text-3xl font-bold text-amber-800 font-display block">&gt; 98%</span>
              <span className="text-xs font-semibold text-stone-600">Adult Literacy Rate</span>
            </div>
          </div>
        </div>

        {/* Main Content Paragraph 2: Library Parks & Social Transformation */}
        <div className="mt-8 rounded-2xl bg-white border border-stone-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              Social Transformation through Library Parks
            </h3>
          </div>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            What makes Medellín&rsquo;s education story genuinely fascinating, though, is how the city used education as a tool for social transformation. In the early 2000s, Medellín was internationally known for extreme violence linked to drug trafficking. City leaders decided to fight this problem not only with security policies but with culture and education: they built a network of ten &ldquo;Library Parks&rdquo; (Parques Biblioteca), remarkable buildings that combine public libraries, classrooms, internet access, and auditoriums, and they placed them intentionally in the poorest and most dangerous neighborhoods, such as Santo Domingo. This was a bold and visionary decision.
          </p>
        </div>

        {/* Main Content Paragraph 3: Measurable Results & UNESCO Award */}
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-amber-50/70 to-emerald-50/50 border border-amber-200/80 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-xl bg-amber-600 text-white flex items-center justify-center">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-bold text-stone-900 font-display">
              Measurable Impact & Global Recognition
            </h3>
          </div>
          <p className="text-base sm:text-lg text-stone-700 leading-relaxed">
            Surprisingly, the results were measurable: studies have associated these library parks with an <strong>87% reduction in the city&rsquo;s homicide rate</strong> and with <strong>employment growth nearly 17% higher</strong> in the surrounding communities compared to areas without them. Because of this achievement, Medellín received <strong>UNESCO&rsquo;s Learning City Award in 2019</strong> and has been praised worldwide as a model of urban innovation through education.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 bg-white/90 p-4 rounded-xl border border-stone-200">
              <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <TrendingDown className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-emerald-800">-87% Homicides</span>
                <p className="text-xs text-stone-600">Documented reduction in homicide rate linked to Library Parks.</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/90 p-4 rounded-xl border border-stone-200">
              <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-amber-900">+17% Employment</span>
                <p className="text-xs text-stone-600">Higher employment growth in surrounding communities.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Conclusion Callout */}
        <div className="mt-8 rounded-2xl bg-stone-900 text-white p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <BookOpenCheck className="h-4 w-4" />
            <span>Conclusion</span>
          </div>
          <p className="text-lg sm:text-xl font-serif text-stone-100 leading-relaxed">
            &ldquo;Education in Medellín is not just about universities and literacy rates; it has become a powerful and inspiring instrument of peacebuilding and community development.&rdquo;
          </p>
        </div>

        {/* Education Images Gallery */}
        <div className="mt-12">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-4 font-sans">
            Visual Documentation: Education & Social Infrastructure
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {EDUCATION_IMAGES.map((img, idx) => (
              <SafeImage key={idx} image={img} />
            ))}
          </div>

          {/* Supplied Google Share links */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-stone-500">
            <span className="font-semibold text-stone-700">Supplied Resources:</span>
            <a
              href="https://share.google/IGuCT1MaElJJmrNsM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-800 hover:underline"
            >
              <span>Santo Domingo Resource</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span>•</span>
            <a
              href="https://share.google/8iA1TwuK2LpRmgy0t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-800 hover:underline"
            >
              <span>Library Parks Study</span>
              <ExternalLink className="h-3 w-3" />
            </a>
            <span>•</span>
            <a
              href="https://share.google/LQyg0oBtdjAv74BQA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-amber-800 hover:underline"
            >
              <span>Educational Innovation</span>
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        {/* Section Bibliographic References Area */}
        <div className="mt-12 pt-8 border-t border-stone-200">
          <h4 className="text-sm font-bold uppercase tracking-wider text-stone-800 mb-4 font-sans flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-amber-600" />
            <span>Bibliographic References (Education in Medellín)</span>
          </h4>
          <p className="text-xs text-stone-500 mb-4">
            Clickable buttons to access peer-reviewed publications and official records:
          </p>

          <div className="grid grid-cols-1 gap-3.5">
            {/* Ref 1: Granda & Machin-Mastromatteo */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-stone-200/80 bg-stone-50/70">
              <div className="text-xs sm:text-sm text-stone-700">
                <span className="font-semibold text-stone-900">Granda, R., &amp; Machin-Mastromatteo, J. D. (2018).</span>{' '}
                <em className="font-serif">Medellin Library Parks</em>. IFLA Journal, 44(2).
              </div>
              <a
                id="btn-ref-ifla-journal"
                href="https://www.researchgate.net/publication/322709590_Medellin_Library_Parks_A_model_for_Latin_American_libraries_and_urban_equipment"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 px-4 py-2 text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>Read ResearchGate Paper</span>
                <ExternalLink className="h-3.5 w-3.5 text-stone-500" />
              </a>
            </div>

            {/* Ref 2: UNESCO */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-stone-200/80 bg-stone-50/70">
              <div className="text-xs sm:text-sm text-stone-700">
                <span className="font-semibold text-stone-900">UNESCO. (2019).</span>{' '}
                <em className="font-serif">Medellín, Learning City Award</em>.
              </div>
              <a
                id="btn-ref-unesco-award"
                href="https://www.unesco.org/en/articles/cities-inclusion-winners-unesco-learning-city-award-2019"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 px-4 py-2 text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>View UNESCO Award</span>
                <ExternalLink className="h-3.5 w-3.5 text-stone-500" />
              </a>
            </div>

            {/* Ref 3: Expat Focus */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-stone-200/80 bg-stone-50/70">
              <div className="text-xs sm:text-sm text-stone-700">
                <span className="font-semibold text-stone-900">Expat Focus. (2026).</span>{' '}
                <em className="font-serif">Colombia – Education and schools</em>.
              </div>
              <a
                id="btn-ref-expat-focus"
                href="https://www.expatfocus.com/colombia/guide/colombia-education-and-schools"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 px-4 py-2 text-xs font-semibold shadow-2xs transition-colors shrink-0"
              >
                <span>Access Expat Focus Guide</span>
                <ExternalLink className="h-3.5 w-3.5 text-stone-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

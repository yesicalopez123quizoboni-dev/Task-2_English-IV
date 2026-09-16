import React from 'react';
import { ExternalLink, BookOpen, CheckCircle2 } from 'lucide-react';
import { ALL_REFERENCES } from '../data/portfolioData';

export const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="py-16 sm:py-20 border-t border-stone-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-stone-100 text-stone-800 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <BookOpen className="h-3.5 w-3.5 text-emerald-700" />
            <span>Section 6 • Academic Citations</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            References
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Comprehensive bibliographic references supporting the research and documentation of this academic portfolio in standard citation format.
          </p>
        </div>

        {/* References List in Clean Academic Cards */}
        <div className="mt-8 space-y-4">
          {ALL_REFERENCES.map((ref) => (
            <div
              key={ref.id}
              id={`ref-item-${ref.id}`}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-xl border border-stone-200/80 bg-stone-50/50 p-5 hover:bg-stone-50 transition-colors shadow-2xs"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mt-0.5">
                  {ref.id}
                </span>
                <div>
                  <p className="text-sm sm:text-base text-stone-800 font-serif leading-relaxed">
                    {ref.id === 1 && (
                      <>
                        <strong className="font-sans font-semibold">Colombia.co</strong> &mdash; Medellín: arte, innovación y cultura paisa.
                      </>
                    )}
                    {ref.id === 2 && (
                      <>
                        <strong className="font-sans font-semibold">Granda, R., &amp; Machin-Mastromatteo, J. D. (2018).</strong> <em>Medellin Library Parks</em>. IFLA Journal, 44(2).
                      </>
                    )}
                    {ref.id === 3 && (
                      <>
                        <strong className="font-sans font-semibold">UNESCO. (2019).</strong> <em>Medellín, Learning City Award.</em>
                      </>
                    )}
                    {ref.id === 4 && (
                      <>
                        <strong className="font-sans font-semibold">Expat Focus. (2026).</strong> <em>Colombia – Education and schools.</em>
                      </>
                    )}
                    {ref.id === 5 && (
                      <>
                        <strong className="font-sans font-semibold">Alcaldía de Medellín. (2021).</strong> <em>Medellín biodiversa.</em>
                      </>
                    )}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-stone-500">
                    <span className="font-medium text-stone-600">{ref.publisher}</span>
                    <span>•</span>
                    <span className="truncate max-w-xs sm:max-w-md text-stone-400">{ref.url}</span>
                  </div>
                </div>
              </div>

              {/* Direct Clickable Button for each reference */}
              <div className="shrink-0 self-start sm:self-center">
                <a
                  id={`btn-visit-ref-${ref.id}`}
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white hover:bg-emerald-50 text-emerald-800 border border-emerald-300/80 px-4 py-2 text-xs font-semibold shadow-2xs transition-all hover:border-emerald-400"
                >
                  <span>Open Reference</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Academic Integrity Note */}
        <div className="mt-8 rounded-xl border border-emerald-200/80 bg-emerald-50/60 p-4 flex items-center gap-3 text-xs text-emerald-900">
          <CheckCircle2 className="h-5 w-5 text-emerald-700 shrink-0" />
          <span>
            All sources cited conform to verified publications, official institutional repositories, and municipal portals for academic transparency.
          </span>
        </div>
      </div>
    </section>
  );
};

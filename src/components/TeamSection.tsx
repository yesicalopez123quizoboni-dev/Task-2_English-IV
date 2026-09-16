import React from 'react';
import { Users, Headphones, Sparkles, GraduationCap, Mountain, ArrowUpRight, Briefcase, HeartPulse } from 'lucide-react';
import { TEAM_MEMBERS } from '../data/portfolioData';

export const TeamSection: React.FC = () => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'david':
        return <Sparkles className="h-5 w-5 text-emerald-700" />;
      case 'yesica':
        return <GraduationCap className="h-5 w-5 text-amber-700" />;
      case 'angie':
        return <Mountain className="h-5 w-5 text-teal-700" />;
      case 'catalina':
        return <Briefcase className="h-5 w-5 text-blue-700" />;
      case 'natalia':
        return <HeartPulse className="h-5 w-5 text-teal-700" />;
      default:
        return <Users className="h-5 w-5 text-stone-700" />;
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="py-16 sm:py-20 border-t border-stone-200/80 bg-stone-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-md bg-stone-200/80 text-stone-800 px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
            <Users className="h-3.5 w-3.5 text-stone-700" />
            <span>Section 7 • Academic Project Team</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-stone-900 tracking-tight font-display">
            About the Team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-stone-600">
            Meet the five student researchers behind this English academic portfolio, detailing their assigned themes and oral presentations.
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              id={`team-card-${member.id}`}
              className="group relative flex flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:shadow-md hover:border-emerald-300"
            >
              <div>
                {/* Header with avatar initial & icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-100 border border-stone-200 text-stone-800 font-bold text-lg font-display group-hover:scale-105 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-stone-50 border border-stone-200">
                    {getIcon(member.id)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-stone-900 font-display">
                  {member.name}
                </h3>
                
                <div className="mt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Assigned Topic
                  </span>
                  <p className="text-sm font-semibold text-emerald-800">
                    {member.topic}
                  </p>
                </div>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {member.roleDescription}
                </p>
              </div>

              {/* Actions: Jump to Section & Audio Link */}
              <div className="mt-6 pt-5 border-t border-stone-100 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => scrollToSection(member.sectionId)}
                  className="w-full inline-flex items-center justify-between rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 px-3.5 py-2 text-xs font-semibold transition-colors"
                >
                  <span>Read {member.name.split(' ')[0]}&rsquo;s Section</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>

                <a
                  href={member.audioUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50/60 hover:bg-emerald-100 text-emerald-800 px-3.5 py-2 text-xs font-semibold transition-colors"
                >
                  <Headphones className="h-3.5 w-3.5" />
                  <span>{member.buttonLabel}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

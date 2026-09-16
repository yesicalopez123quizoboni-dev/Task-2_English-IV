import React from 'react';
import { Headphones, ExternalLink, Volume2 } from 'lucide-react';
import { TeamMember } from '../types';

interface AudioPlayerCardProps {
  member: TeamMember;
  accentColor?: 'emerald' | 'amber' | 'teal' | 'blue' | 'indigo' | 'cyan';
}

export const AudioPlayerCard: React.FC<AudioPlayerCardProps> = ({
  member,
  accentColor = 'emerald'
}) => {
  const accentStyles = {
    emerald: {
      cardBg: 'bg-emerald-50/70 border-emerald-200/80',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      btn: 'bg-emerald-700 hover:bg-emerald-800 text-white shadow-emerald-700/20',
      iconBox: 'bg-emerald-600 text-white',
      ring: 'focus-visible:ring-emerald-600'
    },
    amber: {
      cardBg: 'bg-amber-50/70 border-amber-200/80',
      badge: 'bg-amber-100 text-amber-900 border-amber-200',
      btn: 'bg-amber-700 hover:bg-amber-800 text-white shadow-amber-700/20',
      iconBox: 'bg-amber-600 text-white',
      ring: 'focus-visible:ring-amber-600'
    },
    teal: {
      cardBg: 'bg-teal-50/70 border-teal-200/80',
      badge: 'bg-teal-100 text-teal-900 border-teal-200',
      btn: 'bg-teal-700 hover:bg-teal-800 text-white shadow-teal-700/20',
      iconBox: 'bg-teal-600 text-white',
      ring: 'focus-visible:ring-teal-600'
    },
    blue: {
      cardBg: 'bg-blue-50/70 border-blue-200/80',
      badge: 'bg-blue-100 text-blue-900 border-blue-200',
      btn: 'bg-blue-700 hover:bg-blue-800 text-white shadow-blue-700/20',
      iconBox: 'bg-blue-600 text-white',
      ring: 'focus-visible:ring-blue-600'
    },
    indigo: {
      cardBg: 'bg-indigo-50/70 border-indigo-200/80',
      badge: 'bg-indigo-100 text-indigo-900 border-indigo-200',
      btn: 'bg-indigo-700 hover:bg-indigo-800 text-white shadow-indigo-700/20',
      iconBox: 'bg-indigo-600 text-white',
      ring: 'focus-visible:ring-indigo-600'
    },
    cyan: {
      cardBg: 'bg-cyan-50/70 border-cyan-200/80',
      badge: 'bg-cyan-100 text-cyan-900 border-cyan-200',
      btn: 'bg-cyan-700 hover:bg-cyan-800 text-white shadow-cyan-700/20',
      iconBox: 'bg-cyan-600 text-white',
      ring: 'focus-visible:ring-cyan-600'
    }
  };

  const style = accentStyles[accentColor];

  return (
    <div
      id={`audio-card-${member.id}`}
      className={`my-6 rounded-2xl border p-5 sm:p-6 shadow-sm transition-all duration-200 hover:shadow-md ${style.cardBg}`}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-start gap-4">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl shadow-xs ${style.iconBox}`}>
            <Headphones className="h-6 w-6 stroke-[2]" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-stone-900 flex items-center gap-1.5">
                <span>🎧</span>
                <span>{member.name} — Oral Presentation</span>
              </h3>
            </div>
            <p className="text-sm font-medium text-stone-600 mt-1">
              <span className="text-stone-500 font-normal">Topic:</span> <strong className="font-semibold text-stone-800">{member.topic}</strong>
            </p>
            <p className="mt-1 text-xs text-stone-500 flex items-center gap-1.5 font-normal">
              <Volume2 className="h-3.5 w-3.5 text-stone-400" />
              Click to listen to the student&rsquo;s oral presentation.
            </p>
          </div>
        </div>

        {/* Action Button & Vocaroo Direct Link */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            id={`btn-audio-${member.id}`}
            href={member.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-all duration-150 active:scale-98 ${style.btn} ${style.ring}`}
            title={`Open audio presentation for ${member.name} in a new tab`}
          >
            <span>{member.buttonLabel}</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>

      {/* Embedded Player Widget for direct inline listening */}
      <div className="mt-4 pt-4 border-t border-stone-200/60">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500 mb-2">
          <span className="font-semibold text-stone-700 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Direct Audio Stream (Vocaroo Audio Record)
          </span>
          <a
            href={member.audioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-800 underline transition-colors"
          >
            Source: {member.audioUrl}
          </a>
        </div>
        <div className="w-full bg-white/90 p-2.5 rounded-xl border border-stone-200/70 shadow-2xs">
          <iframe
            title={`Audio presentation by ${member.name} on ${member.topic}`}
            width="100%"
            height="60"
            src={`https://vocaroo.com/embed/${member.vocarooId}?autoplay=0`}
            frameBorder="0"
            allow="autoplay"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

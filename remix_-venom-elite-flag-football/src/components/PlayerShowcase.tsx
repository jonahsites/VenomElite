import React from 'react';
import { UserPlus, Shield, Sparkles } from 'lucide-react';

export default function PlayerShowcase() {
  return (
    <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#050505] relative overflow-hidden text-center space-y-6" id="squad-roster-showcase">
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-venom to-transparent" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-venom/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-venom/10 border border-venom/30 rounded font-mono text-venom text-[10px] uppercase tracking-wider font-extrabold mx-auto">
          ⚡ RECRUITMENT OPEN FOR INAUGURAL TEAM
        </div>

        <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase italic leading-none">
          ROSTER <span className="text-venom">COMING SOON</span>
        </h3>

        <p className="text-white/60 text-xs sm:text-sm font-sans leading-relaxed">
          Our developmental coaching staff is currently accepting applications to form our inaugural Tri-State youth age divisions. Player stats, physical bios, and team rankings will populate here as roster selection concludes.
        </p>

        <div className="grid grid-cols-2 gap-4 text-left max-w-sm mx-auto pt-4 text-xs font-mono text-white/50">
          <div className="p-3 bg-[#050505] rounded-lg border border-white/5 space-y-1">
            <span className="text-white font-bold block text-[10px] uppercase">Age Brackets</span>
            <span className="text-[10px]">8U, 10U, 12U, & 14U Teams</span>
          </div>
          <div className="p-3 bg-[#050505] rounded-lg border border-white/5 space-y-1">
            <span className="text-white font-bold block text-[10px] uppercase">Roster Slots</span>
            <span className="text-[10px]">Evaluating Prospects Daily</span>
          </div>
        </div>

        <p className="text-[10px] font-mono text-white/40 uppercase tracking-wider py-2">
          Click "RSVP FOR TRYOUTS" at the top or submit the form below to secure your spot.
        </p>
      </div>
    </div>
  );
}

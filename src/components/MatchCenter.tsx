import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Clock, Trophy } from 'lucide-react';

export default function MatchCenter() {
  const [timeLeft, setTimeLeft] = useState({
    days: 18,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel p-8 sm:p-12 rounded-2xl border border-white/10 bg-gradient-to-br from-[#050505] via-[#0A0A0A] to-[#050505] relative overflow-hidden" id="match-center-module">
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-venom to-transparent" />
      <div className="absolute top-0 right-0 w-80 h-80 bg-venom/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-venom/10 border border-venom/30 rounded font-mono text-venom text-[10px] uppercase tracking-wider font-extrabold mx-auto">
          📅 INAUGURAL SEASON PLANNING
        </div>

        <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase italic leading-none">
          SCHEDULE <span className="text-venom">COMING SOON</span>
        </h3>

        <p className="text-white/60 text-xs sm:text-sm font-sans leading-relaxed max-w-lg mx-auto">
          We are currently mapping tournament dates and organizing our local scrimmage games for our inaugural season in the Tri-State area, New Jersey. Complete training camp dates, brackets, and team directions will launch here shortly.
        </p>

        {/* Training Camp Countdown */}
        <div className="border border-white/5 rounded-xl p-6 bg-black/40 max-w-md mx-auto space-y-3">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block font-bold">
            TIME UNTIL FIRST OFFICIAL TRAINING SESSION
          </span>
          
          <div className="grid grid-cols-4 gap-2.5 text-center font-mono">
            <div className="bg-[#050505] p-3 rounded-lg border border-white/5">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block">
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
              <span className="text-[8px] text-white/30 uppercase tracking-wider font-bold">Days</span>
            </div>
            <div className="bg-[#050505] p-3 rounded-lg border border-white/5">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span className="text-[8px] text-white/30 uppercase tracking-wider font-bold">Hours</span>
            </div>
            <div className="bg-[#050505] p-3 rounded-lg border border-white/5">
              <span className="text-xl sm:text-2xl font-bold text-white tracking-tight block">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span className="text-[8px] text-white/30 uppercase tracking-wider font-bold">Mins</span>
            </div>
            <div className="bg-[#050505] p-3 rounded-lg border border-white/5">
              <span className="text-xl sm:text-2xl font-bold text-[#C1FF00] tracking-tight block animate-pulse">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
              <span className="text-[8px] text-white/30 uppercase tracking-wider font-bold">Secs</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-md mx-auto pt-4 text-xs font-mono text-white/50">
          <div className="flex items-start gap-2 bg-[#050505]/60 p-3 rounded-lg border border-white/5">
            <MapPin className="w-4 h-4 text-venom mt-0.5 shrink-0" />
            <div>
              <span className="text-white font-bold block text-[10px] uppercase">Practice Venue</span>
              <span className="text-[10px]">Tri-State Park Fields, New Jersey</span>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-[#050505]/60 p-3 rounded-lg border border-white/5">
            <Calendar className="w-4 h-4 text-venom mt-0.5 shrink-0" />
            <div>
              <span className="text-white font-bold block text-[10px] uppercase">Inaugural Kickoff</span>
              <span className="text-[10px]">Targeting Summer 2026 Brackets</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

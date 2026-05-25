import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, RotateCcw, Shield, ShieldAlert, Award, Grid3X3, Layers } from 'lucide-react';
import { VENOM_MOCK_TACTICS } from '../data';

interface FieldPosition {
  id: string;
  role: string;
  type: 'offense' | 'defense';
  x: number; // percentage width
  y: number; // percentage height
  color: string;
}

const CONSTANT_OFFENSE_COLOR = '#39FF14'; // Toxic Green
const CONSTANT_DEFENSE_COLOR = '#F87171'; // Coral Red

export default function PlayDesigner() {
  const [activePreset, setActivePreset] = useState<number | null>(0);
  
  // Roster positions that users can dynamically adjust or preview
  const [positions, setPositions] = useState<FieldPosition[]>([
    // Offense (represented as Venom green shields or circles)
    { id: 'qb', role: 'QB', type: 'offense', x: 50, y: 78, color: CONSTANT_OFFENSE_COLOR },
    { id: 'wr1', role: 'WR1', type: 'offense', x: 18, y: 65, color: CONSTANT_OFFENSE_COLOR },
    { id: 'wr2', role: 'WR2', type: 'offense', x: 82, y: 65, color: CONSTANT_OFFENSE_COLOR },
    { id: 'center', role: 'C', type: 'offense', x: 50, y: 62, color: CONSTANT_OFFENSE_COLOR },
    { id: 'slot', role: 'SLT', type: 'offense', x: 35, y: 65, color: CONSTANT_OFFENSE_COLOR },
    
    // Defense
    { id: 'cb1', role: 'CB1', type: 'defense', x: 18, y: 48, color: CONSTANT_DEFENSE_COLOR },
    { id: 'cb2', role: 'CB2', type: 'defense', x: 82, y: 48, color: CONSTANT_DEFENSE_COLOR },
    { id: 'safety', role: 'S', type: 'defense', x: 50, y: 25, color: CONSTANT_DEFENSE_COLOR },
    { id: 'rusher', stroke: '#F87171', role: 'RSH', type: 'defense', x: 60, y: 55, color: CONSTANT_DEFENSE_COLOR }
  ]);

  // Preset route vectors associated with presets to draw dynamic SVGs
  const getPresetRoutes = () => {
    if (activePreset === 0) {
      // Sting Corner Blast: WR1 executes a high corner route, slot runs a shallow decoy drag.
      return [
        { from: 'wr1', path: 'M 18,65 Q 18,35 18,30 L 8,15' }, // Corner post
        { from: 'slot', path: 'M 35,65 Q 40,55 55,54 L 85,50' }, // Decoy cross
        { from: 'center', path: 'M 50,62 L 50,42' }, // Center block / short check
        { from: 'qb', path: 'M 50,78 Q 45,82 45,84' }, // QB dropback
      ];
    }
    if (activePreset === 1) {
      // Apex Poison Blitz: Cross blitzer path to scramble blind side
      return [
        { from: 'rusher', path: 'M 60,55 Q 48,50 48,70 L 48,76' }, // Blitzer wraps QB
        { from: 'safety', path: 'M 50,25 Q 35,35 30,55' }, // Safety drops to cover deep left
        { from: 'cb1', path: 'M 18,48 L 18,65' }, // Jams Receiver
      ];
    }
    if (activePreset === 2) {
      // Ghost Option Flick
      return [
        { from: 'qb', path: 'M 50,78 Q 50,68 40,68' }, // QB rolls left
        { from: 'center', path: 'M 50,62 Q 62,62 70,52 L 85,32' }, // Center wheel option
        { from: 'wr2', path: 'M 82,65 L 82,35' }, // Deep vertical barrier
      ];
    }
    return [];
  };

  const handlePositionDrag = (id: string, newX: number, newY: number) => {
    // Keep nodes inside bounds (approx 5 to 95%)
    const clampedX = Math.max(5, Math.min(95, newX));
    const clampedY = Math.max(5, Math.min(95, newY));
    
    setPositions(prev =>
      prev.map(p => (p.id === id ? { ...p, x: clampedX, y: clampedY } : p))
    );
    setActivePreset(null); // break preset state if user drags Custom
  };

  const handleReset = () => {
    setPositions([
      { id: 'qb', role: 'QB', type: 'offense', x: 50, y: 78, color: CONSTANT_OFFENSE_COLOR },
      { id: 'wr1', role: 'WR1', type: 'offense', x: 18, y: 65, color: CONSTANT_OFFENSE_COLOR },
      { id: 'wr2', role: 'WR2', type: 'offense', x: 82, y: 65, color: CONSTANT_OFFENSE_COLOR },
      { id: 'center', role: 'C', type: 'offense', x: 50, y: 62, color: CONSTANT_OFFENSE_COLOR },
      { id: 'slot', role: 'SLT', type: 'offense', x: 35, y: 65, color: CONSTANT_OFFENSE_COLOR },
      
      { id: 'cb1', role: 'CB1', type: 'defense', x: 18, y: 48, color: CONSTANT_DEFENSE_COLOR },
      { id: 'cb2', role: 'CB2', type: 'defense', x: 82, y: 48, color: CONSTANT_DEFENSE_COLOR },
      { id: 'safety', role: 'S', type: 'defense', x: 50, y: 25, color: CONSTANT_DEFENSE_COLOR },
      { id: 'rusher', role: 'RSH', type: 'defense', x: 60, y: 55, color: CONSTANT_DEFENSE_COLOR }
    ]);
    setActivePreset(0);
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-lg shadow-black/40" id="venom-tactic-chalkboard">
      <div className="flex flex-col xl:flex-row gap-8">
        
        {/* Left Hand: Explanatory and Play Presets select */}
        <div className="xl:w-5/12 space-y-6 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-venom/10 border border-venom/25 rounded-full text-venom text-xs font-mono mb-3 uppercase tracking-wider font-bold">
              <ShieldAlert className="w-3" /> INTEL & PLAYBOOK
            </div>
            <h3 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white uppercase italic">
              VENOM TACTICAL <span className="text-venom">BOARD</span>
            </h3>
            <p className="text-white/40 text-sm mt-2 font-sans leading-relaxed">
              Interact with official plays built inside our team field training clinics. Touch the presets to draw complex routes, or drag offensive <span className="text-venom font-bold">(Green)</span> and defensive <span className="text-red-400 font-bold">(Red)</span> tactical anchors around the grid below to draft your own pass plays.
            </p>
          </div>

          {/* Preset Buttons Stack */}
          <div className="space-y-3">
            <span className="text-xs font-mono uppercase tracking-wider text-white/30 block font-bold">
              Venom Base Formations
            </span>
            <div className="grid grid-cols-1 gap-2.5">
              {VENOM_MOCK_TACTICS.map((t, idx) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setActivePreset(idx);
                    // Relocate nodes to standard positions for preset styling
                    if (idx === 0) {
                      setPositions([
                        { id: 'qb', role: 'QB', type: 'offense', x: 50, y: 78, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'wr1', role: 'WR1', type: 'offense', x: 18, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'wr2', role: 'WR2', type: 'offense', x: 82, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'center', role: 'C', type: 'offense', x: 50, y: 62, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'slot', role: 'SLT', type: 'offense', x: 35, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        
                        { id: 'cb1', role: 'CB1', type: 'defense', x: 18, y: 48, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'cb2', role: 'CB2', type: 'defense', x: 82, y: 48, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'safety', role: 'S', type: 'defense', x: 50, y: 25, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'rusher', role: 'RSH', type: 'defense', x: 60, y: 55, color: CONSTANT_DEFENSE_COLOR }
                      ]);
                    } else if (idx === 1) { // Apex Poison defense
                      setPositions([
                        { id: 'qb', role: 'QB', type: 'offense', x: 48, y: 76, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'wr1', role: 'WR1', type: 'offense', x: 18, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'wr2', role: 'WR2', type: 'offense', x: 82, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'center', role: 'C', type: 'offense', x: 48, y: 62, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'slot', role: 'SLT', type: 'offense', x: 35, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        
                        { id: 'cb1', role: 'CB1', type: 'defense', x: 18, y: 48, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'cb2', role: 'CB2', type: 'defense', x: 82, y: 48, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'safety', role: 'S', type: 'defense', x: 50, y: 25, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'rusher', role: 'RSH', type: 'defense', x: 60, y: 55, color: CONSTANT_DEFENSE_COLOR }
                      ]);
                    } else if (idx === 2) { // Ghost Option Flick
                      setPositions([
                        { id: 'qb', role: 'QB', type: 'offense', x: 50, y: 78, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'wr1', role: 'WR1', type: 'offense', x: 18, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'wr2', role: 'WR2', type: 'offense', x: 82, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'center', role: 'C', type: 'offense', x: 50, y: 62, color: CONSTANT_OFFENSE_COLOR },
                        { id: 'slot', role: 'SLT', type: 'offense', x: 35, y: 65, color: CONSTANT_OFFENSE_COLOR },
                        
                        { id: 'cb1', role: 'CB1', type: 'defense', x: 15, y: 45, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'cb2', role: 'CB2', type: 'defense', x: 82, y: 48, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'safety', role: 'S', type: 'defense', x: 55, y: 30, color: CONSTANT_DEFENSE_COLOR },
                        { id: 'rusher', role: 'RSH', type: 'defense', x: 40, y: 52, color: CONSTANT_DEFENSE_COLOR }
                      ]);
                    }
                  }}
                  className={`w-full p-3 rounded-xl border text-left transition-all relative cursor-pointer ${
                    activePreset === idx
                      ? 'bg-[#111111] border-white/20 text-white shadow-lg shadow-venom/5'
                      : 'bg-[#050505] border-white/10 text-white/40 hover:border-white/20 hover:text-white'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-display font-bold text-sm uppercase">{t.name}</span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded uppercase font-bold border ${
                      t.difficulty === 'Elite' 
                        ? 'bg-[#0A0A0A] border-white/10 text-purple-400' 
                        : t.difficulty === 'Advanced' 
                        ? 'bg-[#0A0A0A] border-white/10 text-red-400' 
                        : 'bg-[#0A0A0A] border-white/10 text-venom'
                    }`}>
                      {t.difficulty}
                    </span>
                  </div>
                  <p className="text-xs font-sans text-white/40 mt-1 line-clamp-2">
                    {t.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Reset button bar */}
          <div className="flex gap-4">
            <button
              onClick={handleReset}
              className="px-4 py-2.5 bg-[#111111] border border-white/10 hover:border-white/20 hover:bg-[#161616] rounded-xl text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all text-white pointer-events-auto cursor-pointer font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5 text-venom" /> Reset Formations
            </button>
            <div className="text-xs font-mono text-white/30 flex items-center font-bold">
              <span>Drag any peg directly on the field grid!</span>
            </div>
          </div>
        </div>

        {/* Right Hand: Massive Scale Football Chalk Field Container */}
        <div className="xl:w-7/12">
          <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden select-none shadow-2xl">
            
            {/* Field Turf Visual Backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/40 to-black/80 pointer-events-none" />
            
            {/* Field Lines Grid (Every 10 yards mock rendering) */}
            <div className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none py-[5%]">
              <div className="h-px bg-white/10 w-full relative">
                <span className="absolute left-2 -translate-y-1/2 text-[9px] font-mono text-white/20 font-bold">GOAL LINE</span>
              </div>
              <div className="h-px bg-white/5 w-full relative">
                <span className="absolute left-2 -translate-y-1/2 text-[9px] font-mono text-white/20 font-bold">10 YDS</span>
              </div>
              <div className="h-px bg-white/5 w-full relative">
                <span className="absolute left-2 -translate-y-1/2 text-[9px] font-mono text-white/20 font-bold">20 YDS</span>
              </div>
              {/* Line of scrimmage indicator */}
              <div className="h-px bg-venom/20 w-full relative">
                <span className="absolute left-2 -translate-y-1/2 text-[9px] font-mono text-venom/50 font-bold">SCRIMMAGE LINE</span>
                <div className="absolute inset-x-0 h-[2px] bg-[repeating-linear-gradient(90deg,transparent,transparent_8px,#39FF14_8px,#39FF14_16px)] opacity-30" />
              </div>
              <div className="h-px bg-white/5 w-full relative">
                <span className="absolute left-2 -translate-y-1/2 text-[9px] font-mono text-white/20 font-bold">40 YDS</span>
              </div>
              <div className="h-px bg-white/10 w-full relative">
                <span className="absolute left-2 -translate-y-1/2 text-[9px] font-mono text-white/20 font-bold">END ZONE</span>
              </div>
            </div>

            {/* Sideline Marks (Hashed margins) */}
            <div className="absolute inset-y-0 left-0 w-2.5 border-r border-dashed border-white/5 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-2.5 border-l border-dashed border-white/5 pointer-events-none" />

            {/* Animated SVG Routes Overlay */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <marker
                  id="arrow-offense"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#39FF14" />
                </marker>
                <marker
                  id="arrow-defense"
                  viewBox="0 0 10 10"
                  refX="6"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 1 L 10 5 L 0 9 z" fill="#F87171" />
                </marker>
              </defs>

              <AnimatePresence>
                {/* Draw Preset Vector Routes */}
                {getPresetRoutes().map((route, i) => {
                  const correlatedNode = positions.find(p => p.id === route.from);
                  if (!correlatedNode) return null;

                  return (
                    <motion.g
                      key={`${route.from}-${activePreset}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Interactive Route Outline glowing tube */}
                      <path
                        d={route.path}
                        fill="none"
                        stroke={correlatedNode.type === 'offense' ? 'rgba(57, 255, 20, 0.08)' : 'rgba(248, 113, 113, 0.08)'}
                        strokeWidth="12"
                        strokeLinecap="round"
                      />
                      {/* Main dashed flow route */}
                      <path
                        d={route.path}
                        fill="none"
                        stroke={correlatedNode.type === 'offense' ? '#39FF14' : '#F87171'}
                        strokeWidth="2.5"
                        strokeDasharray="6 4"
                        markerEnd={`url(#arrow-${correlatedNode.type})`}
                      />
                    </motion.g>
                  );
                })}
              </AnimatePresence>
            </svg>

            {/* Interactive Player Anchors for manual dragging around the field grid */}
            {positions.map((node) => {
              return (
                <div
                  key={node.id}
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  className="absolute cursor-grab active:cursor-grabbing group z-10 touch-none"
                  onPointerDown={(e) => {
                    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                    if (!rect) return;

                    const moveHandler = (moveEvent: PointerEvent) => {
                      const newXPct = ((moveEvent.clientX - rect.left) / rect.width) * 100;
                      const newYPct = ((moveEvent.clientY - rect.top) / rect.height) * 100;
                      handlePositionDrag(node.id, newXPct, newYPct);
                    };

                    const upHandler = () => {
                      window.removeEventListener('pointermove', moveHandler);
                      window.removeEventListener('pointerup', upHandler);
                    };

                    window.addEventListener('pointermove', moveHandler);
                    window.addEventListener('pointerup', upHandler);
                  }}
                >
                  <div
                    className={`h-7 sm:h-9 w-7 sm:w-9 rounded-full flex items-center justify-center font-display font-black text-[9px] sm:text-xs tracking-tighter border transition-all ${
                      node.type === 'offense'
                        ? 'bg-[#0B0B0B] border-venom text-white shadow-md shadow-venom/30 group-hover:scale-110 italic'
                        : 'bg-[#0B0B0B] border-red-500 text-red-200 group-hover:scale-110'
                    }`}
                  >
                    {node.role}
                    {/* Pulsing focal glow ring */}
                    <div
                      className={`absolute -inset-0.5 rounded-full -z-10 animate-pulse opacity-0 group-hover:opacity-30 transition-opacity ${
                        node.type === 'offense' ? 'bg-venom' : 'bg-red-500'
                      }`}
                    />
                  </div>
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded bg-[#0A0A0A] border border-white/10 text-[8px] font-mono text-white/60 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity uppercase">
                    {node.role === 'QB' ? 'Captain' : node.type === 'offense' ? 'Target WR' : 'Defender'}
                  </div>
                </div>
              );
            })}

            {/* Outer design details */}
            <div className="absolute bottom-3 left-4 flex gap-3 text-[10px] font-mono text-white/30 font-bold">
              <span className="flex items-center gap-1"><Grid3X3 className="w-3" /> Field Scale: 7v7 Standard</span>
              <span>•</span>
              <span className="flex items-center gap-1"><Layers className="w-3" strokeWidth="2.5" /> Vector overlay active</span>
            </div>
            
            {/* Real tactical label */}
            <div className="absolute top-4 right-4 bg-[#0A0A0A]/90 backdrop-blur border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-white/70 font-bold">
              {activePreset !== null ? (
                <span>FORMATION: {VENOM_MOCK_TACTICS[activePreset].name}</span>
              ) : (
                <span className="text-venom">CUSTOM FORMATION DRAFTED</span>
              )}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

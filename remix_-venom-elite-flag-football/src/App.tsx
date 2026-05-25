import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  ArrowRight,
  UserPlus,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Phone,
  Play,
  Instagram,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Menu,
  X,
  Target,
  Zap,
  TrendingUp
} from 'lucide-react';
import { PLAYERS_DATA } from './data';
import PlayerShowcase from './components/PlayerShowcase';
import MatchCenter from './components/MatchCenter';
import { FlowButton } from './components/ui/flow-button';

// Generated Asset Paths
const venomCrestPath = 'https://lh3.googleusercontent.com/d/1BlP6zE7OzxgVOhkKBjxv0zBlfjBibMzW';
const stadiumBgPath = '/src/assets/images/stadium_bg_1779724161471.png';

export default function App() {
  // Navigation scrolling refs
  const programRef = useRef<HTMLDivElement>(null);
  const rosterRef = useRef<HTMLDivElement>(null);
  const matchRef = useRef<HTMLDivElement>(null);
  const registerRef = useRef<HTMLDivElement>(null);

  // Modular dialog triggers
  const [isProspectOpen, setIsProspectOpen] = useState(false);
  const [isProspectSubmitted, setIsProspectSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prospect form values
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPosition, setFormPosition] = useState('Wide Receiver');
  const [formHeight, setFormHeight] = useState('5\'11"');
  const [formBio, setFormBio] = useState('');

  // Inline Tryout Registration Form State
  const [inlineName, setInlineName] = useState('');
  const [inlineEmail, setInlineEmail] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineAgeDivision, setInlineAgeDivision] = useState('12U Division');
  const [inlineExperience, setInlineExperience] = useState('');
  const [inlineSubmitted, setInlineSubmitted] = useState(false);

  const scrollInto = (ref: React.RefObject<HTMLDivElement | null>) => {
    setMobileMenuOpen(false);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const submitProspect = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProspectSubmitted(true);
    setTimeout(() => {
      setIsProspectSubmitted(false);
      setIsProspectOpen(false);
      setFormName('');
      setFormEmail('');
      setFormBio('');
    }, 4000);
  };

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInlineSubmitted(true);
    setTimeout(() => {
      setInlineSubmitted(false);
      setInlineName('');
      setInlineEmail('');
      setInlinePhone('');
      setInlineExperience('');
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] selection:bg-venom selection:text-black font-sans leading-normal relative overflow-x-hidden">
      
      {/* Dynamic Header Navbar */}
      <nav className="fixed top-0 inset-x-0 h-16 bg-[#050505]/95 [backdrop-filter:blur(16px)] border-b border-white/10 z-40 transition-all font-mono text-xs shadow-md">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          
          {/* Logo & Brand Wordmark */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={venomCrestPath} 
              alt="Venom Elite Logo" 
              className="w-10 h-10 object-contain" 
              referrerPolicy="no-referrer"
            />
            <div className="leading-tight">
              <span className="font-display text-base font-black tracking-tighter text-white block uppercase italic">Venom Elite</span>
              <span className="text-[9px] text-venom uppercase tracking-widest block font-mono font-bold">AAU YOUTH FOOTBALL</span>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-6 xl:gap-8 text-white/60 text-[10px] xl:text-[11px] uppercase tracking-[0.15em] font-bold">
            <button
              onClick={() => scrollInto(rosterRef)}
              className="hover:text-venom transition-colors cursor-pointer"
            >
              TEAMS
            </button>
            <button
              onClick={() => scrollInto(matchRef)}
              className="hover:text-venom transition-colors cursor-pointer"
            >
              TOURNAMENTS
            </button>
            <button
              onClick={() => scrollInto(programRef)}
              className="hover:text-venom transition-colors cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollInto(registerRef)}
              className="hover:text-venom transition-colors cursor-pointer"
            >
              CONTACT US
            </button>
          </div>

          {/* Right hand quick prospect triggers */}
          <div className="hidden md:flex items-center gap-4">
            <FlowButton
              onClick={() => scrollInto(registerRef)}
              text="SIGN UP / TRYOUT"
              variant="venom"
            />
          </div>

          {/* Mobile responsive hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg border border-white/10 text-neutral-350 hover:text-white transition-all cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile menu sheet drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-[#050505] border-b border-white/10 absolute top-16 inset-x-0 overflow-hidden font-mono text-xs pb-4"
            >
              <div className="px-4 py-2 space-y-3.5 flex flex-col pt-4">
                <button
                  onClick={() => scrollInto(rosterRef)}
                  className="hover:text-venom transition-colors text-left py-1 cursor-pointer font-bold text-white/70"
                >
                  TEAMS
                </button>
                <button
                  onClick={() => scrollInto(matchRef)}
                  className="hover:text-venom transition-colors text-left py-1 cursor-pointer font-bold text-white/70"
                >
                  TOURNAMENTS
                </button>
                <button
                  onClick={() => scrollInto(programRef)}
                  className="hover:text-venom transition-colors text-left py-1 cursor-pointer font-bold text-white/70"
                >
                  ABOUT
                </button>
                <button
                  onClick={() => scrollInto(registerRef)}
                  className="hover:text-venom transition-colors text-left py-1 cursor-pointer font-bold text-white/70"
                >
                  CONTACT US
                </button>
                <hr className="border-white/5 my-1" />
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    scrollInto(registerRef);
                  }}
                  className="w-full bg-venom text-black font-black py-2.5 rounded-sm text-center cursor-pointer flex items-center justify-center gap-1.5 italic"
                >
                  <UserPlus className="w-4 h-4 text-black stroke-[3]" /> SECURE TRYOUT SPOT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Atmospheric High-Voltage Hero Header Section */}
      <section className="relative pt-24 pb-16 min-h-[95vh] flex flex-col justify-center items-center overflow-hidden border-b border-white/10">
        
        {/* Dynamic Stadium Backdrop Image with vignette layering */}
        <div className="absolute inset-0 z-0">
          <img
            src={stadiumBgPath}
            alt="Stadium Turf"
            className="w-full h-full object-cover scale-[1.01]"
            referrerPolicy="no-referrer"
          />
          {/* Double Layer Mask indicating aggressive focus, absolute contrast */}
          <div className="absolute inset-0 bg-[#050505]/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_100%)]" />
        </div>
 
        {/* Hero Copy Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative flex flex-col items-center justify-center text-center space-y-6 sm:space-y-8">
          
          {/* Logo Placement */}
          <div className="inline-block relative">
            <img 
              src={venomCrestPath}
              alt="Venom AAU Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-venom text-black px-2 py-0.5 rounded text-[8px] font-mono font-black italic uppercase tracking-wider">
              EST. 2026
            </div>
          </div>

          <div className="text-[10px] font-mono text-venom opacity-80 uppercase tracking-[0.4em] font-black">
            TRI-STATE DEVELOPING YOUTH FLAG FOOTBALL PROGRAM
          </div>

          {/* Display Headings stack */}
          <div className="max-w-4xl space-y-3 md:space-y-4">
            <h1 className="text-[16vw] md:text-[110px] leading-[0.8] font-black italic tracking-tight uppercase mb-2 text-white">
              VENOM<br className="md:hidden" />
              <span className="text-stroke-venom ml-0 md:ml-4">
                ELITE
              </span>
            </h1>
            
            <p className="max-w-2xl text-white/70 text-sm sm:text-base leading-relaxed mx-auto">
              Tri-State regional developmental travel flag football program. We build speed, coordinate team agility, and focus on fundamental football IQ for youth athletes.
            </p>
          </div>

          {/* Action buttons stack */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2 w-full max-w-lg mx-auto z-20">
            <FlowButton
              onClick={() => scrollInto(registerRef)}
              text="RSVP FOR TRYOUTS"
              variant="venom"
              className="w-full sm:w-auto"
            />
            <FlowButton
              onClick={() => scrollInto(programRef)}
              text="Explore Programs"
              variant="primary"
              className="w-full sm:w-auto"
            />
          </div>

          {/* Core high-contrast metrics boxes */}
          <div className="grid grid-cols-3 border border-white/10 divide-x divide-white/10 bg-[#050505]/60 backdrop-blur-md w-full max-w-4xl rounded-2xl overflow-hidden mt-6 md:mt-8 shadow-2xl relative">
            <div className="p-3 py-4 md:p-6 text-center md:text-left transition-all hover:bg-white/[0.02] group relative flex flex-col justify-center">
              <div className="hidden md:block absolute top-3 right-3 text-[9px] font-mono text-venom font-extrabold tracking-widest bg-venom/10 px-1.5 py-0.5 rounded">AGE DIV</div>
              <div className="hidden md:block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 font-bold">AGE DIVISIONS</div>
              <div className="text-[11px] md:text-2xl font-display font-black tracking-tight text-white group-hover:text-venom transition-colors italic uppercase leading-none md:mt-2">
                8U • 10U • 12U
              </div>
              <div className="text-[7px] md:text-[10px] font-mono text-white/50 mt-1 md:mt-1.5 font-bold uppercase tracking-wider">14U & CLINICS</div>
            </div>
            
            <div className="p-3 py-4 md:p-6 text-center md:text-left transition-all hover:bg-white/[0.02] group relative flex flex-col justify-center">
              <div className="hidden md:block absolute top-3 right-3 text-[9px] font-mono text-venom font-extrabold tracking-widest bg-venom/10 px-1.5 py-0.5 rounded">BASE</div>
              <div className="hidden md:block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 font-bold">TEAM ORIGIN</div>
              <div className="text-xs md:text-2xl font-display font-black tracking-tight text-white group-hover:text-venom transition-colors italic uppercase leading-none md:mt-2">
                TRI-STATE
              </div>
              <div className="text-[7px] md:text-[10px] font-mono text-white/50 mt-1 md:mt-1.5 font-bold uppercase tracking-wider">NEW JERSEY</div>
            </div>

            <div className="p-3 py-4 md:p-6 text-center md:text-left transition-all hover:bg-white/[0.02] group relative flex flex-col justify-center">
              <div className="hidden md:block absolute top-3 right-3 text-[9px] font-mono text-venom font-extrabold tracking-widest bg-venom/10 px-1.5 py-0.5 rounded">CAMP 1</div>
              <div className="hidden md:block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-1 font-bold">FIRST SESSION</div>
              <div className="text-xs md:text-2xl font-display font-black tracking-tight text-white group-hover:text-venom transition-colors italic uppercase leading-none md:mt-2">
                JUNE 13
              </div>
              <div className="text-[7px] md:text-[10px] font-mono text-venom mt-1 md:mt-1.5 font-bold uppercase tracking-wider animate-pulse">TRYOUTS OPEN</div>
            </div>
          </div>
        </div>

        {/* Live Rolling Roster ticker */}
        <div className="absolute bottom-0 inset-x-0 h-11 bg-[#0A0A0A] border-t border-white/10 flex items-center overflow-hidden text-[10px] font-mono tracking-wider text-white/50 uppercase">
          <div className="flex gap-16 whitespace-nowrap animate-pulse-slow px-4 justify-around w-full">
            <span>🏈 VENOM FIELD TRAINING & DEVELOPMENT CLINIC OPEN</span>
            <span>★ OFFICIAL NEW JERSEY AAU CHARTER REGISTERED</span>
            <span>⚡ CLINICS GEARED FOR ALL SKILL LEVELS & BRACKETS</span>
            <span className="hidden lg:inline">📍 CONVENIENT LOCATIONS THROUGHOUT THE TRI-STATE AREA</span>
          </div>
        </div>
      </section>

      {/* Main Core Bento Layout Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-32 z-10 relative">

        {/* Founder & Director of Player Development - Core Pillars */}
        <div className="scroll-mt-24" id="philosophy-view">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <span className="text-[10px] font-mono text-venom uppercase tracking-[0.4em] block font-bold mb-2">
              FOUNDER & DIRECTOR OF PLAYER DEVELOPMENT
            </span>
            <h2 className="text-[11vw] sm:text-7xl font-display font-black tracking-tighter text-white uppercase italic leading-[0.9] sm:leading-none">
              VENOM <br className="sm:hidden" />
              <span className="text-stroke-venom">TEAM VALUES</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Target className="w-8 h-8 text-venom" />,
                title: "DEVELOPING ATHLETES.",
                subtitle: "BUILDING LEADERS.",
                description: "Creating complete team players ready for local middle school, high school, and travel competition."
              },
              {
                icon: <Zap className="w-8 h-8 text-venom" />,
                title: "DISCIPLINE.",
                subtitle: "ACCOUNTABILITY.",
                description: "Fostering standard commitment on and off the field. Every play is practiced with structured focus."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-venom" />,
                title: "ON THE FIELD.",
                subtitle: "IN THE CLASSROOM.",
                description: "Total development package. Encouraging athletes to keep up their grades and maintain healthy physical habits."
              },
              {
                icon: <Trophy className="w-8 h-8 text-venom" />,
                title: "PREPARING FOR",
                subtitle: "FUTURE SUCCESS.",
                description: "Building solid athletic foundations and teamwork habits through consistent coaching and steady training."
              }
            ].map((pillar, i) => (
              <div key={i} className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-venom/30 transition-all duration-300 group relative overflow-hidden bg-black/45">
                <div className="absolute top-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-transparent via-venom/20 to-transparent" />
                
                <div className="p-4 bg-[#0A0A0A] border border-white/10 rounded-full w-max mb-6 group-hover:scale-105 group-hover:border-venom/30 transition-all duration-300">
                  {pillar.icon}
                </div>
                
                <div className="space-y-2 mt-auto">
                  <h4 className="font-display font-bold text-white text-lg uppercase leading-tight tracking-[0.05em]">
                    {pillar.title}
                  </h4>
                  <p className="font-display font-black text-venom text-base uppercase leading-tight tracking-[0.05em] mb-3">
                    {pillar.subtitle}
                  </p>
                  <p className="text-white/50 text-xs font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* AAU Programs Overview Block */}
        <div ref={programRef} className="scroll-mt-24" id="programs-view">
          <div className="glass-panel p-6 sm:p-12 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-12 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-venom uppercase tracking-[0.3em] block font-bold mb-3">
                    01 // THE PROGRAM
                  </span>
                  <h2 className="text-5xl sm:text-7xl font-display font-black uppercase leading-none tracking-tighter text-white italic">
                    THE <br className="hidden lg:block" /> PATH.
                  </h2>
                </div>
                <p className="text-xs sm:text-sm text-white/40 uppercase tracking-widest leading-relaxed mt-6">
                  Structured developmental pathways engineered to build junior flag football athletes in the Tri-State area.
                </p>
              </div>
              
              <div className="lg:col-span-8 flex flex-col divide-y divide-white/5 relative">
                {[ 
                  {n: "01", t: "Junior Academy (8U - 10U)", d: "Focus on fundamental basics: spatial coordination, foundational routes, standard stances, and building competitive confidence." },
                  {n: "02", t: "Championship Travel (12U - 14U)", d: "Advanced tactical playbooks, zone coverage recognition, specialized wide receiver tracking, and high-tier tournament brackets." },
                  {n: "03", t: "Varsity Exposure (High School)", d: "High school training metrics, media highlights assistance, and regional scouting events and local New Jersey tournaments." }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12 group hover:bg-venom/5 transition-all p-6 sm:p-8 first:pt-0 last:pb-0">
                    <span className="text-5xl sm:text-6xl font-display font-black italic text-venom/25 group-hover:text-venom group-hover:scale-105 transition-all duration-300">
                      {step.n}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-lg sm:text-xl font-display font-black text-white uppercase italic mb-2 group-hover:text-venom transition-colors">
                        {step.t}
                      </span>
                      <p className="max-w-xl text-xs text-white/50 leading-relaxed font-sans uppercase">
                        {step.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tryout Signup Secure Form Section */}
        <div ref={registerRef} className="scroll-mt-24" id="tryout-form-view">
          <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-venom/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="flex flex-col lg:flex-row gap-10 items-center justify-between">
              
              <div className="max-w-md space-y-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-venom/10 border border-venom/30 rounded font-mono text-venom text-[10px] uppercase tracking-wider font-bold">
                  ⚡ SECURE YOUR SLOT TODAY
                </div>
                <h3 className="text-3xl sm:text-5xl font-display font-black text-white tracking-tight uppercase italic leading-none">
                  READY TO REGISTER <span className="text-venom">A SLOT?</span>
                </h3>
                <p className="text-white/60 text-xs sm:text-sm font-sans leading-relaxed">
                  Submit our official AAU player prospect form. Our developmental coaches review physical bios and athletic experience to coordinate tryout invitation slot assignments.
                </p>
                
                {/* Official Tryout Grid Flyer Badge */}
                <div className="grid grid-cols-3 gap-3 border border-white/10 rounded-xl p-4 bg-[#0A0A0A]/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(193,255,0,0.05)_0%,transparent_75%)] pointer-events-none" />
                  
                  <div className="flex flex-col justify-between border-r border-white/10 pr-2">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-bold block">FEE</span>
                    <span className="text-xl font-display font-black text-venom mt-1 leading-none block">$25</span>
                    <span className="text-[8px] font-mono text-white/30 uppercase mt-1 block leading-none">TRYOUT FEE</span>
                  </div>

                  <div className="flex flex-col justify-between border-r border-white/10 px-2">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest font-bold block">DATE</span>
                    <span className="text-lg font-display font-black text-white mt-1 leading-none block">MAY 30TH</span>
                    <span className="text-[8px] font-mono text-white/30 uppercase mt-1 block leading-none">SATURDAY</span>
                  </div>

                  <div className="flex flex-col justify-between pl-2">
                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block font-bold">SESSION</span>
                    <span className="text-lg font-display font-black text-white mt-1 leading-none block">3 - 5 PM</span>
                    <span className="text-[8px] font-mono text-white/30 uppercase mt-1 block leading-none">EST TIME Zone</span>
                  </div>
                </div>

                <div className="text-[10px] font-mono text-venom uppercase tracking-wider font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-venom animate-ping" />
                  DM ON INSTAGRAM OR SUBMIT OFFICIAL FORM DIRECT BELOW
                </div>
              </div>

              {/* Form Block */}
              <div className="w-full max-w-xl bg-black/40 border border-white/5 p-6 sm:p-8 rounded-xl">
                <AnimatePresence mode="wait">
                  {inlineSubmitted ? (
                    <motion.div
                      className="text-center py-10 space-y-4 font-mono text-xs"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                    >
                      <div className="h-14 w-14 rounded-full bg-venom/10 border border-venom/40 text-venom flex items-center justify-center mx-auto mb-2">
                        <CheckCircle className="w-8 h-8 stroke-[2.5] text-venom" />
                      </div>
                      <h4 className="text-base font-display font-black text-white uppercase italic">REGISTRATION COMPLETED</h4>
                      <p className="text-white/60">
                        We have logged <span className="text-white font-bold">{inlineName}</span>'s athletic bio into our youth roster database!
                      </p>
                      <p className="text-white/40 leading-relaxed text-[10px] max-w-sm mx-auto">
                        Coach Miller and staff will dispatch official locations, tryout dates, and gear requirements to your email <span className="text-white">{inlineEmail}</span>. Get ready to train!
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleInlineSubmit} className="space-y-4 font-mono text-xs text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-white/40 block uppercase">Athlete Full Name</label>
                          <input
                            type="text"
                            required
                            value={inlineName}
                            onChange={(e) => setInlineName(e.target.value)}
                            placeholder="EX: TYLER STINGER"
                            className="w-full bg-[#050505] text-white border border-white/10 focus:border-venom rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-white/40 block uppercase">Parent / Contact Email</label>
                          <input
                            type="email"
                            required
                            value={inlineEmail}
                            onChange={(e) => setInlineEmail(e.target.value)}
                            placeholder="EX: PARENT@EMAIL.COM"
                            className="w-full bg-[#050505] text-white border border-white/10 focus:border-venom rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-white/40 block uppercase">Contact Phone Number</label>
                          <input
                            type="tel"
                            required
                            value={inlinePhone}
                            onChange={(e) => setInlinePhone(e.target.value)}
                            placeholder="EX: (201) 555-0199"
                            className="w-full bg-[#050505] text-white border border-white/10 focus:border-venom rounded-lg px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-white/40 block uppercase">Age Division Target</label>
                          <select
                            value={inlineAgeDivision}
                            onChange={(e) => setInlineAgeDivision(e.target.value)}
                            className="w-full bg-[#050505] text-white border border-white/10 focus:border-venom rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all cursor-pointer font-bold uppercase text-xs"
                          >
                            <option value="8U Recruits">8U Recruits Division</option>
                            <option value="10U Prospects">10U Prospects Division</option>
                            <option value="12U Youth Competitive">12U Youth Competitive</option>
                            <option value="14U Developmental">14U Developmental</option>
                            <option value="High School Expo">High School Exposure Team</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-white/40 block uppercase">Previous Athletic Experience</label>
                        <textarea
                          rows={2}
                          required
                          value={inlineExperience}
                          onChange={(e) => setInlineExperience(e.target.value)}
                          placeholder="EX: Tri-State Flag League 2 Seasons, Middle School JV Standout..."
                          className="w-full bg-[#050505] text-white border border-white/10 focus:border-venom rounded-lg px-3.5 py-2 focus:outline-none focus:ring-1 focus:ring-venom transition-all resize-none font-sans"
                        />
                      </div>

                      <div className="pt-2">
                        <FlowButton
                          type="submit"
                          text="Send Tryout Request"
                          variant="venom"
                          className="w-full"
                        />
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>
        </div>

        {/* Match Center & countdown block */}
        <div ref={matchRef} className="scroll-mt-24" id="match-view">
          <div className="mb-8 border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono text-venom uppercase tracking-[0.3em] block font-bold">
              03 // UPCOMING TOURNAMENTS
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter text-white uppercase mt-1 italic">
              TOURNAMENT <span className="text-stroke-venom">ROADMAP</span>
            </h2>
            <p className="text-white/40 text-xs sm:text-sm mt-2 max-w-xl font-sans">
              Where our squads compete. Explore our seasonal tour plans, division guidelines, and local roadmap.
            </p>
          </div>
          <MatchCenter />
        </div>

        {/* Roster Showcase Block */}
        <div ref={rosterRef} className="scroll-mt-24" id="roster-view">
          <div className="mb-8 border-b border-white/10 pb-4">
            <span className="text-[10px] font-mono text-venom uppercase tracking-[0.3em] block font-bold">
              04 // PLAYER ROSTER
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-black tracking-tighter text-white uppercase mt-1 italic">
              HIGHLIGHT <span className="text-stroke-venom">STANDOUTS</span>
            </h2>
            <p className="text-white/40 text-xs sm:text-sm mt-2 max-w-xl font-sans">
              Meet some of the players developed inside our programs. We focus on building strong athletes who represent our community with pride.
            </p>
          </div>
          <PlayerShowcase />
        </div>

        {/* Testimonial Quote Section */}
        <section className="relative py-20 w-full flex items-center justify-center overflow-hidden border-t border-b border-white/5 bg-[#050505]/60 text-white rounded-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(193,255,0,0.03)_0%,transparent_75%)] pointer-events-none" />
          <div className="relative z-10 text-center max-w-4xl px-6">
             <span className="text-7xl font-display font-black italic opacity-20 mb-3 block leading-none text-venom">“</span>
             <h2 className="text-[11vw] sm:text-6xl font-display font-black leading-[0.9] sm:leading-tight tracking-tight mb-6 uppercase italic text-white">
               "ALL GAS.<br className="sm:hidden" /> <span className="text-stroke-venom">NO BRAKES.</span>"
             </h2>
             <p className="text-xs sm:text-sm font-sans max-w-lg mx-auto text-white/50 leading-relaxed uppercase mb-8 tracking-wider font-medium">
               The transition from training sessions to game day is built on dedication, execution, and solid teamwork.
             </p>
             <div className="flex flex-col items-center gap-3">
                 <div className="w-12 h-[1.5px] bg-venom" />
                 <span className="text-[9px] font-mono font-black tracking-[0.5em] text-venom">TEAM MOTTO // REGIONAL AREA</span>
             </div>
          </div>
        </section>

        {/* Team Allies / Sponsorship row */}
        <div className="pt-12 border-t border-white/5 text-center space-y-6" id="sponsors-row">
          <h4 className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">
            OFFICIAL PARTNERS & LOCAL COUNCILS
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 opacity-30 hover:opacity-75 transition-opacity">
            <span className="font-display font-bold text-sm tracking-widest text-[#F5F5F5]">TRI-STATE RECREATION</span>
            <span className="font-mono font-medium text-xs tracking-tighter text-[#F5F5F5]">⚡ USA FLAG ATHLETICS</span>
            <span className="font-display font-black text-xs uppercase text-[#F5F5F5]">NEW JERSEY REGION DIVISION</span>
            <span className="font-sans font-bold text-xs italic text-[#F5F5F5]">TRI-STATE SPORT UNION</span>
          </div>
        </div>
      </main>

      {/* Prospect Recruit Modal Overlay */}
      <AnimatePresence>
        {isProspectOpen && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 z-50">
            <motion.div
              layoutId="prospectModal"
              className="bg-[#0A0A0A] border border-white/10 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                onClick={() => {
                  setIsProspectOpen(false);
                  setIsProspectSubmitted(false);
                }}
                className="absolute top-4 right-4 p-1.5 rounded-lg bg-[#111111] border border-white/10 text-white/60 hover:text-white transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-venom/10 border border-venom/20 rounded-full text-venom text-[10px] font-mono mb-3 uppercase tracking-wider">
                    <Sparkles className="w-3 animate-pulse" /> SQUAD RECRUITMENT ACTIVE
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight uppercase">
                    Join Venom Football
                  </h3>
                  <p className="text-xs text-neutral-400 font-sans mt-1">
                    Submit your athletic credentials. Registered recruits will receive trial dates and session parameters.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {isProspectSubmitted ? (
                    <motion.div
                      className="p-8 text-center bg-neutral-900/40 border border-venom/30 rounded-xl space-y-3"
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                    >
                      <div className="h-12 w-12 rounded-full bg-venom/10 flex items-center justify-center text-venom mx-auto border border-venom/30">
                        <CheckCircle className="w-6 h-6 stroke-[2.5]" />
                      </div>
                      <h4 className="font-display font-bold text-white uppercase text-base tracking-tight">APPLICATION APPROVED</h4>
                      <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                        We have logged your physical metrics. Coach Miller will parse your athletic bio and initiate a trial callback to <span className="text-white font-mono">{formEmail}</span> within 72 hours.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={submitProspect} className="space-y-4 font-mono text-xs text-left">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-neutral-400 block uppercase">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formName}
                            onChange={(e) => setFormName(e.target.value)}
                            placeholder="DANTE STING"
                            className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-venom rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-neutral-400 block uppercase">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formEmail}
                            onChange={(e) => setFormEmail(e.target.value)}
                            placeholder="RECRUIT@VENOMSTRIKE.COM"
                            className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-venom rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-neutral-400 block uppercase">Best Fit Position</label>
                          <select
                            value={formPosition}
                            onChange={(e) => setFormPosition(e.target.value)}
                            className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-venom rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all cursor-pointer"
                          >
                            <option value="Wide Receiver">Wide Receiver</option>
                            <option value="Quarterback">Quarterback</option>
                            <option value="Cornerback / Safety">Cornerback / Safety</option>
                            <option value="Blitzer / Rusher">Blitzer / Rusher</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-neutral-400 block uppercase">Roster Height</label>
                          <input
                            type="text"
                            value={formHeight}
                            onChange={(e) => setFormHeight(e.target.value)}
                            placeholder='6&apos;0"'
                            className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-venom rounded-lg px-3 py-2.5 focus:outline-none focus:ring-1 focus:ring-venom transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-neutral-400 block uppercase">Athletic Bio & Accomplishments</label>
                        <textarea
                          rows={3}
                          required
                          value={formBio}
                          onChange={(e) => setFormBio(e.target.value)}
                          placeholder="EX: CLOCKED 4.45s 40-YD DASH, VARSITY STARTER FOR SOUTH HIGHS, 12 TDS REGISTERED IN Broward FLAG LEAGUE..."
                          className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-venom rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-venom transition-all resize-none"
                        />
                      </div>

                      <div className="pt-2">
                        <FlowButton
                          type="submit"
                          text="Send Recruit Profile"
                          variant="venom"
                          className="w-full"
                        />
                      </div>
                    </form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Modern Minimalist Athletic Footer */}
      <footer className="bg-[#0A0A0A] border-t border-white/10 py-12 relative overflow-hidden" id="page-footer">
        <div className="absolute top-0 right-0 w-64 h-64 bg-venom/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 font-mono text-xs">
          
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2.5">
              <img 
                src={venomCrestPath}
                alt="Venom Elite AAU Logo"
                className="w-10 h-10 object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="font-display text-sm font-black text-white uppercase tracking-tight italic">Venom Elite AAU Football</span>
            </div>
            <p className="text-[10px] text-white/40 font-sans leading-relaxed">
              Official elite membership and recruitment hub. Registered charter association of Tri-State Athletics and New Jersey Sports Commission. Speed, focus, and mentorship.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="text-[10px] text-white/40 block uppercase tracking-wider">Practice Pitch</span>
              <ul className="space-y-1 text-white/60">
                <li className="flex items-center gap-1.5"><MapPin className="w-3" /> Tri-State Sports Park</li>
                <li>Tri-State, New Jersey</li>
              </ul>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] text-white/40 block uppercase tracking-wider">Team Admin Contact</span>
              <ul className="space-y-1 text-white/60">
                <li className="flex items-center gap-1.5 hover:text-white transition-colors"><Mail className="w-3" /> info@venomelite.com</li>
                <li className="flex items-center gap-1.5 hover:text-white transition-colors"><Phone className="w-3" /> (954) 555-0182</li>
              </ul>
            </div>

            <div className="space-y-2 col-span-2 sm:col-span-1">
              <span className="text-[10px] text-white/40 block uppercase tracking-wider">Logistics Badge</span>
              <div className="flex items-center gap-1 text-venom">
                <ShieldCheck className="w-4 h-4" />
                <span className="text-[9px] font-bold">REGIONAL APPROVED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Live status bar at the of the footer matching Design HTML */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/40">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <span className="tracking-wider text-venom">RECORD: 14 - 2 - 0</span>
          </div>
          <div className="flex gap-4 items-center">
            <span>FOLLOW / @VENOMELITEFF</span>
            <span>•</span>
            <span>© 2026 VENOM SPORTS MEDIA</span>
          </div>
        </div>
      </footer>

    </div>
  );
}

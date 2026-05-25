import { Player, Match, MerchItem } from './types';

export const PLAYERS_DATA: Player[] = [
  {
    id: 'p1',
    name: 'Dante Jenkins',
    number: '07',
    position: 'Quarterback',
    height: "6'1\"",
    weight: '195 lbs',
    experience: '5 Seasons',
    hometown: 'Tampa, FL',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400&h=400',
    stats: {
      passingYards: 3150,
      touchdowns: 42,
      interceptions: 4,
      rushingYards: 480
    },
    venomRating: {
      speed: 92,
      agility: 95,
      catching: 78,
      defense: 65
    },
    bio: 'An exceptional leader of our team offense. Dante is known for his lightning-fast releases, smart defensive reads, and signature downfield pass accuracy. Holds the regional tournament single-season passing record.'
  },
  {
    id: 'p2',
    name: 'Kaleb Mercer',
    number: '11',
    position: 'Wide Receiver',
    height: "5'11\"",
    weight: '178 lbs',
    experience: '3 Seasons',
    hometown: 'Miami, FL',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400&h=400',
    stats: {
      receptions: 84,
      touchdowns: 24,
      rushingYards: 150,
      flagPulls: 12
    },
    venomRating: {
      speed: 98,
      agility: 97,
      catching: 96,
      defense: 70
    },
    bio: 'Kaleb is incredibly fast, clocking excellent sprint times in athletic combines. His explosive acceleration off the line makes him an excellent deep option in 1-on-1 matchups. One of Florida’s model young playmakers.'
  },
  {
    id: 'p3',
    name: 'Jaxson Cruz',
    number: '55',
    position: 'Rusher / Blitzer',
    height: "6'2\"",
    weight: '210 lbs',
    experience: '4 Seasons',
    hometown: 'Orlando, FL',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400',
    stats: {
      sacks: 28,
      flagPulls: 67,
      deflections: 14,
      touchdowns: 2
    },
    venomRating: {
      speed: 93,
      agility: 88,
      catching: 75,
      defense: 98
    },
    bio: 'A defensive powerhouse and excellent speed rusher. Jaxson uses outstanding lateral speed and quick moves to disrupt opposing backfields. Crowned defensive MVP of the Southeast Championship.'
  },
  {
    id: 'p4',
    name: 'Marcus Sterling',
    number: '24',
    position: 'Cornerback / Safety',
    height: "6'0\"",
    weight: '185 lbs',
    experience: '4 Seasons',
    hometown: 'Jacksonville, FL',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400&h=400',
    stats: {
      interceptions: 11,
      deflections: 22,
      flagPulls: 45,
      touchdowns: 3
    },
    venomRating: {
      speed: 95,
      agility: 94,
      catching: 91,
      defense: 96
    },
    bio: 'Highly regarded for his court vision and ability to close passing gaps instantly. Marcus reads opposing offenses with extreme detail, consistently forcing turnovers and deflecting key throws.'
  },
  {
    id: 'p5',
    name: 'Nolan Vance',
    number: '88',
    position: 'Slot Receiver / Center',
    height: "5'10\"",
    weight: '180 lbs',
    experience: '2 Seasons',
    hometown: 'Fort Lauderdale, FL',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400&h=400',
    stats: {
      receptions: 92,
      touchdowns: 15,
      passingYards: 120,
      rushingYards: 210
    },
    venomRating: {
      speed: 90,
      agility: 96,
      catching: 98,
      defense: 72
    },
    bio: 'The reliable anchor in our short passing game. Nolan has exceptional hand-eye coordination with zero dropped passes in pressure situations. Excellent coachability and high spatial awareness.'
  },
  {
    id: 'p6',
    name: 'Tyson Brody',
    number: '42',
    position: 'Linebacker / Rusher',
    height: "6'3\"",
    weight: '220 lbs',
    experience: '6 Seasons',
    hometown: 'Tallahassee, FL',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400',
    stats: {
      flagPulls: 85,
      sacks: 14,
      interceptions: 3,
      deflections: 9
    },
    venomRating: {
      speed: 87,
      agility: 85,
      catching: 82,
      defense: 95
    },
    bio: 'The communicative leader of our defense. Tyson is a tactical player who adjusts our alignment and coverage patterns instantly to match dynamic offenses. Master of mid-zone positioning.'
  }
];

export const MATCHES_DATA: Match[] = [
  {
    id: 'm1',
    opponent: 'Tampa Bay Hurricanes',
    opponentLogo: '🌀',
    date: '2026-06-12',
    time: '7:30 PM EST',
    location: 'Sarasota Sports Complex - Field 1',
    status: 'upcoming',
    isHome: true
  },
  {
    id: 'm2',
    opponent: 'Miami Blitz Club',
    opponentLogo: '⚡',
    date: '2026-06-25',
    time: '6:00 PM EST',
    location: 'Tropical Park Athletic Field, Miami',
    status: 'upcoming',
    isHome: false
  },
  {
    id: 'm3',
    opponent: 'Orlando Thunder Football',
    opponentLogo: '⛈️',
    date: '2026-05-20',
    time: '8:00 PM EST',
    location: 'Broward Athletic Center, Fort Lauderdale',
    status: 'completed',
    isHome: true,
    score: {
      venom: 32,
      opponent: 18
    },
    quarterScores: [
      [8, 14, 0, 10], // Venom quarters
      [6, 6, 0, 6]    // Opponent quarters
    ],
    mvp: 'Dante Jenkins (5 Passing TDs)'
  },
  {
    id: 'm4',
    opponent: 'Jacksonville Reapers',
    opponentLogo: '💀',
    date: '2026-05-10',
    time: '2:30 PM EST',
    location: 'DIAA Municipal Complex, Jax',
    status: 'completed',
    isHome: false,
    score: {
      venom: 28,
      opponent: 24
    },
    quarterScores: [
      [7, 7, 7, 7],
      [12, 0, 6, 6]
    ],
    mvp: 'Marcus Sterling (Game-winning INT with 12s left)'
  },
  {
    id: 'm5',
    opponent: 'Gulf Coast Spartans',
    opponentLogo: '🛡️',
    date: '2026-04-28',
    time: '4:00 PM EST',
    location: 'Broward Athletic Center, Fort Lauderdale',
    status: 'completed',
    isHome: true,
    score: {
      venom: 45,
      opponent: 12
    },
    quarterScores: [
      [14, 14, 7, 10],
      [0, 6, 0, 6]
    ],
    mvp: 'Kaleb Mercer (3 Receptions, 3 TDs, 185 total yards)'
  }
];

export const MERCH_DATA: MerchItem[] = [
  {
    id: 'g1',
    name: 'Venom Elite Team Game Jersey',
    price: 65,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&q=80&w=400&h=400',
    description: 'Pro-grade high tension flag football jersey with moisture-wicking technology. Featuring a digital sublimated neon grid design and active body ventilation.',
    colors: ['#050505', '#39FF14'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'g2',
    name: 'Pro-Grip Premium Receiver Gloves',
    price: 45,
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?auto=format&fit=crop&q=80&w=400&h=400',
    description: 'Ultra-sticky neon green palm coating engineered for zero-spin pass control and absolute traction in humid Florida evenings.',
    colors: ['#39FF14', '#171717'],
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'g3',
    name: 'Venom Team Thermal Workout Hoodie',
    price: 75,
    category: 'Apparel',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=400&h=400',
    description: 'Heavyweight matte-black team outer layer with neon-green accents, comfortable thumbholes, and warm insulated hood.',
    colors: ['#0D0D0D'],
    sizes: ['M', 'L', 'XL', 'XXL']
  },
  {
    id: 'g4',
    name: 'Pro Speed-Wrap Flag Belt Set',
    price: 30,
    category: 'Gear',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&q=80&w=400&h=400',
    description: 'Quick-release tournament legal belt mechanism equipped with impact-resistant polyurethane neon green flags that make a crisp pop upon separation.',
    colors: ['#39FF14']
  },
  {
    id: 'g5',
    name: 'Venom Performance Technical Headband',
    price: 18,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=400&h=400',
    description: 'High-friction sweat barrier designed to fit sleekly during training or match games. Dual green/black reversible design.',
    colors: ['#39FF14', '#050505']
  }
];

export const VENOM_MOCK_TACTICS = [
  {
    name: 'Corner Post Blast',
    type: 'Offensive Play',
    description: 'Slot runs a shallow decoy drag while WR1 executes a high-speed post corner route, catching the ball high in the end-zone corner.',
    difficulty: 'Intermediate'
  },
  {
    name: 'Safety Cross Blitz',
    type: 'Defensive Scheme',
    description: 'Double hybrid rushers cross paths on the snap to confuse the quarterback’s blind side orientation, forcing a rapid release.',
    difficulty: 'Advanced'
  },
  {
    name: 'Center Option Wheel',
    type: 'Offensive Trick',
    description: 'Quarterback executes a mock handoff, rolls left, and reverse-pitches to the center running a wide wheel option route.',
    difficulty: 'Elite'
  }
];

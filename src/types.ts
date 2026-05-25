export interface Player {
  id: string;
  name: string;
  number: string;
  position: string;
  height: string;
  weight: string;
  experience: string;
  hometown: string;
  image: string; // fallback if needed
  stats: {
    touchdowns?: number;
    receptions?: number;
    interceptions?: number;
    flagPulls?: number;
    passingYards?: number;
    rushingYards?: number;
    sacks?: number;
    deflections?: number;
  };
  venomRating: {
    speed: number;
    agility: number;
    catching: number;
    defense: number;
  };
  bio: string;
}

export interface Match {
  id: string;
  opponent: string;
  opponentLogo: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed';
  isHome: boolean;
  score?: {
    venom: number;
    opponent: number;
  };
  quarterScores?: number[][]; // [venomScores, opponentScores] per quarter
  mvp?: string;
}

export interface MerchItem {
  id: string;
  name: string;
  price: number;
  category: 'Apparel' | 'Gear' | 'Accessories';
  image: string;
  description: string;
  colors: string[];
  sizes?: string[];
}

export interface PlayChalkboardNode {
  id: string;
  type: 'offense' | 'defense' | 'ball';
  label: string;
  x: number; // percentage from left (0 to 100)
  y: number; // percentage from top (0 to 100)
}

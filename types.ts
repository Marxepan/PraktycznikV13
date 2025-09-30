export type Level = 'easy' | 'medium' | 'hard' | 'master';
export type SymbolSet = 'animals' | 'fruits' | 'objects';
export type ColorScheme = 'light' | 'dark';
export type MasterMode = 'numbers' | 'patterns';

export interface CardData {
  id: number;
  symbol: string;
}

export type GameState = 'selecting' | 'playing' | 'won' | 'lost';

export interface LevelConfig {
  name: string;
  pairs: number;
  gridCols: number;
  gridClass: string;
  timeLimit: number; // in seconds
}

export interface SettingsContextType {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  themeName: string;
  setThemeName: (name: string) => void;
  symbolSet: SymbolSet;
  setSymbolSet: (set: SymbolSet) => void;
  soundEnabled: boolean;
  toggleSound: () => void;
}

export interface HighScore {
  name: string;
  moves: number;
  date: string;
}

export type HighScores = Record<Level, HighScore[]>;
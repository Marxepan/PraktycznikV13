import type { ColorScheme } from '../types';

export interface ThemeColors {
  '--color-primary-400': string; // e.g., '96 165 250'
  '--color-primary-500': string;
  '--color-primary-600': string;
  '--color-bg': string;
  '--color-text': string;
  '--color-muted-text': string;
  '--color-card-bg': string;
  '--color-card-face-bg': string;
}

export interface Theme {
  name: string;
  displayName: string;
  light: ThemeColors;
  dark: ThemeColors;
}

export const THEMES: Record<string, Theme> = {
  sky: {
    name: 'sky',
    displayName: 'Błękitny',
    light: {
      '--color-primary-400': '96 165 250',   // sky-400
      '--color-primary-500': '59 130 246',   // sky-500
      '--color-primary-600': '37 99 235',    // sky-600
      '--color-bg': '241 245 249',           // slate-100
      '--color-text': '15 23 42',            // slate-900
      '--color-muted-text': '100 116 139',   // slate-500
      '--color-card-bg': '255 255 255',      // white
      '--color-card-face-bg': '241 245 249', // slate-100
    },
    dark: {
      '--color-primary-400': '96 165 250',   // sky-400
      '--color-primary-500': '59 130 246',   // sky-500
      '--color-primary-600': '37 99 235',    // sky-600
      '--color-bg': '15 23 42',              // slate-900
      '--color-text': '226 232 240',         // slate-200
      '--color-muted-text': '148 163 184',   // slate-400
      '--color-card-bg': '30 41 59',         // slate-800
      '--color-card-face-bg': '51 65 85',    // slate-700
    },
  },
  rose: {
    name: 'rose',
    displayName: 'Różany',
    light: {
      '--color-primary-400': '251 113 133',  // rose-400
      '--color-primary-500': '244 63 94',    // rose-500
      '--color-primary-600': '225 29 72',    // rose-600
      '--color-bg': '255 241 242',
      '--color-text': '15 23 42',
      '--color-muted-text': '100 116 139',
      '--color-card-bg': '255 255 255',
      '--color-card-face-bg': '254 226 226',
    },
    dark: {
      '--color-primary-400': '251 113 133',  // rose-400
      '--color-primary-500': '244 63 94',    // rose-500
      '--color-primary-600': '225 29 72',    // rose-600
      '--color-bg': '26 15 23',              // dark rose bg
      '--color-text': '253 232 238',         // light rose text
      '--color-muted-text': '163 148 152',   // muted rose text
      '--color-card-bg': '59 30 41',         // dark rose card
      '--color-card-face-bg': '85 51 65',    // dark rose card face
    },
  },
  emerald: {
    name: 'emerald',
    displayName: 'Szmaragdowy',
    light: {
      '--color-primary-400': '52 211 153',   // emerald-400
      '--color-primary-500': '16 185 129',   // emerald-500
      '--color-primary-600': '5 150 105',    // emerald-600
      '--color-bg': '240 253 244',           // light green bg
      '--color-text': '15 23 42',
      '--color-muted-text': '100 116 139',
      '--color-card-bg': '255 255 255',
      '--color-card-face-bg': '220 252 231',
    },
    dark: {
      '--color-primary-400': '52 211 153',   // emerald-400
      '--color-primary-500': '16 185 129',   // emerald-500
      '--color-primary-600': '5 150 105',    // emerald-600
      '--color-bg': '12 28 23',              // dark emerald bg
      '--color-text': '209 250 229',         // light emerald text
      '--color-muted-text': '156 163 175',   // slate-400
      '--color-card-bg': '20 50 40',         // dark emerald card
      '--color-card-face-bg': '31 75 60',    // dark emerald card face
    },
  },
  violet: {
    name: 'violet',
    displayName: 'Fioletowy',
    light: {
      '--color-primary-400': '167 139 250',  // violet-400
      '--color-primary-500': '139 92 246',   // violet-500
      '--color-primary-600': '124 58 237',   // violet-600
      '--color-bg': '245 243 255',           // light violet bg
      '--color-text': '15 23 42',
      '--color-muted-text': '100 116 139',
      '--color-card-bg': '255 255 255',
      '--color-card-face-bg': '237 233 254',
    },
    dark: {
      '--color-primary-400': '167 139 250',  // violet-400
      '--color-primary-500': '139 92 246',   // violet-500
      '--color-primary-600': '124 58 237',   // violet-600
      '--color-bg': '24 16 35',              // dark violet bg
      '--color-text': '237 233 254',         // light violet text
      '--color-muted-text': '161 161 170',   // zinc-400
      '--color-card-bg': '46 31 66',         // dark violet card
      '--color-card-face-bg': '67 56 82',    // dark violet card face
    },
  },
};

export const applyTheme = (themeName: string, colorScheme: ColorScheme) => {
    const theme = THEMES[themeName] || THEMES.sky;
    const colors = theme[colorScheme];
    const root = document.documentElement;

    Object.entries(colors).forEach(([key, value]) => {
        root.style.setProperty(key, value);
    });

    if (colorScheme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
};

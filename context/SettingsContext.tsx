import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import type { SettingsContextType, ColorScheme, SymbolSet } from '../types';
import { applyTheme, THEMES } from '../utils/themes';

const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

export const SettingsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [colorScheme, setColorSchemeState] = useState<ColorScheme>('dark');
  const [themeName, setThemeNameState] = useState<string>('sky');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [symbolSet, setSymbolSet] = useState<SymbolSet>('animals');

  useEffect(() => {
    const storedColorScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    const storedThemeName = localStorage.getItem('themeName') as string | null;
    const storedSound = localStorage.getItem('soundEnabled');
    const storedSymbolSet = localStorage.getItem('symbolSet') as SymbolSet | null;
    
    const initialColorScheme = storedColorScheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    const initialThemeName = storedThemeName && THEMES[storedThemeName] ? storedThemeName : 'sky';

    setColorSchemeState(initialColorScheme);
    setThemeNameState(initialThemeName);
    applyTheme(initialThemeName, initialColorScheme);

    if (storedSound !== null) {
      setSoundEnabled(JSON.parse(storedSound));
    }
    if (storedSymbolSet) {
      setSymbolSet(storedSymbolSet);
    }
  }, []);
  
  const setColorScheme = useCallback((scheme: ColorScheme) => {
    setColorSchemeState(scheme);
    localStorage.setItem('colorScheme', scheme);
    applyTheme(themeName, scheme);
  }, [themeName]);

  const setThemeName = useCallback((name: string) => {
    setThemeNameState(name);
    localStorage.setItem('themeName', name);
    applyTheme(name, colorScheme);
  }, [colorScheme]);


  const toggleSound = useCallback(() => {
    setSoundEnabled(prev => {
      const newState = !prev;
      localStorage.setItem('soundEnabled', JSON.stringify(newState));
      return newState;
    });
  }, []);
  
  const handleSetSymbolSet = useCallback((set: SymbolSet) => {
    setSymbolSet(set);
    localStorage.setItem('symbolSet', set);
  }, []);


  return (
    <SettingsContext.Provider value={{ colorScheme, setColorScheme, themeName, setThemeName, soundEnabled, toggleSound, symbolSet, setSymbolSet: handleSetSymbolSet }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = (): SettingsContextType => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
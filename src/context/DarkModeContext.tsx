import { createContext, useState, useContext, useEffect } from 'react';

interface DarkModeProps {
  children: React.ReactNode;
}

export interface DarkModeContext {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const initialState: DarkModeContext = {
  darkMode: false,
  toggleDarkMode: () => {
    return;
  },
};

const DarkModeContext = createContext<DarkModeContext>(initialState);

export const DarkModeProvider = ({ children }: DarkModeProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    updateDarkMode(!darkMode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);
  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);

const updateDarkMode = (darkMode: boolean) => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.theme = 'light';
  }
};

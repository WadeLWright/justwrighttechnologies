import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function DarkModeToggle({ onThemeChange }: { onThemeChange: (theme: 'light' | 'dark') => void }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { setPrimaryColor, setSecondaryColor } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
    onThemeChange(theme);

    if (theme === 'dark') {
      setPrimaryColor('#ffffff');
      setSecondaryColor('#000000');
    } else {
      setPrimaryColor('#000000');
      setSecondaryColor('#ffffff');
    }
  }, [theme, onThemeChange, setPrimaryColor, setSecondaryColor]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}

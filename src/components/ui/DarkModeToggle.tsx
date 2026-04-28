"use client";

import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

export function DarkModeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-muted/50 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-foreground/70" />
      ) : (
        <Moon className="w-5 h-5 text-foreground/70" />
      )}
    </button>
  );
}
'use client';

import SunIcons from '@/components/icons/SunIcons';
import MoonIcon from '@/components/icons/MoonIcon';

import { useEffect, useState } from 'react';

const initialThemeState = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme')) {
      return localStorage.getItem('theme') as 'light' | 'dark';
    }
    return window.matchMedia('(prefers-color-theme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return 'dark';
};
const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(initialThemeState);

  console.log('antes del loading..', theme);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (!hasMounted) {
    return <>Cargando...</>;
  }

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <header className="flex items-center gap-2 space-x-2 mb-10">
      <h1 className="dark:text-white text-3xl text-blue-950 font-bold flex-grow">
        Buscador
      </h1>
      <span className="uppercase dark:text-white text-blue-950 ">
        {theme === 'light' ? 'dark mode' : 'light mode'}
      </span>

      <button onClick={handleTheme}>
        {theme === 'light' ? (
          <MoonIcon className="dark:fill-white fill-blue-950" />
        ) : (
          <SunIcons className="dark:fill-white fill-blue-950" />
        )}
      </button>
    </header>
  );
};

export default Navbar;

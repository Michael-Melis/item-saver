import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button
      variant='text'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <DarkModeIcon className='text-gray-dark' />
      ) : (
        <LightModeIcon className='text-yellow ' />
      )}
    </Button>
  );
};

export default ThemeToggler;

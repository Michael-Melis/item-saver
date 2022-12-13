import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import { useAppDispatch } from '../../hooks/useReduxToolkit';
import { changeToDarkTheme, changeToLightTheme } from '../../store/themeSlice';
import H6 from '../elements/headers/Header6';

const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleToggleTheme = () => {
    setTheme(theme === 'system' || theme === 'light' ? 'dark' : 'light');
    dispatch(theme === 'light' ? changeToDarkTheme() : changeToLightTheme());
  };
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button variant='text' onClick={handleToggleTheme}>
      {theme && theme === 'light' ? (
        <>
          <DarkModeIcon className='text-gray-dark' />
          <H6 content='theme.dark' styles='ml-1' />
        </>
      ) : (
        <>
          <LightModeIcon className='text-yellow ' />
          <H6 content='theme.light' styles='ml-1' />
        </>
      )}
    </Button>
  );
};

export default ThemeToggler;

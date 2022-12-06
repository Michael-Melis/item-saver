import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxToolkit';
import { changeToDarkTheme, changeToLightTheme } from '../../store/themeSlice';

const ThemeToggler = () => {
  const skinRedux = useAppSelector((state) => state.theme.skin);
  const dispatch = useAppDispatch();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleToggleTheme = () => {
    setTheme(theme === 'system' || theme === 'light' ? 'dark' : 'light');
    dispatch(
      skinRedux === 'light' ? changeToDarkTheme() : changeToLightTheme(),
    );
  };

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button variant='text' onClick={handleToggleTheme}>
      {theme && theme === 'light' ? (
        <DarkModeIcon className='text-gray-dark' />
      ) : (
        <LightModeIcon className='text-yellow ' />
      )}
    </Button>
  );
};

export default ThemeToggler;

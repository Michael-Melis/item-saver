import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Button } from '@mui/material';

import H6 from '../elements/headers/Header6';
import { useAppDispatch, useAppSelector } from '../../hooks/useReduxToolkit';
import { changeToDarkTheme, changeToLightTheme } from '../../store/themeSlice';

const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const muiTheme = useAppSelector((state) => state.theme.skin);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    if (theme === 'light') {
      dispatch(changeToDarkTheme());
    } else {
      dispatch(changeToLightTheme());
    }
  };
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Button variant='text' onClick={handleToggleTheme}>
      {muiTheme && muiTheme === 'light' ? (
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

import React, { useMemo } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../footer';
import Navbar from '../navigation/Navbar';
import getDesignTokens from '../../config/theme';
import { useAppSelector } from '../../hooks/useReduxToolkit';

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props): JSX.Element => {
  const actualThemeSkin = useAppSelector((state) => state.theme.skin);
  const muiTheme = useMemo(
    () => createTheme(getDesignTokens(actualThemeSkin)),
    [actualThemeSkin],
  );
  return (
    <ThemeProvider theme={muiTheme}>
      <div className='min-h-screen flex flex-col justify-between bg-gray-light dark:bg-gray-dark'>
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default LayoutWrapper;

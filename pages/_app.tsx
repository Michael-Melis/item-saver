import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { useMemo, useState, useEffect } from 'react';
// import { PaletteMode } from '@mui/material';
import createEmotionCache from '../config/createEmotionCache';
import '../styles/globals.css';
import store from '../store';
import { MyAppProps } from '../@types/pages/app';
import getDesignTokens from '../config/theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = (props: MyAppProps) => {
  const { theme: skin } = useTheme();
  const [mode, setMode] = useState<any>('dark');

  // useEffect(() => {
  //   setMode(skin);
  // }, []);

  // const colorMode = useMemo(
  //   () => ({
  //     // The dark mode switch would invoke this method
  //     toggleColorMode: () => {
  //       setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
  //     },
  //   }),
  //   [],
  // );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  console.log(skin);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <NextThemeProvider enableSystem={true} attribute='class'>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>
          <ThemeProvider theme={theme}>
            <button>{mode}</button>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </NextThemeProvider>
  );
};
export default appWithTranslation(App);

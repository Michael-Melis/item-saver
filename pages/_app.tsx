import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import createEmotionCache from '../config/createEmotionCache';
import theme from '../config/theme';
import '../styles/globals.css';
import store from '../store';
import { MyAppProps } from '../@types/pages/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = (props: MyAppProps) => {
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

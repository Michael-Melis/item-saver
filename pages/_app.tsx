import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import createEmotionCache from '../config/createEmotionCache';
import '../styles/globals.css';
import store from '../store';
import { MyAppProps } from '../@types/pages/app';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

const App = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <NextThemeProvider enableSystem={false} attribute='class'>
      <Provider store={store}>
        <CacheProvider value={emotionCache}>
          <Head>
            <meta
              name='viewport'
              content='initial-scale=1, width=device-width'
            />
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </CacheProvider>
      </Provider>
    </NextThemeProvider>
  );
};
export default appWithTranslation(App);

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import Footer from '../components/footer';
import Navbar from '../components/navigation/Navbar';
import { useAppSelector } from '../hooks/useReduxToolkit';
import Test from './test';
import getDesignTokens from '../config/theme';

const Home = () => {
  const mode = useAppSelector((state) => state.theme.skin);

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <div className='min-h-screen flex flex-col justify-between bg-gray-light dark:bg-gray-dark'>
        <Navbar />
        <Test />
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default Home;

export async function getStaticProps({ locale = 'en' }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

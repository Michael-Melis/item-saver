import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';

import { useTranslation } from 'react-i18next';
import { GetStaticProps } from 'next/types';
import { useAppSelector } from '../hooks/useReduxToolkit';
// import Test from './test';
import getDesignTokens from '../config/theme';
import LayoutWrapper from '../components/layout';
import H1 from '../components/elements/headers/Header1';

const Home = () => {
  const mode = useAppSelector((state) => state.theme.skin);
  const { t } = useTranslation();

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <LayoutWrapper>
        <div className='flex flex-col justify-center items-center'>
          <H1 content='auth.login' />
          <Link href={'/test/test'}>
            <Button>{t('auth.login')}</Button>
          </Link>
        </div>
      </LayoutWrapper>
    </ThemeProvider>
  );
};

export default Home;
export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

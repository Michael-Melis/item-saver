import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import Link from 'next/link';
// import About from './about';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import H1 from '../components/elements/headers/Header1';
import LayoutWrapper from '../components/layout';

const Main = () => {
  const { t } = useTranslation();
  return (
    <LayoutWrapper>
      <div className='flex flex-col items-center'>
        MAIN PAGE
        <H1 content='main.signeOut' />
        <Link href={'/'}>
          <Button color='primary'>{t('main.backButton')}</Button>
        </Link>
      </div>
    </LayoutWrapper>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
export default Main;

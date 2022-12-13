import { Button } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import H1 from '../components/elements/headers/Header1';
import LayoutWrapper from '../components/layout';

const About = () => {
  const { t } = useTranslation();
  return (
    <LayoutWrapper>
      <div className='flex flex-col items-center'>
      ABOUT PAGE
        <H1 content='main.title' />
        <Link href={'/main'}>
          <Button color='primary'>{t('auth.logout')}</Button>
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

export default About;

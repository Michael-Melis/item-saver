import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { GetStaticProps } from 'next/types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import H1 from '../../components/elements/headers/Header1';
import LayoutWrapper from '../../components/layout/index';

const Test = () => {
  const { t } = useTranslation();
  return (
    <LayoutWrapper>
      <div className='flex flex-col justify-center items-center'>
        <Link href={'/'}>
          <H1 content='auth.signout' />
        </Link>
        <h1>{t('auth.signout')}</h1>
      </div>
    </LayoutWrapper>
  );
};
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || 'en', ['common'])),
  },
});
export default Test;

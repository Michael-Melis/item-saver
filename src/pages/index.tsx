import { Button } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';

import { GetStaticProps } from 'next/types';
import H1 from '../components/elements/headers/Header1';

import LayoutWrapper from '../components/layout';

const Home = () => (
  <LayoutWrapper>
    <div className='flex flex-col items-center'>
      INDEX PAGE
      <H1 content='auth.login' />
      <Link href={'/about'}>
        <Button color='primary'>
          <H1 content='auth.login' />
        </Button>
      </Link>
    </div>
  </LayoutWrapper>
);
export const getStaticProps: GetStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
export default Home;

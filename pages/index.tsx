import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Footer from '../components/footer';
import Navbar from '../components/navigation/Navbar';
import Test from './test';

const Home = () => (
  <div className='min-h-screen flex flex-col justify-between bg-gray-light dark:bg-gray-dark'>
    <Navbar />
    <Test />
    <Footer />
  </div>
);
export default Home;

export async function getStaticProps({ locale = 'en' }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

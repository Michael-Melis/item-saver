import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Footer from '../components/footer';
import Navbar from '../components/navigation/Navbar';

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const Home = () => (
  <div className='min-h-screen flex flex-col justify-between bg-gray-light dark:bg-gray-dark'>
    <Navbar />
    <Footer />
  </div>
);
export default Home;

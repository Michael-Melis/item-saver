import React from 'react';
import Footer from '../footer';
import Navbar from '../navigation/Navbar';

type Props = {
  children: React.ReactNode;
};

const LayoutWrapper = ({ children }: Props): JSX.Element => (
  <div className='min-h-screen flex flex-col justify-between bg-gray-light dark:bg-gray-dark'>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default LayoutWrapper;

import React from 'react';
import LanguageSelector from './LanguageSelector';
import ThemeToggler from './ThemeToggler';

const Navbar = () => (
  <div className='flex justify-end'>
    <ThemeToggler />
    <LanguageSelector />
  </div>
);

export default Navbar;

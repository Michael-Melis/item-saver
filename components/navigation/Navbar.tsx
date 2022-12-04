import React from 'react';
import LanguageSelector from './LanguageSelector';
import ThemeToggler from './ThemeToggler';

const Navbar = () => (
  <div>
    <ThemeToggler />
    <LanguageSelector />
  </div>
);

export default Navbar;

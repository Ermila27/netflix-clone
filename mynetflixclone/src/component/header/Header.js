  import React, { useState } from 'react';
import logo from '../../asset/img/logo.png';
import { Link } from 'react-scroll';
import DoorbellIcon from '@mui/icons-material/Doorbell';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 flex items-center justify-between z-50 bg-black  text-red-800 p-4">
      <div className="flex items-center">
        <img src={logo} className="w-20" alt="logo" />
       <ul className="hidden md:flex ml-10 gap-4 font-semibold text-lg">
  <li>
    <button className="genre-btn px-4 py-2 rounded-lg bg-gadient-to-r from-purple-600 to-indigo-600 text-red-600 hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      <Link to="trending" smooth={true} duration={500}>Trending</Link>
    </button>
  </li>
  <li>
    <button className="genre-btn px-4 py-2 rounded-lg b text-red-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      <Link to="romance" smooth={true} duration={500}>Romance</Link>
    </button>
  </li>
  <li>
    <button className="genre-btn px-4 py-2 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 text-red-600 hover:from-gray-900 hover:to-black transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      <Link to="horror" smooth={true} duration={500}>Horror</Link>
    </button>
  </li>
  <li>
    <button className="genre-btn px-4 py-2 rounded-lg  text-red-400 hover:from-amber-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      <Link to="comedy" smooth={true} duration={500}>Comedy</Link>
    </button>
  </li>
  <li>
    <button className="genre-btn px-4 py-2 rounded-lg bg-gradiet-to-r from-cyan-500 to-blue-600 text-red-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      <Link to="animation" smooth={true} duration={500}>Animation</Link>
    </button>
  </li>
  <li>
    <button className="genre-btn px-4 py-2 rounded-lg bg-gradien-to-r from-yellow-600 to-amber-600 text-red-600 hover:from-yellow-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      <Link to="western" smooth={true} duration={500}>Western</Link>
    </button>
  </li>
  <li>
    <button className="genre-btn px-4 py-2 rounded-lg bg-gradiet-to-r from-indigo-600 to-purple-700 text-red-600 hover:from-indigo-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
      <Link to="mystery" smooth={true} duration={500}>Mystery</Link>
    </button>
  </li>
</ul>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-4">
          <SearchIcon />
          <DoorbellIcon />
          <AccountBoxIcon />
          <ArrowDropDownIcon />
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button className="absolute top-4 right-4" onClick={toggleMenu}>
            <CloseIcon />
          </button>
          <ul className="flex flex-col gap-5 font-semibold text-2xl">
            <li className="hover:text-white transition-colors duration-300"><Link to="trending" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
            <li className="hover:text-white transition-colors duration-300"><Link to="romance" smooth={true} duration={500} onClick={toggleMenu}>Romance</Link></li>
            <li className="hover:text-white transition-colors duration-300"><Link to="horror" smooth={true} duration={500} onClick={toggleMenu}>Horror</Link></li>
            <li className="hover:text-white transition-colors duration-300"><Link to="comedy" smooth={true} duration={500} onClick={toggleMenu}>Comedy</Link></li>
            <li className="hover:text-white transition-colors duration-300"><Link to="animation" smooth={true} duration={500} onClick={toggleMenu}>Animation</Link></li>
            <li className="hover:text-white transition-colors duration-300"><Link to="western" smooth={true} duration={500} onClick={toggleMenu}>Western</Link></li>
            <li className="hover:text-white transition-colors duration-300"><Link to="mystery" smooth={true} duration={500} onClick={toggleMenu}>Mystery</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
}


export default Header;
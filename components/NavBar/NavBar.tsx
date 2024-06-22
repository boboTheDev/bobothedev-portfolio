"use client"
// components/NavBar.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='fixed w-full h-24 bg-white grid grid-cols-2 lg:grid-cols-3 items-center px-10 2xl:px-16'>
      <div className='flex items-center'>
        <Link href='/'>
          <span className='flex ml-4 text-xl font-bold'>BoBo_TheDev</span>
        </Link>
      </div>
      {/* hamburger menu */}
      <div onClick={handleMenu} className='sm:hidden flex justify-end text-2xl font-bold mt-1'>
        <FontAwesomeIcon icon={faBars} className='text-blue hover:text-blue-600' />
      </div>
      <div className='flex justify-center'>
        <ul className='hidden sm:flex space-x-10 text-blue text-xl sm:text-sm sm:space-x-4 '>
          <Link href='/about'>
            <li className='uppercase hover:text-gray-600'>About</li>
          </Link>
          <Link href='/contact'>
            <li className='uppercase hover:text-gray-600'>Contact</li>
          </Link>
          <Link href='/services'>
            <li className='uppercase hover:text-gray-600'>Services</li>
          </Link>
          <Link href='/blog'>
            <li className='uppercase hover:text-gray-600'>Blog</li>
          </Link>
        </ul>
      </div>
      <div className='hidden lg:flex justify-end space-x-4'>
        <Link href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faFacebook} className='text-blue hover:text-blue-600' />
        </Link>
        <Link href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faTwitter} className='text-blue hover:text-blue-600' />
        </Link>
        <Link href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faYoutube} className='text-blue hover:text-blue-600' />
        </Link>
        <Link href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faInstagram} className='text-blue hover:text-blue-600' />
        </Link>
      </div>



    </nav>
  );
}

export default NavBar;

"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const navLinks = [
  'Home',
  'About',
  'Testimonials',

  'Contact',
];

export default function Navbar() {

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <div className='position-relative layout-container'>
        <div className={`navbar ${scroll ? 'background-white' : ''}`}>
          <div className='logopart'>
            <h1 className='logo'>Digital Agency</h1>
          </div>
          <div className='navlink linkpart'>
              {navLinks.map((link, index) => (
                <div key={index}>
                  <h1 className="nav-link">{link}</h1>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

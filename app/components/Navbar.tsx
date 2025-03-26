'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-[#000f30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24">
        <div className="flex items-center justify-between h-full">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/Rocketfin_logo.svg"
                alt="Rocketfin Logo"
                width={300}
                height={60}
                className="w-[200px] h-[45px] md:w-[300px] md:h-[60px] py-2"
                priority
              />
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className={`${
                  pathname === '/' ? 'text-[#00B6FF]' : 'text-white'
                } hover:text-[#00B6FF] transition-colors duration-200 text-lg`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === '/about' ? 'text-[#00B6FF]' : 'text-white'
                } hover:text-[#00B6FF] transition-colors duration-200 text-lg`}
              >
                About
              </Link>
              <Link
                href="/digital-foundry"
                className={`${
                  pathname === '/digital-foundry' ? 'text-[#00B6FF]' : 'text-white'
                } hover:text-[#00B6FF] transition-colors duration-200 text-lg`}
              >
                Digital Foundry
              </Link>
              <Link
                href="/partners"
                className={`${
                  pathname === '/partners' ? 'text-[#00B6FF]' : 'text-white'
                } hover:text-[#00B6FF] transition-colors duration-200 text-lg`}
              >
                Partners
              </Link>
              <Link
                href="/contact"
                className="bg-[#00B6FF] text-white px-6 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 text-lg font-medium"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-24 left-0 w-full h-screen bg-[#000f30] transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6 p-6">
          <Link
            href="/"
            className={`${
              pathname === '/' ? 'text-[#00B6FF]' : 'text-white'
            } hover:text-[#00B6FF] transition-colors duration-200 text-xl`}
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === '/about' ? 'text-[#00B6FF]' : 'text-white'
            } hover:text-[#00B6FF] transition-colors duration-200 text-xl`}
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/digital-foundry"
            className={`${
              pathname === '/digital-foundry' ? 'text-[#00B6FF]' : 'text-white'
            } hover:text-[#00B6FF] transition-colors duration-200 text-xl`}
            onClick={toggleMenu}
          >
            Digital Foundry
          </Link>
          <Link
            href="/partners"
            className={`${
              pathname === '/partners' ? 'text-[#00B6FF]' : 'text-white'
            } hover:text-[#00B6FF] transition-colors duration-200 text-xl`}
            onClick={toggleMenu}
          >
            Partners
          </Link>
          <Link
            href="/contact"
            className="bg-[#00B6FF] text-white px-6 py-3 rounded-md hover:bg-[#0099FF] transition-colors duration-200 text-xl font-medium w-fit"
            onClick={toggleMenu}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 
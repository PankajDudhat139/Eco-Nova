'use client';
import {useEffect, useState} from 'react';
import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`w-full top-0 z-50 duration-300 bg-opacity-80 shadow-sm backdrop-blur-sm ${
        scrolled
          ? 'translate-y-0 fixed bg-white dark:bg-dark '
          : ''
      }`}
    >
      <nav className="container p-2 text-white">
        <div className="flex justify-between items-center">
          {/* Logo or Brand */}
          <div>
            <NavigationLink href="/">Logo</NavigationLink>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-500 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-700 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            <NavigationLink href="/">{t('home')}</NavigationLink>
            {/* <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink> */}
            <LocaleSwitcher />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? 'max-h-48 opacity-100 py-4'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            <NavigationLink href="/">{t('home')}</NavigationLink>
            {/* <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink> */}
            <LocaleSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}

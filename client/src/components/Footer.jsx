import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '../constants/constants';
import Auth from '../utils/auth';

import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <footer className={`${!loggedIn && 'footer-bg-dark'} py-10`}>
      <div className={`${!loggedIn && 'max-w-7xl'} mx-auto px-4 lg:px-8`}>
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between border-t-2 border-gray-300/30 dark:border-gray-700 gap-8">
          {/* Copyright */}
          <p className="text-sm text-center sm:text-left flex items-center">
            Một dự án thử nghiệm của
            <Link to="https://hieunhaque.com/" className='mx-1 hover:underline underline-offset-4'>Hiếu nhà quê</Link>
          </p>
          {/* Social Media Links */}
          {/* All links are placeholders except for Github */}
          <div className="flex flex-row flex-wrap justify-center gap-4 order-first sm:order-last">
            {socialLinks.map((link) => (
              <Link
                key={`link-${link.title}`}
                to={link.url}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

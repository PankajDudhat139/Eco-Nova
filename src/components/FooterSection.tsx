import React from 'react';
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa';

const FooterSection: React.FC = () => {
  const socialLinks = [
    {icon: <FaFacebook />, url: 'https://facebook.com'},
    {icon: <FaTwitter />, url: 'https://x.com'},
    {icon: <FaInstagram />, url: 'https://instagram.com'},
    {icon: <FaLinkedin />, url: 'https://linkedin.com'}
  ];

  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Eco-Nova. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

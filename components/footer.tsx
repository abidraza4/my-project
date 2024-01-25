import React, { useState } from 'react';
import { Button } from './ui/button';

const Footer: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <footer className="bg-[#04020b] text-white py-14">
      <div className="outer-box mx-auto flex justify-center items-center h-auto w-auto">
        {/* <div className="middle-box"> */}
          <div className="container mx-auto flex justify-between items-center flex-wrap max-w-[729px] gap-x-6">
            
            <div className="flex flex-wrap items-center justify-between">
              <img
                className="min-h-[20px] min-w-[105px]"
                src="/logo2.svg"
                alt="Logo"
              />
            </div>

            <div className="flex flex-wrap space-x-6">
              <a href="#" className="font-small text-sm text-primary-150 hover:text-white">
                Home
              </a>
              <a href="#" className="font-small text-sm text-primary-150 hover:text-white">
                Features
              </a>
              <a href="#" className="font-small text-sm text-primary-150 hover:text-white">
                Pricing
              </a>
              <a href="#" className="font-small text-sm text-primary-150 hover:text-white">
                Contact
              </a>
            </div>
            
          </div>
        {/* </div> */}
      </div>
    </footer>
  );
};

export default Footer;

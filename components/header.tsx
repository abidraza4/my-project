// components/Header.tsx
"use client";
import React, { useState } from 'react';
import { Button } from './ui/button';
import Link from "next/link";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#04020b] text-white py-4">
      <div className="outer-box mx-auto flex justify-center items-center">
        <div className="middle-box">
          <div className="container mx-auto flex justify-between items-center gap-x-[100px]">
            <div className="flex items-center">
              <img
                className="min-h-[20px] min-w-[105px]"
                src="/logo2.svg"
                alt="Logo"
              />
            </div>
            <div className="hidden md:flex space-x-6">
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
            <div className="flex items-center">
              <div className="md:hidden">
                <button
                  className="text-xl text-white hover:text-blue-500"
                  onClick={toggleMenu}
                >
                  ☰
                </button>
              </div>
              <div>
              <Button variant="gradient_outline"> <Link  href="/signup" > Get Started for Free</Link> </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

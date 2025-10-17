'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathName = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/register' },
    { name: 'About', href: '/about' },
    { name: 'Todos', href: '/todos' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a192f] border-b border-gray-700 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 mb-3 sm:mb-0">
          <h1 className="text-2xl font-extrabold text-orange-400 tracking-wide">
            Logo
          </h1>
        </Link>
        <ul className="flex flex-wrap justify-center items-center gap-6 text-lg font-semibold">
          {links.map((link) => {
            const active = pathName === link.href;
            return (
              <li key={link.name} className="relative">
                <Link
                  href={link.href}
                  className={`relative px-2 py-1 transition-all duration-300
                    ${
                      active
                        ? 'text-orange-400 font-bold'
                        : 'text-gray-300 hover:text-orange-300'
                    }`}
                >
                  {link.name}
                  {active && (
                    <span className="absolute left-0 -bottom-[3px] h-[2px] w-full bg-orange-400 rounded-full transition-all duration-300"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
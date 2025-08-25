'use client';
import Link from 'next/link'

import { usePathname } from 'next/navigation';
import React from 'react'
import { AiFillBug } from "react-icons/ai";
import classNames from 'classnames';

const NavBar = () => {

  const currentPath = usePathname();

  const navLinks = [
    {
      href: '/',
      label: 'Dashboard',
    },
    {
      href: '/issues',
      label: 'Issue',
    },
  ];

  return (
    <nav className='flex space-x-6 border-b items-center px-5 h-14 mb-5'>
      <Link href="/"><AiFillBug /></Link>
      <ul className='flex space-x-6'>
        {navLinks.map(link => (
          <li key={link.href}>
            <Link
              className={classNames(
                'transition-colors',
                link.href === currentPath ? 'text-zinc-500' : 'text-zinc-800',
                'hover:text-blue-500'
              )}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar
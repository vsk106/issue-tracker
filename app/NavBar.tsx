import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  const navLinks = [
    {
      href: '/',
      label: 'Dashboard',
      className: 'text-zinc-500 hover:text-zinc-800 transition-colors',
    },
    {
      href: '/issues',
      label: 'Issue',
      className: 'hover:text-blue-500 hover:text-zinc-800 transition-colors',
    },
  ];

  return (
    <nav className='flex space-x-6 border-b items-center px-5 h-14 mb-5'>
      <Link href="/"><AiFillBug /></Link>
      <ul className='flex space-x-6'>
        {navLinks.map(link => (
          <li key={link.href}>
            <Link className={link.className} href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar
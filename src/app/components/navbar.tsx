'use client'

import Link from 'next/link'
import React from 'react'
import { navmenuData } from '../shared/datas'
import { useNavbarScroll } from '../shared/hooks/useNavbarScroll'

export default function Navbar() {
  const { isScrolled } = useNavbarScroll()

  return (
    <nav
      className={`sticky bg-custom-1 top-0 z-50 w-full border-gray-300 text-custom-8 py-5 px-6 transform duration-500 transition-all ${
        isScrolled ? 'bg-custom-3' : ''
      }`}
    >
      <div className='flex items-center justify-between max-w-6xl mx-auto'>
        <div className='flex space-x-4'>
          <Link className='text-4xl font-extrabold' href='/'>
            OLAS
          </Link>
        </div>
        <div className={`hidden md:flex text-[18px] gap-[2vw]`}>
          {navmenuData.map((item) => (
            <Link
              key={item.name}
              className='menu-item-primary'
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className='md:me-[3vw] flex gap-4'>
          <Link
            className='button-primary bg-custom-2 rounded-full'
            href='/login'
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  )
}

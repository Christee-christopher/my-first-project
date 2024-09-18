import React, { useState } from 'react';

const links = [
  {
    name: 'Home',
    Path: '/',
  },
  {
    name: 'About Us',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Books',
    path: '/books',
  },
  {
    name: 'Blog',
    path: '/blog',
  }
]


export default function Nav() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  return (
    <div className='container mx-auto py-[20px]'>
      <div className='flex justify-between px-[20px] py-[10px] bg-emerald-700'>
        <h1>Christee</h1>

        <nav>
          {/* DESKTOP MENU */}
          <div className='hidden md:flex'>
            <ul className='flex gap-4'>
              {links.map((items, index) => (
                <li className='nav-lin'>
                  <a href="{items. path}">
                    {items.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE MENU */}
          <div className='md:hidden'>
            {/* HAMBURGER MENU */}

            <div
              className='space-y-1.5 cursor-pointer'
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <span className='block h-0.5 w-8 animate-pulse bg-black'></span>
              <span className='block h-0.5 w-7 animate-pulse bg-black'></span>
              <span className='block h-0.5 w-6 animate-pulse bg-black'></span>
            </div>

            {/* NAV MENU */}
            <div className={isNavOpen ? 'showMenu' : 'hidenMenu'}>
              <div className='absolute top-0 right-0 px-8 py-8'>
              <div
                onClick={() => setIsNavOpen(false)}
                className='cursor-pointer font-bold text-[30px]'
              >
                X
              </div>
              <div className='flex flex-col items-center justify-between min-h-[250px]'>
                <ul>
                  {links.map((item, index) => (
                    <li key={index}>
                      <a href={item.path}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

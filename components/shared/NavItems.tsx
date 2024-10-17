"use client"

import { HyperLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
    const pathname = usePathname();

  return (
    <div className='flex flex-col md:flex-row md:justify-between items-start w-full list-none gap-5'>
        {
            HyperLinks.map(link => {
                const isActive = link.route === pathname;
                return(
                    <li key={link.route} className={`${isActive && 'text-blue-500'} md:px-0 px-5 whitespace-nowrap`}>
                        <Link href={link.route} className='font-bold'>{link.label}</Link>
                    </li>
                )
            })
        }
    </div>
  )
}

export default NavItems

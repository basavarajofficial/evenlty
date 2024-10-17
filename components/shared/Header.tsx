
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    SignedIn,
    SignedOut,
    UserButton
  } from '@clerk/nextjs'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'

function Header() {

  return (
    <header className='border-b shadow-md dark:border-gray-700 dark:bg-gray-900'>
        <nav className='wrapper flex justify-between items-center'>
            <Logo width={138} height={42} />

            <SignedIn>
                <nav className='md:flex hidden justify-between w-full max-w-xs'>
                    <NavItems />
                </nav>
            </SignedIn>

            <div className='flex gap-3 items-center'>
            <ThemeToggle />
                <SignedOut>
                    <Button asChild  className='rounded-full' size={'lg'} >
                        <Link href={'/sign-in'}>
                            Sign in
                        </Link>
                    </Button>
                </SignedOut>
                <SignedIn>
                    <div className='flex items-center gap-2'>
                        <UserButton />
                        <MobileNav />
                    </div>
                </SignedIn>
            </div>
        </nav>
    </header>
  )
}

export default Header

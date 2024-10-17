import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Logo({width, height}: {width: number, height: number}) {
  return (
        <Link href='/' className="cursor-pointer border-t w-36">
            <Image src='/assets/images/logo.svg' alt='logo' width={width} height={height} />
        </Link>
  )
}

export default Logo;

import React from 'react'
import Logo from './Logo'

function Footer() {
    let year = new Date().getFullYear();
  return (
    <footer className='border-t dark:border-gray-600 dark:bg-gray-900'>
        <div className='wrapper flex flex-col gap-4 flex-wrap sm:flex-row justify-between items-center'>
            <Logo width={128} height={38} />
            <p>{year} All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer

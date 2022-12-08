'use client';
import classNames from 'classnames';
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './button'
import Container from './container'
import { HamburgerIcon } from './icons/hamburger';
import { Logo } from './icons/logo'

export const Header = () => {

    const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);
  return (
    <header className='fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]'>
        <Container className='flex h-navigation-height'>
            <Link className='flex items-center text-md' href='/'>
                <Logo className='w-[1.8rem] h-[1.8rem] mr-4'/> Linear
            </Link>
            <div className={classNames(
                'transition-[visibility]',
                hamburgerMenuIsOpen? 'visible opacity-100' : 'invisible delay-500')} >
                <nav className={classNames('transition-opacity duration-500 md:opacity-100 h-[calc(100vh_-_var(--navigation-height))] md:block fixed md:relative top-navigation-height left-0 bg-background w-full overflow-auto md:h-auto md:w-auto md:top-0 md:bg-transparent ',
                hamburgerMenuIsOpen? 'visible opacity-100' : 'invisible opacity-0')}>
                    <ul className={classNames('flex flex-col md:flex-row md:items-center h-full [&_li]:ml-6 [&_li]:border-b [&_li]:border-gray-dark md:[&_li]:border-none',
                    '[&_a]:flex [&_a]:items-center [&_a]:h-navigation-height [&_a]:w-full [&_a]:text-md md:[&_a]:text-sm [&_a:hover]:text-gray [&_a]:transition-[color, transform] [&_a]:duration-300 [&_a]:translate-y-8 md:[&_li]:visible', hamburgerMenuIsOpen && '[&_a]:translate-y-0'
                    )}>
                        <li>
                            <Link href="#">Features</Link>
                        </li>
                        <li>
                            <Link href="#">Method</Link>
                        </li>
                        <li className="md:hidden lg:block">
                            <Link href="#">Customers</Link>
                        </li>
                        <li className="md:hidden lg:block">
                            <Link href="#">Changelog</Link>
                        </li>
                        <li className="md:hidden lg:block">
                            <Link href="#">Integrations</Link>
                        </li>
                        <li>
                            <Link href="#">Pricing</Link>
                        </li>
                        <li>
                            <Link href="#">Company</Link>
                        </li>
                    </ul>
                </nav>
            </div>
           
            <div className='ml-auto flex items-center'>
                <Link className='text-sm mr-6' href='#'>Log in</Link>
                <Button variant="primary" href='#'>Sign up</Button>
            </div>
            <button className='ml-6 md:hidden' onClick={()=>setHamburgerMenuIsOpen(open => !open)}>
                <span className='sr-only'>Toggle menu</span>
                <HamburgerIcon />
            </button>
        </Container>
    </header>
  )
}

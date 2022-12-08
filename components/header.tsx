import Link from 'next/link'
import React from 'react'
import { Button } from './button'
import Container from './container'
import { Logo } from './icons/logo'

export const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full border-b border-white-a08 backdrop-blur-[12px]'>
        <Container className='flex h-[var(--navigation-height)]'>
            <Link className='flex items-center text-md' href='/'>
                <Logo className='w-[1.8rem] h-[1.8rem] mr-4'/> Linear
            </Link>
            <nav className='h-full'>
                <ul className='flex items-center h-full [&_a]:text-sm [&_a:hover]:text-gray [&_a]:transition-colors [&_li]:ml-6'>
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
            <div className='ml-auto flex items-center'>
                <Link className='text-sm mr-6' href='#'>Log in</Link>
                <Button variant="primary" href='#'>Sign up</Button>
            </div>
        </Container>
    </header>
  )
}

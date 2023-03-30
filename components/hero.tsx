import classNames from 'classnames';
import React from 'react'
interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
    className?: string;
}

export function HeroTitle({children, className}: HeroElementProps) {
  return (
    <h2 className={classNames('text-gradient md:text-8xl text-6xl my-6 ', className)}>{children}</h2>
   
  )
}

export function HeroSubtitle({children, className}: HeroElementProps) {
    return (
    <p className={classNames('text-lg md:text-xl mb-12 text-primary-text', className)}>{children}</p>
    )
}


export const Hero = ({children}: HeroProps) => {
  return (
    <div className='text-center'>
       {children}
    </div>
  )
}

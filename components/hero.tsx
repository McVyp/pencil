import React from 'react'
interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
}

export function HeroTitle({children}: HeroElementProps) {
  return (
    <h2 className='md:text-8xl text-6xl my-6'>{children}</h2>
   
  )
}

export function HeroSubtitle({children}: HeroElementProps) {
    return (
    <p className='text-lg md:text-xl mb-12'>{children}</p>
    )
}


export const Hero = ({children}: HeroProps) => {
  return (
    <div className='text-center'>
       {children}
    </div>
  )
}

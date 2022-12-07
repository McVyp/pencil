import React from 'react'
interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
}

export function HeroTitle({children}: HeroElementProps) {
  return (
    <h2 className='text-5xl my-6'>{children}</h2>
   
  )
}

export function HeroSubtitle({children}: HeroElementProps) {
    return (
    <p className='text-lg mb-12'>{children}</p>
    )
}


export const Hero = ({children}: HeroProps) => {
  return (
    <div className='text-center'>
       {children}
    </div>
  )
}

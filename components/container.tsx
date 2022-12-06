import React from 'react'

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className='max-w-[120rem] mx-auto'>{children}</div>
  )
}

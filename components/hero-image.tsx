"use client";

import classNames from 'classnames';
import { CSSProperties, useState } from 'react';
import { useInView} from 'react-intersection-observer';
export const HeroImage =() => {
    const {ref, inView} = useInView({ threshold: 0.4, triggerOnce:true});
    const [lines, setLines] = useState([
        {direction: "to bottom", duration: 3000, size: 20},
        {direction: "to right", duration: 3000, size: 15}
    ])
    return (
        <div
            ref={ref}
            className="[perspective:2000px] mt-[12.0rem]">
                <div 
                    className={classNames("bg-hero-gradient bg-white bg-opacity-[0.01] rounded-lg border border-transparent-white relative", inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",  "before:bg-hero-glow border:top-0 before:left-0 before:w-full  before:h-full before:absolute before:[filter:blur(120px)] before:opacity-0", inView && "before:animate-image-glow"
                    
                )}>
                    <div 
                        className='absolute w-full h-full top-0 left-0 z-20'>
                            {lines.map((line)=> (
                                 <span
                                    key={line.duration}
                                    style={{
                                        "--direction": line.direction,
                                        "--size": line.size,
                                        "--animation-duration": `${line.duration}ms`
                                        } as CSSProperties
                                    }
                                    className={classNames('bg-glow-lines block absolute top-0 w-[10rem] h-[1px]',
                                    line.direction === "to right" && `w-[calc(var(--size)*1rem)] h-[1px] left-0 animate-glow-line-horizontal`,
                                    line.direction === "to bottom" && `h-[calc(var(--size)*1rem)] w-[1px] right-0 animate-glow-line-vertical`,
                                    )}
                                />
                            ))}
                       
                        {/* <span
                            style={{"--direction": "to bottom"} as CSSProperties}
                            className='bg-glow-lines block absolute top-0 right-0 w-[1px] h-[10rem]'
                        /> */}
                    </div>
                    <svg
                        className={classNames('absolute top-0 left-0 h-full w-full','[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]', inView && '[&_path]:animate-sketch-lines')}
                        width="100%"
                        viewBox="0 0 1499 778"
                        fill="none"
                        >
                        <path pathLength="1" d="M1500 72L220 72"></path>
                        <path pathLength="1" d="M1500 128L220 128"></path>
                        <path pathLength="1" d="M1500 189L220 189"></path>
                        <path pathLength="1" d="M220 777L220 1"></path>
                        <path pathLength="1" d="M538 777L538 128"></path>
                 </svg>
                    <img
                    src="/img/hero.webp"  
                    className={classNames("relative z-10 transition-opacity delay-[680ms]",
                        inView ? 'opacity-100': 'opacity-0'
                    )}
                    alt="Hero image"
                    />
                </div>
        </div>
    )
}
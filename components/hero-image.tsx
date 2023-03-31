"use client";

import classNames from 'classnames';
import { useInView} from 'react-intersection-observer';
export const HeroImage =() => {
    const {ref, inView} = useInView({ threshold: 0.4, triggerOnce:true});
    console.log(inView)
    return (
        <div
            ref={ref}
            className="[perspective:2000px] mt-[12.0rem]">
                <div 
                    className={classNames("bg-hero-gradient bg-white bg-opacity-[0.01] rounded-lg border border-transparent-white relative", inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",  "before:bg-hero-glow border:top-0 before:left-0 before:w-full  before:h-full before:absolute before:[filter:blur(120px)] before:opacity-0", inView && "before:animate-image-glow"
                    
                )}>
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
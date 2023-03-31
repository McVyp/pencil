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
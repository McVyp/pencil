"use client";

import classNames from 'classnames';
import { useInView} from 'react-intersection-observer';
export const HeroImage =() => {
    const {ref, inView} = useInView({ threshold: 0.4, triggerOnce:true});
    console.log(inView)
    return (
        <div
            ref={ref}
            className="[perspective:2000px] overflow-hidden mt-[12.0rem]">
                <div 
                className={classNames("bg-hero-gradient bg-white bg-opacity-[0.01] rounded-lg border border-transparent-white", inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]")}>
                    <img
                    src="/img/hero.webp"  
                    className=""
                    alt="Hero image"
                    />
                </div>
        </div>
    )
}
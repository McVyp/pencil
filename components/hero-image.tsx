import { useInView} from 'react-intersection-observer';

export const HeroImage =() => {
    const {} = useInView();
    return (
        <div className="[perspective:2000px] overflow-hidden mt-[12.0rem]">
            <div className="bg-hero-gradient bg-white bg-opacity-[0.01] rounded-lg [transform:rotateX(25deg)] border border-transparent-white">
                <img
                    src="/img/hero.webp"  
                    className=""
                    alt="Hero image"
                />
            </div>
        </div>
    )
}
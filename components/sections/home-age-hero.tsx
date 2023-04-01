import { Button, IconWrapper } from "../button"
import { Hero, HeroSubtitle, HeroTitle } from "../hero"
import { HeroImage } from "../hero-image"
import { ChevronIcon } from "../icons/chevron"

export const HomepageHero =() =>(
    <>
    <Hero>
          <Button 
            className="animate-fade-in opacity-0 translate-y-[-1rem]"
            href="/" 
            variant="secondary"
            size="small"
          >
            Linear 2022 - Release - Built for scale <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle className="animate-fade-in [--animation-delay:200ms] opacity-0 translate-y-[-1rem] ">
            Linear is a better way<br className="hidden md:block"/> to build products
          </HeroTitle>
          <HeroSubtitle className="animate-fade-in [--animation-delay:400ms] opacity-0 translate-y-[-1rem]">
            Lorem Ipsum is simply dummy text <br className="hidden md:block"/>
            of the printing and typesetting industry.
          </HeroSubtitle>
          <Button  
            className ="animate-fade-in [--animation-delay:600ms] opacity-0 translate-y-[-1rem]" 
            href="/" 
            variant="primary" 
            size="large"
          >
            Get Started <IconWrapper><ChevronIcon /></IconWrapper>
          </Button>
          <HeroImage />
        </Hero>
    </>
)
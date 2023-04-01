import classNames from "classnames";
import { Button, IconWrapper } from "../components/button";
import { Clients } from "../components/client";
import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { HeroImage } from "../components/hero-image";
import { ChevronIcon } from "../components/icons/chevron";
import { StarsIllustration } from "../components/icons/stars";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
       <Container className="pt-[6.4rem]">
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
      </Container>
    </div>
      <Container>
        <Clients />
      </Container>
      <div 
          className={classNames(
          "h-[60rem] my-[-12.8rem] relative overflow-hidden mask-radial-faded", 
          "before:absolute before:opacity-[0.4] before:bg-radial-faded [--color:#7877C6] before:inset-0",
          "after:absolute after:bg-background after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:top-1/2 after:-left-1/2 after:w-[200%] after:h-[142.8%]"
          )}>
          <StarsIllustration />
      </div>
      
    </>
  )
}

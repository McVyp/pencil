import { Button, IconWrapper } from "../components/button";
import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";
import { ChevronIcon } from "../components/icons/chevron";

export default function Homepage() {
  return (
    
       <Container className="pt-[6.4rem]">
        <Hero>
          <Button 
            className="animate-fade-in"
            href="/" 
            variant="secondary" 
            size="small"
          >
            Linear 2022 - Release - Built for scale <IconWrapper>→</IconWrapper>
          </Button>
          <HeroTitle className="animate-fade-in">
            Linear is a better way<br className="hidden md:block"/> to build products
          </HeroTitle>
          <HeroSubtitle className="animate-fade-in">
            Lorem Ipsum is simply dummy text <br className="hidden md:block"/>
            of the printing and typesetting industry.
          </HeroSubtitle>
          <Button  className ="animate-fade-in" href="/" variant="primary" size="large">
            Get Started <IconWrapper><ChevronIcon /></IconWrapper>
          </Button>
          <img src="/img/hero.webp"  className="mt-[12.0rem]" alt="Hero image"/>
          <div className="animation-fade-in">ok</div>
        </Hero>
      </Container>
      
  )
}

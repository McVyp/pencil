import Container from "../components/container";
import { Hero, HeroSubtitle, HeroTitle } from "../components/hero";

export default function Homepage() {
  return (
    
       <Container>
        <Hero>
          <HeroTitle>
            Linear is a better way<br /> to build products
          </HeroTitle>
          <HeroSubtitle>
            Lorem Ipsum is simply dummy text <br />
            of the printing and typesetting industry.
          </HeroSubtitle>
          <img src="/img/hero.webp" alt="Hero image"/>
        </Hero></Container>
      
  )
}

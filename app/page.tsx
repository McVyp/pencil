import classNames from "classnames";
import { Clients } from "../components/sections/client";
import Container from "../components/container";
import { StarsIllustration } from "../components/icons/stars";
import { UnlikeAnyTool } from "../components/sections/any-tool";
import { HomepageHero } from "../components/sections/home-age-hero";
import { IssueTracking } from "../components/sections/issue-tracking";

export default function Homepage() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <HomepageHero />
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div 
          className={classNames(
          "h-[60rem] my-[-12.8rem] relative overflow-hidden mask-radial-faded z-[-1] pointer-events-none", 
          "before:absolute before:opacity-[0.4] before:bg-radial-faded [--color:#7877C6] before:inset-0",
          "after:absolute after:bg-background after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:top-1/2 after:-left-1/2 after:w-[200%] after:h-[142.8%]"
          )}>
          <StarsIllustration />
      </div>
      <UnlikeAnyTool />
      {/* <Container className="my-[25.2rem]">
        <IssueTracking />
      </Container> */}
    </>
  )
}

import { AlanLogo } from "../logos/alan";
import { ArcLogo } from "../logos/arc";
import { CashAppLogo } from "../logos/chasapp";
import { DescriptLogo } from "../logos/descript";
import { LoomLogo } from "../logos/loom";
import { MercuryLogo } from "../logos/mercury";
import { OpenSeaLogo } from "../logos/opensea";
import { PitchLogo } from "../logos/pitch";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RetoolLogo } from "../logos/retool";
import { VercelLogo } from "../logos/vercel";

export const Clients =() => (
    <>
        <p className="text-lg md:text-xl text-white text-center mb-12">
            <span className="text-primary-text">
                Power the world&apos;s best product teams.
                <br className="hidden md:block"/> 
                From next-gen startups to established enterprises.
            </span>
        </p>
        <div className="flex flex-wrap justify-around [&_svg]:max-w-[16rem] gap-x-6 gap-y-8 [&_svg]:basis-[calc(50%-22px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
            <CashAppLogo />
            <VercelLogo className="hidden  md:block"/>
            <LoomLogo />
            <RampLogo />
            <ArcLogo  />
            <AlanLogo />
            <DescriptLogo className="hidden  md:block"/>
            <PitchLogo />
            <OpenSeaLogo className="hidden  md:block" />
            <RetoolLogo className="hidden  md:block" />
            <RaycastLogo className="hidden  md:block" />
            <MercuryLogo className="hidden  md:block" />
        </div>
    </>
)
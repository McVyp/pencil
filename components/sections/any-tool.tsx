import { Button, Highlight } from "../button";
import Container from "../container";
import { LogoLight } from "../illustrations/light";
import { ZapIcon } from "../illustrations/zap";
import { Keyboard } from "../keyboard-illustration";

export const UnlikeAnyTool =() =>(
    <div className="text-white">
        <Container>
            <div className="text-center">
                <h2 className="text-4xl md:text-7xl mb-4 md:mb-7">Unlike any tool
                    <br className="hidden md:inline-block"/> you&apos;ve used before
                </h2>
                <p className="text-primary-text text-lg md:text-xl max-w-[68rem] mx-auto mb-12 md:mb-7">
                Designed to the last pixel and engineered with unforgiving precision, Linear combines UI elegance with world-class performance.
                </p>
            </div>
            <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-auto">
            <div className="flex md:flex-wrap gap-6 overflow-x-auto snap-x snap-mandatory pb-12 px-8">
                <div className="bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] md:basis-[calc(66.66%-12px)] md:max-w-[calc(66.66%-12px)] text-center min-h-[48rem] flex flex-col justify-end items-center w-full shrink-0 snap-center">
                    <Keyboard />
                    <p className="text-3xl mb-4">Built for your keyboard</p>
                    <p className="text-md text-primary-text">
                        Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.
                    </p>
                </div>
                <div className="bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] md:basis-[calc(33.33%-12px)] text-center relative min-h-[48rem] flex flex-col justify-end items-center w-full shrink-0 snap-center overflow-hidden">
                    <div className="absolute top-[-9.2rem] mask-linear-faded">
                        <ZapIcon />
                    </div>
                    <p className="text-3xl mb-4">Breathtakingly fast</p>
                    <p className="text-md text-primary-text">
                        Built for speed with 50ms interactions and real-time sync.
                    </p>
                </div>
                <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
                    <div className="absolute top-[-8rem] w-[130%] pointer-events-none">
                        <LogoLight />
                    </div>
                    <p className="text-3xl mb-4">Designed for modern software teams</p>
                    <p className="text-md text-primary-text">
                        Comes with built-in workflows that create focus and routine.
                    </p>
                    <Button 
                        className="absolute bottom-[20rem] translate-y-[30%] scale-[0.8] opacity-0 transition-[transform,opacity] group-hover:transform-none group-hover:opacity-100 [&_.highlight]:text-[1.1rem]" 
                        variant="secondary" 
                        href="/"
                        size="small"
                    >
                        <Highlight>Linear Method</Highlight>
                        Product principles
                        <svg
                            className="ml-1"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="#8A8F98"
                        >
                            <path d="M5.46967 11.4697C5.17678 11.7626 5.17678 12.2374 5.46967 12.5303C5.76256 12.8232 6.23744 12.8232 6.53033 12.5303L10.5303 8.53033C10.8207 8.23999 10.8236 7.77014 10.5368 7.47624L6.63419 3.47624C6.34492 3.17976 5.87009 3.17391 5.57361 3.46318C5.27713 3.75244 5.27128 4.22728 5.56054 4.52376L8.94583 7.99351L5.46967 11.4697Z"></path>
                        </svg>
                    </Button>
                </div>
                <div className="bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] md:basis-[calc(66.66%-12px)] text-center min-h-[48rem] flex flex-col justify-end items-center w-full shrink-0 snap-center md:max-w-[calc(66.66%-12px)]">
                    <p className="text-3xl mb-4">Meet your command line</p>
                    <p className="text-md text-primary-text">
                        Complete any action in seconds with the global command menu.
                    </p>
                </div>
            </div>
        </div>
        </Container>
        
    </div>
)
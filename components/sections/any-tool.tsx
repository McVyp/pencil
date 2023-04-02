import { ZapIcon } from "../illustrations/zap";

export const UnlikeAnyTool =() =>(
    <div className="text-white">
        <div className="text-center">
            <h2 className="text-4xl md:text-7xl mb-4 md:mb-7">Unlike any tool
                <br className="hidden md:inline-block"/> you&apos;ve used before
            </h2>
            <p className="text-primary-text text-lg md:text-xl max-w-[68rem] mx-auto mb-12 md:mb-7">
            Designed to the last pixel and engineered with unforgiving precision, Linear combines UI elegance with world-class performance.
            </p>
        </div>
        <div className="flex flex-wrap gap-6">
            <div className="bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] basis-[calc(66.66%-12px)] text-center min-h-[48rem] flex flex-col justify-end">
                <p className="text-3xl">Built for your keyboard</p>
                <p className="text-md text-primary-text">
                    Fly through your tasks with rapid-fire keyboard shortcuts for everything. Literally everything.
                </p>
            </div>
            <div className="bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] basis-[calc(33.33%-12px)] text-center relative min-h-[48rem] flex flex-col justify-end items-center">
                <div className="absolute top-[-9.2rem] mask-linear-faded">
                    <ZapIcon />
                </div>
                <p className="text-3xl">Breathtakingly fast</p>
                <p className="text-md text-primary-text">
                    Built for speed with 50ms interactions and real-time sync.
                </p>
            </div>
            <div className="bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] basis-[calc(33.33%-12px)] text-center min-h-[48rem] flex flex-col justify-end">
                <p className="text-3xl">Designed for modern software teams</p>
                <p className="text-md text-primary-text">
                    Comes with built-in workflows that create focus and routine.
                </p>
            </div>
            <div className="bg-glass-gradient p-8 md:p-14 border border-transparent-white rounded-[4.8rem] basis-[calc(66.66%-12px)] text-center min-h-[48rem] flex flex-col justify-end">
                <p className="text-3xl">Meet your command line</p>
                <p className="text-md text-primary-text">
                    Complete any action in seconds with the global command menu.
                </p>
            </div>
        </div>
    </div>
)
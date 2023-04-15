import classNames from "classnames";
import Container from "./container";

type FeaturesProps ={
    children: React.ReactNode;
    color: string;
    colorDark: string;
}

export const Features = ({children, color, colorDark}: FeaturesProps) =>{
    return(
        <section 
            className="before:absolute before:w-full before:h-[40rem]
            before:[background-size:50%_100%,50%_100%] before:[background-position:1%_0%,99%_0%] before:rotate-180 before:bg-no-repeat before:opacity-40
            before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-darkcolor))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-darkcolor)),#000212)] relative py-[12.8rem] flex items-center flex-col text-center after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)] after:absolute after:inset-0" 
            style={
                {
                    "--feature-color":color,
                    "--feature-darkcolor": colorDark,
                } as React.CSSProperties
            }
        >
            <div className="my-[25.2rem] w-full">
                {children}
            </div>
        </section>
    )
}

type MainFeatureProps ={
    image: string;
    text: string;
    title: React.ReactNode
}

const MainFeature =({image, text, title}: MainFeatureProps) => {
    return( 
        <>
            <div className="relative before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)] before:absolute before:inset-0">
                <Container className="w-[78rem] max-w-[90%] text-center">
                    <h2 className="text-gradient text-6xl md:text-8xl mb-11">{title}</h2>
                    <div className="relative rounded-[14px] before:rounded-[inherit] before:p-[1px] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:bg-[rgba(255,_255,_255,_0.15)] after:absolute after:inset-0 after:rouned-[inherit] after:[mask:linear-gradient(black,transparent)] overflow-hidden" >
                        <img 
                            src={image} className="h-auto w-full" 
                            alt=""
                        />
                    </div>
                </Container>
            </div>
            <Container className="w-[78rem] max-w-[90%] text-center">
                <p className="text-white md:text-4xl my-16 md:w-[80%] mx-auto leading-tight text-2xl">{text}</p>
                <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
            </Container>
        </>
    )
}

type FeatureGridProps = {
    features: {
        icon: React.FC,
        title: string,
        text: string,
    }[];
}

const FeatureGrid = ({features}: FeatureGridProps) => {
    return (
        <Container>
            <div className="md:text-md text-sm text-primary-text grid grid-cols-2 md:grid-cols-3 w-full gap-y-9 mb-[14rem] text-left">
            {features.map(({title, text, icon:Icon}) => (
                <div 
                    className="max-w-[25.6rem] md:[&_svg]:inline [&_svg]:fill-white md:[&_svg]:mr-[6px] [&_svg]:mb-[4px] md:[&_svg]:mb-[2px]" 
                    key={title}
                >
                    <Icon />
                    <span className="text-white block md:inline">{title}</span>{" "}{text}
                </div>
            ))}
            </div>
        </Container>
    )
}


type FeatureCardsProps ={
    features:{
        image: string;
        imageClassName: string;
        title: string;
        text: string
    }[]
}
const FeatureCards =( {features}: FeatureCardsProps) =>{
    return (
        <Container>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 text-left">
            {features.map(({title, text, image, imageClassName}) => (
                <div 
                    className="relative bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] before:absolute before:inset-0 before:bg-glass-gradient rounded-[2.4rem] md:rounded-[4.8rem] md:p-14 py-6 px-8 border border-transparent-white overflow-hidden aspect-[1.1/1]" 
                    key={title}
                >
                    <h3 className="text-2xl text-white mb-2">{title}</h3>
                    <p className="text-md text-primary-text max-w-[31rem]">{text}</p>
                    <img 
                        src={image} 
                        alt=""
                        className={classNames("absolute max-w-none" ,imageClassName)}
                    />
                </div>
            ))}
        </div>
        </Container>
    )
}

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
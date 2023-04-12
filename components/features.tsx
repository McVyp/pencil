type FeaturesProps ={
    children: React.ReactNode;
}

export const Features = ({children}: FeaturesProps) =>{
    return(
        <section className="py-[12.8rem] flex items-center flex-col text-center">
            {children}
        </section>
    )
}

type FeaturesTitleProps ={
    children: React.ReactNode;
}

const FeaturesTitle =( {children}: FeaturesTitleProps) =>(
     <h2 className="text-gradient text-6xl md:text-8xl mb-11">{children}</h2>
)

type MainFeatureProps ={
    image: string;
    text: string
}

const MainFeature =({image, text}: MainFeatureProps) => {
    return( 
        <div className="w-[78rem] max-w-[90%] text-center">
            <div className="relative rounded-[14px] before:rounded-[inherit] before:p-[1px] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:bg-[rgba(255,_255,_255,_0.15)] after:absolute after:inset-0 after:rouned-[inherit] after:[mask:linear-gradient(black,transparent)]" >
                <img 
                    src={image} className="h-auto w-full" 
                    alt=""
                />
            </div>
            <p className="text-white md:text-4xl my-16 w-[80%] mx-auto leading-tight text-2xl">{text}</p>
            <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
        </div>
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
        <div className="text-md text-primary-text grid grid-cols-3 w-full gap-y-9 mb-[14rem]">
            {features.map(({title, text, icon:Icon}) => (
                <div 
                    className="max-w-[25.6rem] [&_svg]:inline [&_svg]:fill-white [&_svg]:mr-[6px] [&_svg]:mb-[2px]" 
                    key={title}
                >
                    <Icon />
                    <span className="text-white">{title}</span>{" "}{text}
                </div>
            ))}
        </div>
    )
}


type FeatureCardsProps ={
    features:{
        image: string;
        title: string;
        text: string
    }[]
}
const FeatureCards =( {features}: FeatureCardsProps) =>{
    return <div>Feature cards.</div>
}

Features.Main = MainFeature;
Features.Title = FeaturesTitle;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
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
            <div >
                <img 
                    src={image} className="h-auto w-full" 
                    alt=""
                />
            </div>
            <p className="text-white text-4xl mt-16 w-[80%] mx-auto">{text}</p>
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
    return <div></div>
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
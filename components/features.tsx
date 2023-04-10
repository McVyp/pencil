type FeaturesProps ={
    title: string;
    children: React.ReactNode;
}

export const Features = ({title, children}: FeaturesProps) =>{
    return(
        <section>
            <h2>{title}</h2>
            {children}
        </section>
    )
}

type MainFeatureProps ={
    image: string;
    text: string
}

const MainFeature =({image, text}: MainFeatureProps) => {
    return <div>{image}</div>
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
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;
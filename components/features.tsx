type FeaturesProps ={
    title: string;
}

export const Features = ({title}: FeaturesProps) =>{
    return(
        <section>
            <h2>{title}</h2>
        </section>
    )
}
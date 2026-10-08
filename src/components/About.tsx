interface AboutProps{
    title: string;
    description: string
    image?: string;
}

function About({ title, description, image }: AboutProps){
    return(
        <section className="about" id="about">
            <div className="about-container">
                <h2>{title}</h2>
                <p>{description}</p>

                {image && (
                    <img src={image} alt="About me" className="about-image" />
                )}
            </div>
        </section>
    )
}


export default  About;
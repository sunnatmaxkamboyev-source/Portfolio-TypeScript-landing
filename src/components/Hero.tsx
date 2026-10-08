interface HeroProps {
    name: string;
    title: string;
    description : string;
}

function Hero ({ name, title, description}: HeroProps){
    return(
        <section className="hero" id='home'>
            <div  className="hero-contenst">
                <h1>
                    Salom, me <span>{name}</span>
                </h1>
                <h2>{title}</h2>
                <p>{description}</p>

                <div className="hero-buttons">
                    <a href="#projects" className="btn btn-primary">
                        Loyihalarim
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Bog'lanish
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero;
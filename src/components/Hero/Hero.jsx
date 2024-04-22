import React from 'react'
import hero from "/hero.png";
import './hero.css'

const Hero = () => {
    return (
        <section className='Hero'>
            <h1> Homenum : Votre Partenaire de Portage Salarial Moderne.</h1>
            <p>Alliez liberté d'indépendant et sécurité de salarié avec Homenum.</p>
            <div className="buttons">
                <button className="hero-button simulate-button">
                    Simuler mon salaire
                </button>
                <button className="hero-button view-more-button">
                    Découvrez notre offre
                </button>
            </div>
            <img src={hero} className='hero-image' alt="homeunum-hero" />
            <div className="Hero-numbers">
                <div className="stats">
                    <h2 className='stats-number'>
                        17+
                    </h2>
                    <div className='facts' >
                        Année d’expertise
                    </div>
                </div>
                <div className="stats">
                    <h2 className='stats-number'>
                        2500+
                    </h2>
                    <div className='facts'>
                        Indépendants accompagnés
                    </div>
                </div>
                <div className="stats">
                    <h2 className='stats-number'>
                        4,4/ 5
                    </h2>
                    <div className='facts'>
                        Satisfaction client
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
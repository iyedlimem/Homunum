import React from 'react'
import "./heroguide.css"
import heroguide from "/hero-image.png";

const HeroGuide = () => {
    return (
        <section className="HeroGuide">
            <div className="hero-wrapper">
                <div className="hero-content">
                    <h2 className='Hero-guide_title'>
                        Portage salarial : Le guide complet (2023)
                    </h2>
                    <p style={{color:"#F4F0F0"}}> Le portage salarial est un forme d’emploi particulière qui permet à des consultants indépendants d’exercer leur activité sous le statut protecteur du salariat.Tout en conservant son autonomie et son liberté, le salarié porté bénéficie des avantages du salariat comme cotiser à la retraite au régime général ou le droit au chômage en cas d’inactivité. En portage salarial, le salarié porté n’a pas besoin de créer une structure juridique. Il délègue toute sa gestion administrative à la société de portage salarial.</p>
                    <div className="guide-buttons">
                        <button className="hero_guide-button simulate-button">
                            Simuler mon salaire
                        </button>
                        <button className="hero-button view-more-button">
                            Découvrez notre offre
                        </button>
                    </div>
                </div>
                <img src={heroguide} alt="homenum guide" className='image_guide' />
            </div>
        </section>
    )
}

export default HeroGuide
import React from 'react'
import "./offre.css"

const Offre = () => {
    return (
        <section className="offre">
            <div className="section-tag">
                Offre de parainage
            </div>
            <h2 className='about-title'>
                Pret a vous lancer ?
            </h2>
            <p className='offres-desc'>
                Join our roster of satisfied clients and experience the exceptional results and service that have earned us the trust of industry leaders worldwide
            </p>
            <div className="services-wrapper">

                <div className="offre-item">
                    <div className="offre-line" />
                    <div className="offre-container">

                        <div className="service-content">
                            <h4 className="offre-title">1 MOIS OFFERT</h4>
                            <p className='offre-desc'>Si vous lancez votre activité en portage salrial</p>
                        </div>

                    </div>
                </div>

                <div className="offre-item">
                    <div className="offre-line" />
                    <div className="offre-container">

                        <div className="service-content">
                            <h4 className="offre-title">2 MOIS OFFERT</h4>
                            <p className='offre-desc'>Si vous changez D’entreprise de portage salarial pour Homenum</p>
                        </div>

                    </div>
                </div>

                <div className="offre-item">
                    <div className="offre-line" />
                    <div className="offre-container">

                        <div className="service-content">
                            <h4 className="offre-title">+1 MOIS OFFERT</h4>
                            <p className='offre-desc'>En cas de parrinage</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offre
import React from 'react'
import "./services.css"
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleIcon from '@mui/icons-material/People';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ReceiptIcon from '@mui/icons-material/Receipt';
import HandshakeIcon from '@mui/icons-material/Handshake';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const Services = () => {
    return (
        <section className="services" id='services'>
            <div className="section-tag">
                Nos Services
            </div>
            <h2 className='about-title'>
                Des Services Pensés Pour Vous.
            </h2>

            <div className="services-wrapper">
                <div className="service-container">
                    <div className="service-icon">
                        <SpeedIcon />
                    </div>
                    <div className="service-content">
                        <h4 className="service-title">Une vision CRM</h4>
                        <p className='service-desc'> Pour mieux gérer et suivre les clients des prestations de portage salarial au travers d'une vision transversale et des processus propres au métier du portage.</p>
                    </div>

                </div>
                <div className="service-container">
                    <div className="service-icon">
                        <PeopleIcon />
                    </div>
                    <div className="service-content">
                        <h4 className="service-title">Ressources humaines</h4>
                        <p className='service-desc'>Un outil central pour optimiser et simplifier la gestion administrative et RH de vos salariés portés</p>
                    </div>

                </div>
                <div className="service-container">
                    <div className="service-icon">
                        <SmartphoneIcon />
                    </div>
                    <div className="service-content">
                        <h4 className="service-title"> Application mobile</h4>
                        <p className='service-desc'> Homenum utilise les toutes dernières technologies pour entrer au creux de vos mains et utiliser les fonctions du téléphone.</p>
                    </div>

                </div>
                <div className="service-container">
                    <div className="service-icon">
                        <ReceiptIcon />
                    </div>
                    <div className="service-content">
                        <h4 className="service-title">Facturation</h4>
                        <p className='service-desc'> Une solution permettant de gérer tous les cas de facturation simples ou complexes. </p>
                    </div>

                </div>
                <div className="service-container">
                    <div className="service-icon">
                        <HandshakeIcon />
                    </div>
                    <div className="service-content">
                        <h4 className="service-title">Gestion des contrats</h4>
                        <p className='service-desc'>Gérer, contrôler et valider vos contract n'a jamais été aussi simple.</p>
                    </div>

                </div>
                <div className="service-container">
                    <div className="service-icon">
                        <AttachMoneyIcon />
                    </div>
                    <div className="service-content">
                        <h4 className="service-title">La paie </h4>
                        <p className='service-desc'> Une solution efficace pour gérer les problématiques de la paie dans le contexte du portage salarial.</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Services
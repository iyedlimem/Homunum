import React from 'react'
import Header from '../components/header/Header'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import HeroGuide from '../components/HeroGuide/HeroGuide'

const Guide = () => {
    return (
        <div>
            <Header />
            <HeroGuide />
            <div className="home-wrapper">
                <div className="guide-content">
                    <h4 className="guide-content_title">Comprendre le Portage Salarial</h4>
                    <p>Initié à la fin des années 1970, le portage salarial a été clairement défini par l'Assemblée nationale le 25 juin 2008, inscrit dans l'article L1251-64 du Code du Travail. Il est décrit comme : "Un cadre contractuel impliquant une entreprise de portage, un individu porté et des clients, offrant à l'individu porté le statut et les avantages du salariat, tout en étant rémunéré pour ses services par l'entreprise de portage."</p>
                    <p>En termes simples, le portage salarial est une collaboration entre trois parties : le consultant porté, l'entreprise de portage salarial (EPS) et l'entreprise cliente. Le consultant, en tant que travailleur indépendant, établit un contrat de travail avec l'EPS, devenant ainsi leur employé. Lorsqu'il sécurise un client, le consultant négocie directement les détails de la mission (durée, tâches, coût, etc.). Par la suite, l'EPS et l'entreprise cliente formalisent cette entente à travers un contrat de service.</p>
                    <p>L'EPS facilite la vie du consultant en gérant les aspects administratifs et comptables de son activité, en échange de frais de gestion. Elle est responsable de convertir les revenus de ses consultants en salaires après avoir collecté le chiffre d'affaires.</p>
                </div>
                <div className="guide-content">
                    <h4 className="guide-content_title">
                        Mécanisme du Portage Salaria
                    </h4>
                    <p>
                        Le portage salarial est structuré autour de deux accords principaux :
                    </p>
                    <p>
                        Salarié Porté et Entreprise de Portage Salarial (EPS) : Ils établissent un contrat de travail, soit à durée déterminée, soit à durée indéterminée. Dans ce cadre, le consultant devient un employé officiel de l'EPS. EPS et Entreprise Cliente : Un contrat de service est mis en place, détaillant les modalités et le coût de la prestation. Parallèlement, le salarié porté exécute les tâches spécifiées auprès de l'entreprise cliente, comme stipulé dans cet accord. L'EPS prend en charge toutes les responsabilités administratives associées aux missions du consultant, en retour d'une commission. En tant que salarié porté, le consultant est affilié au régime général, lui permettant d'accéder aux bénéfices et à la sécurité du statut de salarié.
                    </p>
                    <p>
                        Il est à noter qu'à partir de 2015, la réglementation du portage salarial a été consolidée. L'adoption de la convention collective du portage salarial en 2017 a renforcé la stabilité et la sécurité de ce secteur.
                    </p>
                </div>
                <div className="guide-content">
                    <h4 className="guide-content_title">
                        Définition d'une Société de Portage Salarial
                    </h4>
                    <p>
                        Une société de portage salarial agit à la fois comme un fournisseur de services pour les entreprises et comme l'employeur d'un consultant indépendant. Elle vise à soutenir le consultant dans l'expansion de son activité en lui offrant un soutien personnalisé, en partageant ses ressources et en lui donnant accès à sa structure organisationnelle. Tout en conservant son autonomie, le consultant est libre de sélectionner ses missions et ses clients.
                    </p>
                    <p>
                        En échange de la gestion des aspects administratifs, juridiques et comptables pour ses consultants, la société de portage salarial retient des frais de gestion.
                    </p>
                </div>
                <div className="guide-content">
                    <h4 className="guide-content_title">
                        Responsabilités des Sociétés de Portage Salarial
                    </h4>
                    <p>
                        Les sociétés de portage salarial sont tenues de respecter plusieurs directives :
                    </p>
                    <ul className='guide-bullet'>
                        <li>Elles possèdent le monopole de la pratique du portage salarial.</li>
                        <li>Elles établissent la facturation client selon l'accord conclu avec le consultant porté. Après déduction des charges sociales et de leurs frais, elles rémunèrent le consultant porté.</li>
                        <li>Elles sont tenues de contracter une assurance responsabilité civile professionnelle pour le consultant.</li>
                        <li>Elles fournissent au consultant un relevé d'activité mensuel, détaillant toutes les transactions financières associées à son activité (comme les frais de gestion, les paiements des clients, les salaires, etc.).</li>
                        <li>Elles doivent sécuriser une garantie financière auprès d'un organisme compétent, assurant notamment le versement des salaires.=</li>
                        <li>Elles s'assurent de la surveillance médicale de leurs consultants.</li>
                        <li>Elles vérifient que le consultant possède les compétences et qualifications nécessaires.</li>
                    </ul>
                    <p>
                        En cas de manquement à ces obligations, elles encourent des sanctions légales.
                    </p>
                </div>
                <div className="guide-content">
                    <h4 className="guide-content_title">
                        Conséquences Juridiques pour les Sociétés de Portage Salarial
                    </h4>
                    <p>
                        Si une société de portage salarial ne respecte pas certaines réglementations, elle risque une amende de 3 750 euros pour les infractions suivantes :
                    </p>
                    <ul className='guide-bullet'>
                        <li>Oubli des mentions essentielles dans le contrat avec le salarié porté, telles que le type de contrat, sa durée précise et minimale pour un CDD.</li>
                        <li>Dépassement de la durée maximale autorisée pour un CDD. Retard dans la remise du contrat au salarié porté, qui doit être fait dans les deux jours suivant la signature.</li>
                        <li>Absence de mise en place d'un compte d'activité pour chaque consultant. Omission de la déclaration préalable d'activité.</li>
                        <li>Non-souscription à la garantie financière requise.</li>
                        <li>Négligence des obligations relatives à la santé au travail des consultants.</li>
                        <li>Signature d'un contrat avec une entreprise offrant des services à la personne en relation avec l'entreprise cliente, ou omission des mentions nécessaires dans le contrat de service. Si ce contrat n'est pas signé et remis au consultant dans les deux jours ouvrables suivant le début de la mission, des sanctions sont envisageables.
                        </li>
                    </ul>
                    <p>
                        En cas de répétition de ces manquements, l'amende est doublée. De plus, la société peut encourir une peine de prison de 6 mois et une interdiction d'exercer de 2 à 10 ans. Si cette interdiction est violée, une nouvelle sanction de 6 000 euros et 6 mois de prison peut être appliquée.
                    </p>
                </div>
                <Contact />
            </div>

            <Footer />
        </div>
    )
}

export default Guide
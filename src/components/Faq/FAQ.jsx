import React from 'react'
import "./faq.css"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const FAQ = () => {
    return (
        <section className="Faq">
            <div className="section-tag">
                FAQ Homenum
            </div>
            <h2 className='about-title'>
                Poser vos Questions
            </h2>
            <p>
                Tout ce que vous devez savoir sur le portage salarial avec nous
            </p>
            <div className="Faq-wrapper">
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        className='expanded-icon'
                        expandIcon={<AddIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <h4 className='accordion-title'>Qu'est-ce que le portage salarial chez Homenum ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Le portage salarial chez Homenum permet aux professionnels indépendants de bénéficier du statut de salarié tout en conservant leur autonomie. Nous gérons pour vous l'aspect administratif, fiscal et social, vous permettant de vous concentrer pleinement sur vos missions.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Qui est responsable de la recherche de missions ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            En tant que salarié porté chez Homenum, vous êtes en charge de trouver vos missions. Cependant, nous vous offrons un soutien dans la négociation commerciale et organisons régulièrement des rencontres pour dynamiser notre réseau et contribuer au développement de votre activité.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Comment le portage salarial diffère-t-il de l'intérim chez Homenum ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Le portage salarial est destiné aux professionnels experts, tels que les consultants ou formateurs. Contrairement à l'intérim, vous êtes autonome dans votre prospection et vos interventions. De plus, le portage salarial répond à des besoins spécifiques d'expertise que les entreprises souhaitent externaliser.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Comment est déterminée ma rémunération ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Avec Homenum, vous décidez de vos honoraires. Vous avez la liberté de négocier vos tarifs avec vos clients, et nous sommes là pour vous aider dans ces calculs. En général, la rémunération en portage salarial est souvent plus avantageuse que celle de l'intérim.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Quels types de métiers peuvent être exercés en portage salarial chez Homenum ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            De nombreux domaines peuvent être explorés, allant de l'informatique au marketing, en passant par les ressources humaines ou la finance. Cependant, certains métiers réglementés ne peuvent être exercés en portage salarial. Si vous avez des doutes, n'hésitez pas à nous contacter.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Quels types de contrats propose Homenum ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Selon la durée et la nature de la mission, Homenum vous proposera un CDD ou un CDI. Pour les missions courtes, un CDD est suggéré, tandis qu'une mission de plus de 12 mois sera généralement couverte par un CDI.
                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Dois-je avoir un statut cadre pour rejoindre Homenum ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Le portage salarial chez Homenum est principalement destiné aux professionnels avec un statut cadre. Cependant, ce statut est adapté à votre réalité professionnelle et ne génère pas de coûts supplémentaires.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Comment Homenum gère-t-il l'assurance responsabilité civile professionnelle ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            n tant que salarié de Homenum, nous souscrivons pour vous une assurance responsabilité civile professionnelle adaptée à votre activité, couvrant même les missions à l'international (hors USA et Canada).
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Quand recevrai-je mon salaire ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Les salaires sont traités à la fin de chaque mois, basés sur la facturation effectuée et conformément à la réglementation en vigueur.
                        </p>
                    </AccordionDetails>
                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Comment Homenum gère-t-il les frais professionnels ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Les frais liés à votre activité, non facturés à vos clients, peuvent vous être remboursés en respectant les recommandations de l'URSSAF. Pour plus de détails, contactez-nous.                        </p>
                    </AccordionDetails>
                </Accordion>

                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Comment Homenum gère-t-il les impayés ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Nous définissons avec vous les conditions de règlement de vos clients et prenons en charge la gestion des impayés, tout en préservant votre relation avec le client.
                        </p>
                    </AccordionDetails>

                </Accordion>
                <Accordion className='Faq-conatiner' >
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <h4 className='accordion-title'>Dois-je informer Pôle Emploi de mon activité avec Homenum ?</h4>
                    </AccordionSummary>
                    <AccordionDetails>
                        <p className='accordion-desc'>
                            Oui, il est important d'informer Pôle Emploi de votre situation lors de l'actualisation mensuelle.
                        </p>
                    </AccordionDetails>
                </Accordion>
            </div>



        </section>
    )
}

export default FAQ
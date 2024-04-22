import React, { useState } from 'react'
import Tabs from '../components/Simulator/Tabs'
import Output from '../components/Simulator/Output'
import Header from '../components/header/Header';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Simulator = () => {
    const [formData, setFormData] = useState(null);
    return (
        <>
            <Header />

            <section className="simulator-wrapper">
                <h2>
                    Simulation en Portage Salarial à 5% de commission tout inclus
                </h2>
                <div className="simulator">
                    <div className="input">
                        <Tabs setFormData={setFormData} />
                    </div>
                    <div className='output-card'>
                        <Output formData={formData} />
                    </div>
                </div>
                <Contact />
            </section>



            <Footer />
        </>
    )
}

export default Simulator
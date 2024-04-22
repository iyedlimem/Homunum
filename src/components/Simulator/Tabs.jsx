import React, { useState } from 'react';
import Montantfacture from './Montantfacture';
import RevenuForm from './RevenuForm';
import "./simulator.css"


const Tabs = ({ setFormData }) => {

    const [currentTab, setCurrentTab] = useState(1);

    const handleTabClickRevenuNet = (e) => {
        setCurrentTab(1);
    }
    const handleTabClickMontantFacturé = (e) => {
        setCurrentTab(2);
    }
    return (
        <div className='container' style={{ padding: "20px" }}>
            <div className='tabs'>
                <button className="tab left" key={1} id={1} disabled={currentTab === 1} onClick={(handleTabClickRevenuNet)}>Revenu net</button>
                <button className="tab right" key={2} id={2} disabled={currentTab === 2} onClick={(handleTabClickMontantFacturé)}>Montant Facturé</button>
            </div>
            <div className='content'>
                <div key={11}>
                    {
                        currentTab === 1 && <div>
                            <RevenuForm setFormData={setFormData} />
                        </div>
                    }
                </div>
                <div key={22}>
                    {
                        currentTab === 2 && <div>
                            <Montantfacture setFormData={setFormData} />
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Tabs;
import React, { useState } from 'react';
import useCalculateResult from '../../hooks/calculate';
import generatePDF from '../../hooks/generatePdf';
import "./simulator.css"

const Output = ({ formData }) => {

    const calculatedResult = useCalculateResult(formData);

    return (
        < >


            {formData && formData.formType === 'montant' ? (
                <p>Result: {calculatedResult}</p>
            ) : formData && formData.formType === 'revenu' ? (

                <div className='output-box'>

                    <div className="result-container">
                        <div className="result">
                            <p className='label'>Revenu net </p>
                            <p className='value-output '>{calculatedResult.TotalReverse} €  <span className='month'>/mois</span></p>
                        </div>
                        <p className='underlined'>Frais professionnels pris en compte</p>

                    </div>

                    <div className="result-container">
                        <div className="result">
                            <p className='label opt'>Revenu net optimisé</p>
                            <p className='value-output opt'> {calculatedResult.TotalReverse + calculatedResult.Bonus} € <span className='month opt'>/mois</span></p>
                        </div>
                        <p className='underlined'>Optimisations possibles</p>
                    </div>
                    <div className="buttons-wrapper">
                        <button className='buttons' onClick={() => generatePDF(formData)}>Recevoir mon bulletin détaillé </button>
                        <button disabled className='buttons prime' onClick={() => generatePDF(formData)}>Commencez maintenant </button>
                    </div>

                </div>

            ) : (
                <div className='output-box'>

                    <div className="result-container">
                        <div className="result">
                            <p className='label'>Revenu net </p>
                            <p className='value-output '> 4400 €  <span className='month'>/mois</span></p>
                        </div>
                        <p className='underlined'>Frais professionnels pris en compte</p>

                    </div>

                    <div className="result-container">
                        <div className="result">
                            <p className='label opt'>Revenu net optimisé</p>
                            <p className='value-output opt'> 4635 € <span className='month opt'>/mois</span></p>
                        </div>
                        <p className='underlined'>Optimisations possibles</p>
                    </div>
                    <div className="buttons-wrapper">
                        <button disabled className='buttons' onClick={() => generatePDF(formData)}>Recevoir mon bulletin détaillé </button>
                        <button disabled className='buttons prime' onClick={() => generatePDF(formData)}>Commencez maintenant </button>
                    </div>

                </div>
            )}

        </>
    );
};

export default Output;

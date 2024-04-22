import React, { useState } from 'react';
import "./simulator.css"
import Slider from '@mui/material/Slider';

const RevenuForm = ({ setFormData }) => {
    const [value1, setValue1] = useState(500);
    const [value2, setValue2] = useState(20);
    const [value3, setValue3] = useState(250);
    const [value4, setValue4] = useState(10);

    const handleValueChange = (inputNumber, newValue) => {
        if (inputNumber === 1) {
            setValue1(newValue);
        } else if (inputNumber === 2) {
            setValue2(newValue);
        } else if (inputNumber === 3) {
            setValue3(newValue);
        } else if (inputNumber === 4) {
            setValue4(newValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            formType: 'revenu',
            TarifjournalierHT: value1,
            Nbrjourstravaillés: value2,
            Fraisprofessionnels: value3,
            PourcentageReservefinanciere: value4,
        };
        setFormData(formData);
    };


    const handleInputChange = (inputNumber, newValue) => {


        if (inputNumber === 1) {
            setValue1(newValue);
        } else if (inputNumber === 2) {
            setValue2(newValue);
        } else if (inputNumber === 3) {
            setValue3(newValue);
        } else if (inputNumber === 4) {
            setValue4(newValue);
        }
    };

    return (
        <div style={{ marginTop: "40px" }}>
            <form onSubmit={handleSubmit}>
                <div className='input-wrapper'>
                    <label>
                        Je facture {' '}
                        <input
                            type="number"
                            className='value-span'
                            value={value1}
                            onChange={(e) => handleInputChange(1, parseInt(e.target.value))}
                            min={250} // Specify the minimum value
                            max={1500}
                            step={10}
                        />
                        € par jour
                    </label>

                    <Slider
                        id='range-input'
                        value={value1}
                        valueLabelDisplay="auto"
                        sx={{ color: "#7F56D9", height: "5px", margin: " 16px 0px" }}
                        step={10}
                        min={250}
                        max={1500}
                        onChange={(e, newValue) => handleValueChange(1, newValue)}
                    />
                </div>
                <div className='input-wrapper'>
                    <label>
                        Sur {' '}
                        <input
                            type="number"
                            className='value-span'
                            value={value2}
                            onChange={(e) => handleInputChange(2, parseInt(e.target.value))}
                            step={1}
                            min={1}
                            max={22}
                        />
                        {' '} jour(s)
                    </label>

                    <Slider
                        id='range-input'
                        value={value2}
                        valueLabelDisplay="auto"
                        sx={{ color: "#7F56D9", height: "5px", margin: " 16px 0px" }}
                        step={1}
                        min={1}
                        max={22}
                        onChange={(e, newValue) => handleValueChange(2, newValue)}
                    />

                </div>
                <div className='input-wrapper'>
                    <label>
                        Avec {' '}
                        <input
                            type="number"
                            className='value-span'
                            value={value3}
                            onChange={(e) => handleInputChange(3, parseInt(e.target.value))}
                            step={10}
                            min={0}
                            max={3000}
                        />
                        € de frais professionnels
                    </label>
                    <Slider
                        id='range-input'
                        value={value3}
                        valueLabelDisplay="auto"
                        sx={{ color: "#7F56D9", height: "5px", margin: " 16px 0px" }}
                        step={10}
                        min={0}
                        max={3000}
                        onChange={(e, newValue) => handleValueChange(3, newValue)}
                    />
                </div>
                <div className='input-wrapper'>
                    <label>
                        Avec {' '}
                        <input
                            type="number"
                            className='value-span'
                            value={value4}
                            onChange={(e) => handleInputChange(4, parseInt(e.target.value))}
                            step={2.5}
                            min={0}
                            max={15}
                        />
                        % de retenu
                    </label>

                    <Slider
                        id='range-input'
                        value={value4}
                        valueLabelDisplay="auto"
                        sx={{ color: "#7F56D9", height: "5px", margin: " 16px 0px" }}
                        step={2.5}
                        min={0}
                        max={15}
                        onChange={(e, newValue) => handleValueChange(4, newValue)}
                    />
                </div>
                <button className='simulation-button' type="submit">Simuler</button>
            </form>
        </div>
    );
};

export default RevenuForm;

import React, { useState } from 'react';

const Montantfacture = ({ setFormData }) => {
    const [value1, setValue1] = useState(50);
    const [value2, setValue2] = useState(50);

    const handleValueChange = (inputNumber, newValue) => {
        if (inputNumber === 1) {
            setValue1(newValue);
        } else if (inputNumber === 2) {
            setValue2(newValue);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        e.preventDefault();
        const formData = {
            formType: 'montant',
            value1: value1,
            value2: value2,
        };
        setFormData(formData);
    };

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Range 1</label>
                    <input
                        type="range"
                        value={value1}
                        min={0}
                        max={100}
                        onChange={(e) => handleValueChange(1, parseInt(e.target.value))}
                    />
                    <span>{value1}</span>
                </div>
                <div>
                    <label>Range 2</label>
                    <input
                        type="range"
                        value={value2}
                        min={0}
                        max={100}
                        onChange={(e) => handleValueChange(2, parseInt(e.target.value))}
                    />
                    <span>{value2}</span>
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Montantfacture
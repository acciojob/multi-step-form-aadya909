import React from 'react';

const Step = ({ currentStep, formData, handleChange, nextStep, prevStep, handleSubmit }) => {
    return (
        <div id={`step${currentStep}`}>
            {currentStep === 1 && (
                <>
                    <input id="first_name" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
                    <input id="last_name" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
                </>
            )}
            {currentStep === 2 && (
                <>
                    <input id="model" value={formData.model} onChange={handleChange} placeholder="Car Model" />
                    <input id="car_price" value={formData.carPrice} onChange={handleChange} placeholder="Car Price" />
                </>
            )}
            {currentStep === 3 && (
                <>
                    <input id="card_info" value={formData.cardInfo} onChange={handleChange} placeholder="Card Info" />
                    <input id="expiry_date" value={formData.expiryDate} onChange={handleChange} placeholder="Expiry Date" />
                </>
            )}
            <div>
                {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
                {currentStep < 3 && <button onClick={nextStep}>Next</button>}
                {currentStep === 3 && <button onClick={handleSubmit}>Submit</button>}
            </div>
        </div>
    );
};

export default Step;



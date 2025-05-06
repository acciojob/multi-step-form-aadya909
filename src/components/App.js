import React, { useState } from 'react';
import Step from './Step';

const App = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        model: '',
        carPrice: '',
        cardInfo: '',
        expiryDate: ''
    });

    const nextStep = () => setCurrentStep(currentStep + 1);
    const prevStep = () => setCurrentStep(currentStep - 1);
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = () => {
        console.log('Form submitted:', formData);
        // Handle form submission logic (e.g., API call)
    };

    return (
        <div>
            <h1>Multi-Step Form</h1>
            <Step
                currentStep={currentStep}
                formData={formData}
                handleChange={handleChange}
                nextStep={nextStep}
                prevStep={prevStep}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default App;

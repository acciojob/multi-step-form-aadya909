import React from "react";

export default function Step({
  step,
  formData,
  handleChange,
  nextStep,
  prevStep,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit} className="step-form">
      <h2>Step {step}</h2>

      {step === 1 && (
        <>
          <label>First Name:</label>
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <label>Last Name:</label>
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </>
      )}

      {step === 2 && (
        <>
          <label>Car Model:</label>
          <input
            id="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
          <label>Car Price:</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
            required
          />
        </>
      )}

      {step === 3 && (
        <>
          <label>Card Info:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
            required
          />
          <label>Expiry Date:</label>
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            required
          />
        </>
      )}

      <div className="buttons">
        {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
        {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}

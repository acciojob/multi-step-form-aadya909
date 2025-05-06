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
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div id="step1">
          <h2>Customer Details</h2>
          <label htmlFor="first_name">First Name:</label>
          <input
            id="first_name"
            value={formData.first_name}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="last_name">Last Name:</label>
          <input
            id="last_name"
            value={formData.last_name}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {step === 2 && (
        <div id="step2">
          <h2>Car Details</h2>
          <label htmlFor="model">Car Model:</label>
          <input
            id="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="car_price">Car Price:</label>
          <input
            id="car_price"
            value={formData.car_price}
            onChange={handleChange}
            required
          />
        </div>
      )}

      {step === 3 && (
        <div id="step3">
          <h2>Payment Details</h2>
          <label htmlFor="card_info">Card Info:</label>
          <input
            id="card_info"
            value={formData.card_info}
            onChange={handleChange}
            required
          />
          <br />
          <label htmlFor="expiry_date">Expiry Date:</label>
          <input
            id="expiry_date"
            value={formData.expiry_date}
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div style={{ marginTop: "20px" }}>
        {step > 1 && <button type="button" onClick={prevStep}>Previous</button>}
        {step < 3 && <button type="button" onClick={nextStep}>Next</button>}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
}



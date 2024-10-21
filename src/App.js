// src/App.js
import React, { useState } from 'react';
import CustomerCall from './components/CustomerCall';
import BusinessOwnerResponse from './components/BusinessOwnerResponse';
import CustomerPayment from './components/CustomerPayment';
import DeliveryDetails from './components/DeliveryDetails';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="App">
      <h1>Laptop Purchase Flow</h1>
      {step === 1 && <CustomerCall nextStep={nextStep} />}
      {step === 2 && <BusinessOwnerResponse nextStep={nextStep} />}
      {step === 3 && <CustomerPayment nextStep={nextStep} />}
      {step === 4 && <DeliveryDetails />}
    </div>
  );
}

export default App;

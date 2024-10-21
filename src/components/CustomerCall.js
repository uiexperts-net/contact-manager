// src/components/CustomerCall.js
import React from 'react';

const CustomerCall = ({ nextStep }) => {
  return (
    <div>
      <h2>Customer Call</h2>
      <p>Customer makes a call to the laptop shop on Oct 01, 2024, 10:00 AM.</p>
      <button onClick={nextStep}>Proceed</button>
    </div>
  );
};

export default CustomerCall;

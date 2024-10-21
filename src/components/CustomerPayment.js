// src/components/CustomerPayment.js
import React from 'react';

const CustomerPayment = ({ nextStep }) => {
  return (
    <div>
      <h2>Customer Payment</h2>
      <p>Customer makes the payment on Oct 02, 2024, 11:00 AM.</p>
      <button onClick={nextStep}>Proceed</button>
    </div>
  );
};

export default CustomerPayment;

// src/components/BusinessOwnerResponse.js
import React from 'react';

const BusinessOwnerResponse = ({ nextStep }) => {
  return (
    <div>
      <h2>Business Owner Response</h2>
      <p>Business owner shares laptop details on Oct 01, 2024, 11:00 AM.</p>
      <button onClick={nextStep}>Proceed</button>
    </div>
  );
};

export default BusinessOwnerResponse;

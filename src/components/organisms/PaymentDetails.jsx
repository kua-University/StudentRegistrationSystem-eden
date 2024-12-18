/* eslint-disable react/prop-types */

// import React from "react";
import InputField from "../atoms/InputField";

const PaymentDetails = ({ paymentData, onChange }) => {
  return (
    <div className="space-y-4">
      <InputField
        label="Amount"
        name="amount"
        type="number"
        value={paymentData.amount}
        onChange={onChange}
      />
      <InputField
        label="Payment Method"
        name="method"
        type="text"
        value={paymentData.method}
        onChange={onChange}
      />
    </div>
  );
};

export default PaymentDetails;

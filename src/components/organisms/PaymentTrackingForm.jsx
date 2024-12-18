/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PaymentDetails from "../molecules/PaymentDetails";
import Button from "../atoms/Button";
import PaymentStatus from "../atoms/PaymentStatus";

const PaymentTrackingForm = () => {
  const [paymentData, setPaymentData] = useState({
    amount: "",
    method: "",
  });

  const [paymentStatus, setPaymentStatus] = useState("Not Paid");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (paymentData.amount && paymentData.method) {
      setPaymentStatus("Paid");
    } else {
      setPaymentStatus("Pending");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 space-y-6 border border-gray-300 rounded-lg shadow-lg"
    >
      <h3 className="text-xl font-semibold">Payment Tracking</h3>
      <PaymentDetails paymentData={paymentData} onChange={handleChange} />
      <Button label="Submit Payment" onClick={handleSubmit} />
      <PaymentStatus status={paymentStatus} />
    </form>
  );
};

export default PaymentTrackingForm;

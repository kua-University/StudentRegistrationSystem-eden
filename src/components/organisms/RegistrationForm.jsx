/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import FormGroup from "../molecules/FormGroup";
import Button from "../atoms/Button";
import PaymentTrackingForm from "../organisms/PaymentTrackingForm";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration Data: ", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg p-6 mx-auto space-y-6">
      <h3 className="text-2xl font-semibold">Student Registration</h3>
      <FormGroup
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={handleChange}
      />
      <FormGroup
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <FormGroup
        label="Age"
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
      />
      <FormGroup
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button label="Register" onClick={handleSubmit} />
      <PaymentTrackingForm />
    </form>
  );
};

export default RegistrationForm;

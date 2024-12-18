/* eslint-disable react/prop-types */
const PaymentStatus = ({ status }) => {
  return (
    <div
      className={`mt-4  text-lg ${
        status === "paid" ? "text-green-500" : "text-red-500"
      } `}
    >
      {status}
    </div>
  );
};

export default PaymentStatus;

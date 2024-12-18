/* eslint-disable react/prop-types */

const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue transition duration-300"
    >
      {label}
    </button>
  );
};

export default Button;

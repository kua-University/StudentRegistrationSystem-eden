/* eslint-disable react/prop-types */
const InputFields = ({ label, type, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-smfont-medium">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 px-4 py-4 border-gray-300 rounded-lg w-full "
        required
      />
    </div>
  );
};

export default InputFields;

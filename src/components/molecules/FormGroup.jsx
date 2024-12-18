import InputFields from "../atoms/InputFields";

// eslint-disable-next-line react/prop-types
export const FormGroup = ({ label, name, type, value, onChange }) => {
  return (
    <div className="mb-4">
      <InputFields
        label={label}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default FormGroup;

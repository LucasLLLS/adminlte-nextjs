const SmartInput = ({
  label,
  onChange,
  name
}) => {
  return (
    <label className="w-100">
      {label}
      <input
        className="form-control"
        name={name}
        onChange={onChange || (() => {})} 
      />
    </label>
  );
};

export default SmartInput;

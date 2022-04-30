const InputField = ({ value, label,name, placeholder, type, onChange,className }) => {
  return (
    <>
      <div className="form-floating mb-3">
      
        <input
          type={type}
          value={value}
          name={name}
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          id="inputValues"
        />
          {label && <label className="bg-transparent" htmlFor="inputValues">{label}</label>}
      </div>
    </>
  );
};

export default InputField;

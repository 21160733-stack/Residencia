const FormField = ({
  label,
  id,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  required = false,
  disabled = false,
  className = "",
  options = [], // For select fields
}) => {
  return (
    <div className={`form-field ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}

      {type === "select" ? (
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          className={disabled ? "disabled" : ""}
        >
          <option value="">-- Seleccionar --</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          autoComplete={type === "password" ? "current-password" : type === "email" ? "email" : "off"}
          className={disabled ? "disabled" : ""}
        />
      )}
    </div>
  );
};

export default FormField;
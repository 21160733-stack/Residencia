import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const PasswordField = ({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  helpText,
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`form-field ${className}`}>
      {label && <label htmlFor={id}>{label}</label>}

      <div className="password-container">
        <input
          type={showPassword ? "text" : "password"}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          minLength={8}
          autoComplete="current-password"
        />

        <button
          type="button"
          className="eye-button"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
          tabIndex="-1" // Don't focus when tabbing through form
        >
          {showPassword ? (
            <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
          ) : (
            <EyeIcon className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {helpText && <small className="password-help">{helpText}</small>}
    </div>
  );
};

export default PasswordField;
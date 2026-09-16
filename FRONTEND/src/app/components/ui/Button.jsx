const Button = ({
  children,
  variant = "primary", // primary, secondary, link, danger
  type = "button",
  onClick,
  disabled = false,
  loading = false,
  className = "",
  fullWidth = false,
}) => {
  const baseClass = variant === "link" ? "btn--link" : "btn";
  const variantClass = variant !== "link" ? `btn--${variant}` : "";
  const widthClass = fullWidth ? "btn--full-width" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClass} ${variantClass} ${widthClass} ${className}`.trim()}
    >
      {loading ? "Cargando..." : children}
    </button>
  );
};

export default Button;
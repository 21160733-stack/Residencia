const ErrorAlert = ({ message, className = "" }) => {
  if (!message) return null;

  return (
    <div className={`error-alert ${className}`}>
      {message}
    </div>
  );
};

export default ErrorAlert;
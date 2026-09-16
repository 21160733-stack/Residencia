const ServiceCard = ({ title, onClick, disabled = false }) => {
  return (
    <button
      className="service-card"
      onClick={onClick}
      disabled={disabled}
    >
      <span dangerouslySetInnerHTML={{ __html: title }}></span>
    </button>
  );
};

export default ServiceCard;
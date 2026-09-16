const Header = ({ variant = "simple" }) => {
  return (
    <header className={`header ${variant === "full" ? "header--full" : "header--simple"}`}>
      <div className="header-content">
        {variant === "simple" && (
          <span className="header-title">CATS</span>
        )}

        {variant === "full" && (
          <>
            <div className="header-brand">
              <img
                src="/logos/AGUA BIENESTAR_VERTICAL.png"
                alt="Agua Bienestar"
                className="header-logo"
              />
              <div className="header-brand-text">
                <span className="brand-title">AGUA BIENESTAR</span>
                <span className="brand-subtitle">
                  COMISIÓN ESTATAL DEL AGUA PARA <br /> EL BIENESTAR
                </span>
              </div>
            </div>

            <div className="header-page-title">
              <h1>Centro de Atención a Trámites y <br /> Servicios de la CEABIEN</h1>
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
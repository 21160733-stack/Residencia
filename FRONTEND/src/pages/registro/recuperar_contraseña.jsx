import "./recuperar_contraseña.css";

function Recuperar({ volverLogin }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Solicitud de recuperación de contraseña");

    alert(
      "Si el usuario existe, se enviarán instrucciones para recuperar la contraseña."
    );
  };

  return (
    <div className="recuperar-page">

      {/* Encabezado */}
      <header className="recuperar-header">
        <div className="header-content">
          <span className="header-title"> CATS </span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="recuperar-main">

        {/* Logo */}
        <section className="recuperar-brand">
          <img
            src="/logos/AGUA BIENESTAR_VERTICAL.png"
            alt="Agua Bienestar"
            className="logo-agua"
          />
        </section>

        {/* Formulario */}
        <section className="recuperar-form-section">

          <div className="recuperar-card">

            <h1>RECUPERAR CONTRASEÑA</h1>

            <p className="recuperar-description">
              Ingresa tu usuario o correo electrónico para recuperar
              el acceso a tu cuenta.
            </p>

            <form onSubmit={handleSubmit}>

              {/* Usuario */}
              <div className="form-group">
                <label htmlFor="usuario">
                  Usuario
                </label>

                <input
                  type="text"
                  id="usuario"
                  name="usuario"
                  placeholder="Ingresa tu usuario"
                  autoComplete="username"
                  required
                />
              </div>

              {/* Correo */}
              <div className="form-group">
                <label htmlFor="correo">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="Ingresa tu correo electrónico"
                  autoComplete="email"
                  required
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                className="recuperar-button"
              >
                RECUPERAR CONTRASEÑA
              </button>

            </form>

            {/* Regresar */}
            <div className="recuperar-links">

              <p>
                ¿Recordaste tu contraseña?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={volverLogin}
                >
                  Iniciar sesión
                </button>
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* Pie de página */}
      <footer className="recuperar-footer">
        <p>
          Comisión Estatal del Agua para el Bienestar
        </p>
      </footer>

    </div>
  );
}

export default Recuperar;
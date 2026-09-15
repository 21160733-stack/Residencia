import { useState } from "react";
import "./Login.css";

function Login({ irARegistro, irARecuperar, irAPrincipal }) 
{

  const [usuario, setUsuario] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState("");
const [cargando, setCargando] = useState(false);

  const handleSubmit = async (event) => {
  event.preventDefault();
  setError("");
  setCargando(true);

  try {
    const respuesta = await fetch(
      "http://localhost:8080/api/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          usuario: usuario,
          password: password,
        }),
      }
    );

    const datos = await respuesta.json();

    if (!datos.exitoso) {
      setError(datos.mensaje);
      return;
    }

    console.log("Login correcto:", datos);

    irAPrincipal(datos.usuario || usuario);

    // Más adelante aquí mandaremos al usuario
    // a la pantalla principal de CATS.

  } catch (error) {
    console.error(error);

    setError(
      "No se pudo conectar con el servidor."
    );
  } finally {
    setCargando(false);
  }
};

  return (
    <div className="login-page">

      {/* Encabezado */}
      <header className="login-header">
        <div className="header-content">
          <span className="header-title"> CATS </span>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="login-main">

        {/* Sección izquierda: logo */}
        <section className="login-brand">
          <img
            src="/logos/AGUA BIENESTAR_VERTICAL.png"
            alt="Agua Bienestar"
            className="logo-agua"
          />
        </section>

        {/* Sección derecha: formulario */}
        <section className="login-form-section">

          <div className="login-card">

            <h1>BIENVENIDO</h1>

            <p className="login-description">
              Ingresa tus datos para iniciar sesión
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
                value={usuario}
                onChange={(event) => setUsuario(event.target.value)}
                required
                />
              </div>

              {/* Contraseña */}
              <div className="form-group">
                <label htmlFor="password">
                  Contraseña
                </label>

                <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña"
                autoComplete="current-password" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                />
              </div>

              {/* Mensaje de error */}
              {error && (
            <div className="error-message">
              {error}
            </div>
              )}

              {/* Botón */}
              <button
              type="submit"
              className="login-button"
              disabled={cargando}
            >
              {cargando ? "INICIANDO..." : "INICIAR SESIÓN"}
            </button>

            </form>

            {/* Registro */}
            <div className="login-links">

              <p>
                ¿Eres nuevo?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={irARegistro}
                >
                  Regístrate ahora
                </button>
              </p>

              <p>
                ¿Olvidaste tu contraseña?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={irARecuperar}
                >
                  Recupérala ahora
                </button>
              </p>

            </div>

          </div>

        </section>

      </main>

      {/* Pie de página */}
      <footer className="login-footer">
        <p>
          Comisión Estatal del Agua para el Bienestar
        </p>
      </footer>

    </div>
  );
}

export default Login;
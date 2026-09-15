import { useState } from "react";
import "./nuevo_usuario.css";

function Registro({ volverLogin }) {

  const [formulario, setFormulario] = useState({
    nombre: "",
    apellidos: "",
    tipoRepresentacion: "",
    localidad: "",
    municipio: "",
    correo: "",
    confirmarCorreo: "",
    contrasena: "",
    confirmarContrasena: "",
  });

  const [mostrarContrasena, setMostrarContrasena] = useState(false);
  const [mostrarConfirmarContrasena, setMostrarConfirmarContrasena] =
    useState(false);

  const [error, setError] = useState("");

  const usuarioAsignado = "DANIEL.J-A";

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });

    setError("");
  };

  const validarContrasena = (contrasena) => {
    /*
      Requisitos:
      - mínimo 8 caracteres
      - una mayúscula
      - una minúscula
      - un número
      - un carácter especial
    */

    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

    return regex.test(contrasena);
  };

  const validarCorreo = (correo) => {
    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(correo);
  };

  const crearUsuario = (event) => {
    event.preventDefault();

    // Validar correo
    if (!validarCorreo(formulario.correo)) {
      setError(
        "Ingresa un correo electrónico válido. Ejemplo: usuario@correo.com"
      );
      return;
    }

    // Confirmar correo
    if (formulario.correo !== formulario.confirmarCorreo) {
      setError("Los correos electrónicos no coinciden.");
      return;
    }

    // Validar contraseña
    if (!validarContrasena(formulario.contrasena)) {
      setError(
        "La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
      );
      return;
    }

    // Confirmar contraseña
    if (
      formulario.contrasena !== formulario.confirmarContrasena
    ) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    console.log("Usuario registrado:", formulario);

    alert("Usuario creado correctamente.");

    volverLogin();
  };

  return (
    <div className="registro-page">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <header className="registro-header">

        <div className="header-left">
          <h2>AGUA BIENESTAR</h2>

          <span>
            COMISIÓN ESTATAL DEL AGUA PARA EL BIENESTAR
          </span>
        </div>

        <div className="header-right">

          <h1>
            Centro de Atención a Trámites y
          </h1>

          <p>
            Servicios de la CEABIEN
          </p>

        </div>

      </header>


      {/* =========================
          CONTENIDO
      ========================= */}

      <main className="registro-content">

        <h2 className="titulo">
          NUEVO REGISTRO
        </h2>


        <div className="registro-body">

          {/* =========================
              LOGO
          ========================= */}

          <div className="logo-section">

            <img
              src="/logos/AGUA BIENESTAR_VERTICAL.png"
              alt="Agua Bienestar"
              className="registro-logo"
            />

          </div>


          {/* =========================
              FORMULARIO
          ========================= */}

          <form
            className="registro-form"
            onSubmit={crearUsuario}
          >

            {/* NOMBRE / APELLIDOS / USUARIO */}

            <div className="form-row three">

              <div className="form-group">

                <label htmlFor="nombre">
                  Nombre
                </label>

                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formulario.nombre}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="apellidos">
                  Apellidos
                </label>

                <input
                  type="text"
                  id="apellidos"
                  name="apellidos"
                  value={formulario.apellidos}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Usuario asignado
                </label>

                <input
                  type="text"
                  value={usuarioAsignado}
                  disabled
                  className="disabled"
                />

              </div>

            </div>


            {/* TIPO REPRESENTACIÓN / LOCALIDAD */}

            <div className="form-row two">

              <div className="form-group">

                <label htmlFor="tipoRepresentacion">
                  Tipo de Representación
                </label>

                <select
                  id="tipoRepresentacion"
                  name="tipoRepresentacion"
                  value={formulario.tipoRepresentacion}
                  onChange={handleChange}
                  required
                >

                  <option value="">
                    -- Seleccionar --
                  </option>

                  <option value="Representante">
                    Representante
                  </option>

                  <option value="Beneficiario">
                    Beneficiario
                  </option>

                  <option value="Servidor Público">
                    Servidor Público
                  </option>

                </select>

              </div>


              <div className="form-group">

                <label htmlFor="localidad">
                  Localidad
                </label>

                <input
                  type="text"
                  id="localidad"
                  name="localidad"
                  value={formulario.localidad}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* MUNICIPIO / DISTRITO / REGIÓN */}

            <div className="form-row three">

              <div className="form-group">

                <label htmlFor="municipio">
                  Municipio
                </label>

                <input
                  type="text"
                  id="municipio"
                  name="municipio"
                  placeholder="Ej. Santa María"
                  value={formulario.municipio}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label>
                  Distrito
                </label>

                <input
                  type="text"
                  value="Autorellenado"
                  disabled
                  className="disabled"
                />

              </div>


              <div className="form-group">

                <label>
                  Región
                </label>

                <input
                  type="text"
                  value="Autorellenado"
                  disabled
                  className="disabled"
                />

              </div>

            </div>


            {/* CORREOS */}

            <div className="form-row two">

              <div className="form-group">

                <label htmlFor="correo">
                  Correo electrónico
                </label>

                <input
                  type="email"
                  id="correo"
                  name="correo"
                  placeholder="usuario@correo.com"
                  value={formulario.correo}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="confirmarCorreo">
                  Confirmar correo
                </label>

                <input
                  type="email"
                  id="confirmarCorreo"
                  name="confirmarCorreo"
                  placeholder="usuario@correo.com"
                  value={formulario.confirmarCorreo}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>


            {/* CONTRASEÑAS */}

            <div className="form-row two">

              {/* CONTRASEÑA */}

              <div className="form-group">

                <label htmlFor="contrasena">
                  Contraseña
                </label>

                <div className="password-container">

                  <input
                    type={
                      mostrarContrasena
                        ? "text"
                        : "password"
                    }
                    id="contrasena"
                    name="contrasena"
                    placeholder="Crea una contraseña"
                    value={formulario.contrasena}
                    onChange={handleChange}
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    className="eye-button"
                    onClick={() =>
                      setMostrarContrasena(
                        !mostrarContrasena
                      )
                    }
                    aria-label={
                      mostrarContrasena
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"
                    }
                  >
                    {mostrarContrasena ? "◉" : "👁"}
                  </button>

                </div>

                <small className="password-help">
                  Mínimo 8 caracteres, una mayúscula,
                  una minúscula, un número y un carácter especial.
                </small>

              </div>


              {/* CONFIRMAR CONTRASEÑA */}

              <div className="form-group">

                <label htmlFor="confirmarContrasena">
                  Confirmar contraseña
                </label>

                <div className="password-container">

                  <input
                    type={
                      mostrarConfirmarContrasena
                        ? "text"
                        : "password"
                    }
                    id="confirmarContrasena"
                    name="confirmarContrasena"
                    placeholder="Repite tu contraseña"
                    value={
                      formulario.confirmarContrasena
                    }
                    onChange={handleChange}
                    minLength={8}
                    required
                  />

                  <button
                    type="button"
                    className="eye-button"
                    onClick={() =>
                      setMostrarConfirmarContrasena(
                        !mostrarConfirmarContrasena
                      )
                    }
                    aria-label={
                      mostrarConfirmarContrasena
                        ? "Ocultar contraseña"
                        : "Mostrar contraseña"
                    }
                  >
                    {mostrarConfirmarContrasena ? "◉" : "👁"}
                  </button>

                </div>

              </div>

            </div>


            {/* ERROR */}

            {error && (
              <div className="error-message">
                {error}
              </div>
            )}


            {/* BOTONES */}

            <div className="registro-buttons">

              <button
                type="submit"
                className="btn crear"
              >
                Crear Usuario
              </button>

              <button
                type="button"
                className="btn cancelar"
                onClick={volverLogin}
              >
                Cancelar
              </button>

            </div>

          </form>

        </div>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="registro-footer">

        <p>
          Comisión Estatal del Agua para el Bienestar
        </p>

      </footer>

    </div>
  );
}

export default Registro;
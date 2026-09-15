import "./Principal.css";

function Principal({ usuario }) {
  return (
    <div className="principal-page">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <header className="principal-header">

        <div className="principal-header-content">

          <div className="principal-brand">

            <img
              src="/logos/AGUA BIENESTAR_VERTICAL.png"
              alt="Agua Bienestar"
              className="principal-logo"
            />

            <div className="principal-brand-text">
              <span className="brand-title">
                AGUA BIENESTAR
              </span>

              <span className="brand-subtitle">
                COMISIÓN ESTATAL DEL AGUA PARA
                <br />
                EL BIENESTAR
              </span>
            </div>

          </div>


          <div className="principal-title">

            <h1>
              Centro de Atención a Trámites y
              <br />
              Servicios de la CEABIEN
            </h1>

          </div>

        </div>

      </header>


      {/* =========================
          CONTENIDO
      ========================= */}

      <main className="principal-main">

        <div className="principal-welcome">

          <h2>
            BIENVENIDO: <span>"{usuario || "USUARIO"}"</span>
          </h2>

          <p>
            ¿Qué deseas realizar?
          </p>

        </div>


        <div className="services-container">


          {/* =========================================
              COLUMNA IZQUIERDA
          ========================================= */}

          <section className="services-column left-column">


            {/* ANÁLISIS */}
            <div className="service-section">

              <h3>
                Servicio de Análisis Físico-Químico y
                Bacteriológico
                <span>(desplegar)</span>
              </h3>

              <div className="buttons-grid">


                <button className="service-button">
                  <span>
                    Calidad del agua residual de un punto
                    de muestreo
                    <br />
                    descarga, entrada o salida
                  </span>
                </button>


                <button className="service-button">
                  <span>
                    Estudio de calidad del agua para
                    consumo humano
                  </span>
                </button>


                <button className="service-button">
                  <span>
                    Estudio de calidad del agua para
                    consumo humano
                    <br />
                    (Con muestras entregadas en el laboratorio)
                  </span>
                </button>


                <button className="service-button">
                  <span>
                    Estudio de calidad del agua residual de
                    una PTAR
                    <br />
                    entrada y salida
                    <br />
                    (Con muestras entregadas en el laboratorio)
                  </span>
                </button>


                <button className="service-button">
                  <span>
                    Estudio de la calidad del agua residual
                    de una PTAR
                    <br />
                    entrada y salida
                  </span>
                </button>

              </div>

            </div>


            {/* VALIDACIÓN */}
            <div className="service-section validation-section">

              <h3>
                Validación y Acompañamiento en Trámites
                <span>(desplegar)</span>
              </h3>

              <div className="buttons-grid">


                <button className="service-button">
                  <span>
                    Incorporación al "Programa Acciones
                    de Desinfección del Agua"
                  </span>
                </button>


                <button className="service-button">
                  <span>
                    Validación normativa de proyectos
                    ejecutivos en materia de agua potable,
                    alcantarillado y saneamiento
                  </span>
                </button>

              </div>

            </div>

          </section>


          {/* =========================================
              COLUMNA DERECHA
          ========================================= */}

          <section className="services-column right-column">


            {/* MANTENIMIENTO */}
            <div className="service-section">

              <h3>
                Servicios de Mantenimiento
                <span>(desplegar)</span>
              </h3>

              <div className="buttons-column">


                <button className="service-button">
                  <span>
                    Rehabilitación, Mantenimiento y
                    Desazolve de pozos profundos
                  </span>
                </button>


                <button className="service-button">
                  <span>
                    Rehabilitación y Mantenimiento de los
                    Sistemas de Agua Potable y Drenaje
                  </span>
                </button>

              </div>

            </div>


            {/* CONTRATACIÓN */}
            <div className="service-section contract-section">

              <h3>
                Contratación de Servicios
                <span>(desplegar)</span>
              </h3>

              <div className="buttons-column">


                <button className="service-button">
                  <span>
                    Servicio de Agua Potable
                  </span>
                </button>


                <button className="service-button">
                  <span>
                    Servicio de Drenaje
                  </span>
                </button>

              </div>

            </div>

          </section>

        </div>

      </main>


      {/* =========================
          FOOTER
      ========================= */}

      <footer className="principal-footer">

        <p>
          Comisión Estatal del Agua para el Bienestar
        </p>

      </footer>

    </div>
  );
}

export default Principal;
import PageLayout from "../../../app/components/layout/PageLayout";
import Button from "../../../app/components/ui/Button";
import { useAuth } from "../../../app/hooks/useAuth";
import ServiceCard from "../components/ServiceCard";

const ANALYSIS_SERVICES = [
  { id: "calidad-descarga", title: "Calidad del agua residual de un punto de muestreo<br/>descarga, entrada o salida" },
  { id: "calidad-consumo", title: "Estudio de calidad del agua para consumo humano" },
  { id: "calidad-consumo-entregada", title: "Estudio de calidad del agua para consumo humano<br/>(Con muestras entregadas en el laboratorio)" },
  { id: "calidad-ptar-entregada", title: "Estudio de calidad del agua residual de una PTAR<br/>entrada y salida<br/>(Con muestras entregadas en el laboratorio)" },
  { id: "calidad-ptar", title: "Estudio de la calidad del agua residual de una PTAR<br/>entrada y salida" },
];

const VALIDATION_SERVICES = [
  { id: "incorporacion-desinfeccion", title: "Incorporación al \"Programa Acciones de Desinfección del Agua\"" },
  { id: "validacion-normativa", title: "Validación normativa de proyectos ejecutivos en materia de agua potable, alcantarillado y saneamiento" },
];

const MAINTENANCE_SERVICES = [
  { id: "mantenimiento-pozos", title: "Rehabilitación, Mantenimiento y Desazolve de pozos profundos" },
  { id: "mantenimiento-sistemas", title: "Rehabilitación y Mantenimiento de los Sistemas de Agua Potable y Drenaje" },
];

const CONTRACT_SERVICES = [
  { id: "servicio-agua", title: "Servicio de Agua Potable" },
  { id: "servicio-drenaje", title: "Servicio de Drenaje" },
];

const DashboardPage = () => {
  const { user, logout } = useAuth();

  return (
    <PageLayout headerVariant="full" className="dashboard-page">
      <div className="dashboard-main">
        <div className="welcome-section">
          <div className="welcome-header">
            <h2>
              BIENVENIDO: <span>"{user?.username || "USUARIO"}"</span>
            </h2>
            <Button variant="danger" onClick={logout}>Cerrar Sesión</Button>
          </div>
          <p>¿Qué deseas realizar?</p>
        </div>

        <div className="services-container">
          {/* COLUMNA IZQUIERDA */}
          <section className="services-column left-column">
            {/* ANÁLISIS */}
            <div className="service-section">
              <h3>
                Servicio de Análisis Físico-Químico y Bacteriológico <span>(desplegar)</span>
              </h3>
              <div className="buttons-grid">
                {ANALYSIS_SERVICES.map((service) => (
                  <ServiceCard key={service.id} title={service.title} />
                ))}
              </div>
            </div>

            {/* VALIDACIÓN */}
            <div className="service-section validation-section">
              <h3>
                Validación y Acompañamiento en Trámites <span>(desplegar)</span>
              </h3>
              <div className="buttons-grid">
                {VALIDATION_SERVICES.map((service) => (
                  <ServiceCard key={service.id} title={service.title} />
                ))}
              </div>
            </div>
          </section>

          {/* COLUMNA DERECHA */}
          <section className="services-column right-column">
            {/* MANTENIMIENTO */}
            <div className="service-section">
              <h3>
                Servicios de Mantenimiento <span>(desplegar)</span>
              </h3>
              <div className="buttons-column">
                {MAINTENANCE_SERVICES.map((service) => (
                  <ServiceCard key={service.id} title={service.title} />
                ))}
              </div>
            </div>

            {/* CONTRATACIÓN */}
            <div className="service-section contract-section">
              <h3>
                Contratación de Servicios <span>(desplegar)</span>
              </h3>
              <div className="buttons-column">
                {CONTRACT_SERVICES.map((service) => (
                  <ServiceCard key={service.id} title={service.title} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
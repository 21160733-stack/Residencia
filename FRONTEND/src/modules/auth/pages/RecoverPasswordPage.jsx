import { useNavigate } from "react";
import PageLayout from "../../../app/components/layout/PageLayout";
import Button from "../../../app/components/ui/Button";
import FormField from "../../../app/components/ui/FormField";

const RecoverPasswordPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Si el usuario o correo existe, se enviarán instrucciones para recuperar la contraseña.");
  };

  return (
    <PageLayout headerVariant="simple" className="recover-page">
      <div className="recover-main">
        <section className="recover-brand">
          <img
            src="/logos/AGUA BIENESTAR_VERTICAL.png"
            alt="Agua Bienestar"
            className="logo-agua"
          />
        </section>

        <section className="recover-form-section">
          <div className="recover-card">
            <h1>RECUPERAR CONTRASEÑA</h1>
            <p className="recover-description">
              Ingresa tu usuario o correo electrónico para recuperar el acceso a tu cuenta.
            </p>

            <form onSubmit={handleSubmit}>
              <FormField
                label="Usuario"
                id="usuario"
                name="usuario"
                placeholder="Ingresa tu usuario"
                required
              />

              <FormField
                type="email"
                label="Correo electrónico"
                id="correo"
                name="correo"
                placeholder="Ingresa tu correo electrónico"
                required
              />

              <Button type="submit" fullWidth>
                RECUPERAR CONTRASEÑA
              </Button>
            </form>

            <div className="recover-links">
              <p>
                ¿Recordaste tu contraseña?{" "}
                <Button variant="link" onClick={() => navigate("/login")}>
                  Iniciar sesión
                </Button>
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default RecoverPasswordPage;
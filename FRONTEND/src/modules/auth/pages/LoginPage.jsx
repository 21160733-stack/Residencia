import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageLayout from "../../../app/components/layout/PageLayout";
import Button from "../../../app/components/ui/Button";
import ErrorAlert from "../../../app/components/ui/ErrorAlert";
import FormField from "../../../app/components/ui/FormField";
import PasswordField from "../../../app/components/ui/PasswordField";
import { useAuth } from "../../../app/hooks/useAuth";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await login(username, password);
      if (result.success) {
        navigate("/dashboard", { replace: true });
      } else {
        setError(result.error || "Invalid username or password");
      }
    } catch (err) {
      setError("No se pudo conectar con el servidor.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PageLayout headerVariant="simple" className="login-page">
      <div className="login-main">
        <section className="login-brand">
          <img
            src="/logos/AGUA BIENESTAR_VERTICAL.png"
            alt="Agua Bienestar"
            className="logo-agua"
          />
        </section>

        <section className="login-form-section">
          <div className="login-card">
            <h1>BIENVENIDO</h1>
            <p className="login-description">Ingresa tus datos para iniciar sesión</p>

            <form onSubmit={handleSubmit}>
              <FormField
                label="Usuario"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingresa tu usuario"
                required
              />

              <PasswordField
                label="Contraseña"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingresa tu contraseña"
                required
              />

              <ErrorAlert message={error} />

              <Button type="submit" loading={isLoading} fullWidth>
                INICIAR SESIÓN
              </Button>
            </form>

            <div className="login-links">
              <p>
                ¿Eres nuevo?{" "}
                <Link to="/register" className="btn--link">
                  Regístrate ahora
                </Link>
              </p>
              <p>
                ¿Olvidaste tu contraseña?{" "}
                <Link to="/recover-password" className="btn--link">
                  Recupérala ahora
                </Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default LoginPage;
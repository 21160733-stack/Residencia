import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageLayout from "../../../app/components/layout/PageLayout";
import Button from "../../../app/components/ui/Button";
import ErrorAlert from "../../../app/components/ui/ErrorAlert";
import FormField from "../../../app/components/ui/FormField";
import PasswordField from "../../../app/components/ui/PasswordField";
import { validateEmail, validatePassword } from "../../../app/utils/validators";
import { authService } from "../services/authService";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
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
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validations
    const emailValidation = validateEmail(formData.correo);
    if (!emailValidation.valid) {
      return setError("Ingresa un correo electrónico válido. Ejemplo: usuario@correo.com");
    }

    if (formData.correo !== formData.confirmarCorreo) {
      return setError("Los correos electrónicos no coinciden.");
    }

    const passValidation = validatePassword(formData.contrasena);
    if (!passValidation.valid) {
      return setError("La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
    }

    if (formData.contrasena !== formData.confirmarContrasena) {
      return setError("Las contraseñas no coinciden.");
    }

    setIsLoading(true);
    try {
      // Prepared for actual backend connection
      await authService.register(formData);
      alert("Usuario creado correctamente (Mock).");
      navigate("/login");
    } catch (err) {
      setError(err.message || "Error al registrar el usuario.");
    } finally {
      setIsLoading(false);
    }
  };

  const tipoRepresentacionOptions = [
    { value: "Representante", label: "Representante" },
    { value: "Beneficiario", label: "Beneficiario" },
    { value: "Servidor Público", label: "Servidor Público" },
  ];

  return (
    <PageLayout headerVariant="full" className="register-page">
      <div className="register-content">
        <h2 className="titulo">NUEVO REGISTRO</h2>

        <div className="register-body">
          <div className="logo-section">
            <img
              src="/logos/AGUA BIENESTAR_VERTICAL.png"
              alt="Agua Bienestar"
              className="register-logo"
            />
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            {/* NOMBRE / APELLIDOS / USUARIO (Disabled) */}
            <div className="form-row form-row--three">
              <FormField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} required />
              <FormField label="Apellidos" name="apellidos" value={formData.apellidos} onChange={handleChange} required />
              <FormField label="Usuario asignado" name="usuario" value="Autorellenado" disabled />
            </div>

            {/* TIPO REPRESENTACION / LOCALIDAD */}
            <div className="form-row form-row--two">
              <FormField
                type="select"
                label="Tipo de Representación"
                name="tipoRepresentacion"
                value={formData.tipoRepresentacion}
                onChange={handleChange}
                options={tipoRepresentacionOptions}
                required
              />
              <FormField label="Localidad" name="localidad" value={formData.localidad} onChange={handleChange} required />
            </div>

            {/* MUNICIPIO / DISTRITO / REGION */}
            <div className="form-row form-row--three">
              <FormField label="Municipio" name="municipio" placeholder="Ej. Santa María" value={formData.municipio} onChange={handleChange} required />
              <FormField label="Distrito" name="distrito" value="Autorellenado" disabled />
              <FormField label="Región" name="region" value="Autorellenado" disabled />
            </div>

            {/* CORREOS */}
            <div className="form-row form-row--two">
              <FormField type="email" label="Correo electrónico" name="correo" placeholder="usuario@correo.com" value={formData.correo} onChange={handleChange} required />
              <FormField type="email" label="Confirmar correo" name="confirmarCorreo" placeholder="usuario@correo.com" value={formData.confirmarCorreo} onChange={handleChange} required />
            </div>

            {/* CONTRASEÑAS */}
            <div className="form-row form-row--two">
              <PasswordField
                label="Contraseña"
                name="contrasena"
                placeholder="Crea una contraseña"
                value={formData.contrasena}
                onChange={handleChange}
                helpText="Mínimo 8 caracteres, una mayúscula, una minúscula, un número y un carácter especial."
                required
              />
              <PasswordField
                label="Confirmar contraseña"
                name="confirmarContrasena"
                placeholder="Repite tu contraseña"
                value={formData.confirmarContrasena}
                onChange={handleChange}
                required
              />
            </div>

            <ErrorAlert message={error} />

            <div className="register-buttons">
              <Button type="submit" loading={isLoading}>
                Crear Usuario
              </Button>
              <Button type="button" variant="secondary" onClick={() => navigate("/login")}>
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default RegisterPage;
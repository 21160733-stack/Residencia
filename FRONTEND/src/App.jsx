import { useState } from "react";

import Login from "./pages/login/login";
import Registro from "./pages/registro/nuevo_usuario";
import Recuperar from "./pages/registro/recuperar_contraseña";
import Principal from "./pages/modulos/principal";

function App() {
  const [pagina, setPagina] = useState("login");

  if (pagina === "registro") {
    return (
      <Registro
        volverLogin={() => setPagina("login")}
      />
    );
  }

  if (pagina === "recuperar") {
    return (
      <Recuperar
        volverLogin={() => setPagina("login")}
      />
    );
  }

    if (pagina === "principal") {
    return (
      <Principal
        usuario={usuario}
        cerrarSesion={() => {
          setUsuario("");
          setPagina("login");
        }}
      />
    );
  }

  return (
    <Login
      irARegistro={() => setPagina("registro")}
      irARecuperar={() => setPagina("recuperar")}
    />
  );
}

export default App;
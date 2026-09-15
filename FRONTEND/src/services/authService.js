const API_URL = "http://localhost:8080";

export const login = async (usuario, password) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usuario,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  return await response.json();
};
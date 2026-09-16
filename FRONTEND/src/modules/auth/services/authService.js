import { httpClient } from "../../../app/services/httpClient";

export const authService = {
  login: async (username, password) => {
    return await httpClient.post("/auth/login", { username, password });
  },

  register: async (data) => {
    // TODO: Connect this to the backend when POST /api/auth/register is available
    // return await httpClient.post("/auth/register", data);
    console.warn("Register endpoint not implemented in backend yet. Simulating success.");
    return Promise.resolve({ success: true, message: "User created successfully (mock)" });
  },
};
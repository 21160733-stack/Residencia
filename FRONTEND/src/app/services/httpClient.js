import { API_BASE_URL } from "../config/environment";
import { getToken, removeToken } from "../utils/tokenStorage";

const request = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;

  const headers = {
    "Content-Type": "application/json",
    ...options.headers,
  };

  const token = getToken();

  if (token) headers["Authorization"] = `Bearer ${token}`;

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(url, config);

    // If unauthorized, token is likely expired or invalid. Clear it.
    if (response.status === 401) {
      removeToken();
      // Only redirect if not already trying to login
      if (!endpoint.includes("/auth/login")) {
        window.location.href = "/login";
      }
      throw new Error("Unauthorized or session expired");
    }

    if (response.status === 403) throw new Error("Forbidden access");

    const data = await response.json().catch(() => null);

    if (!response.ok) {
      throw new Error(data?.message || data?.error || `HTTP Error ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error("HTTP Client Error:", error);
    throw error;
  }
};

export const httpClient = {
  get: (endpoint, options) => request(endpoint, { method: "GET", ...options }),
  post: (endpoint, body, options) => request(endpoint, { method: "POST", body: JSON.stringify(body), ...options }),
  put: (endpoint, body, options) => request(endpoint, { method: "PUT", body: JSON.stringify(body), ...options }),
  delete: (endpoint, options) => request(endpoint, { method: "DELETE", ...options }),
};
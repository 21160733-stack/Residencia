import { createContext, useCallback, useEffect, useState } from "react";
import { authService } from "../../modules/auth/services/authService";
import { getToken, getTokenPayload, removeToken, setToken as saveToken } from "../utils/tokenStorage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setTokenState] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state on mount
  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = getToken();
      if (storedToken) {
        const payload = getTokenPayload();

        // Check if token is expired
        if (payload && payload.exp && payload.exp * 1000 > Date.now()) {
          setTokenState(storedToken);
          setUser({ username: payload.sub, roles: payload.roles });
          setIsAuthenticated(true);
        } else {
          // Expired
          removeToken();
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const login = useCallback(async (username, password) => {
    try {
      const data = await authService.login(username, password);

      saveToken(data.token);
      setTokenState(data.token);
      setUser({ username: data.username, email: data.email, roles: data.roles });
      setIsAuthenticated(true);

      return { success: true };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }, []);

  const logout = useCallback(() => {
    removeToken();
    setTokenState(null);
    setUser(null);
    setIsAuthenticated(false);
  }, []);

  const value = {
    user,
    token,
    isAuthenticated,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
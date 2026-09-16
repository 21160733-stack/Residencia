import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import ProtectedRoute from "./ProtectedRoute";

// Pages
import LoginPage from "../../modules/auth/pages/LoginPage";
import RecoverPasswordPage from "../../modules/auth/pages/RecoverPasswordPage";
import RegisterPage from "../../modules/auth/pages/RegisterPage";
import DashboardPage from "../../modules/dashboard/pages/DashboardPage";

const AppRouter = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return null; // Or a global full-screen spinner
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RegisterPage />}
      />
      <Route
        path="/recover-password"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <RecoverPasswordPage />}
      />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Default Route */}
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
      />

      {/* Catch-all */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default AppRouter;

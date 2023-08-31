import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { login, logout, authenticatedUser } = useAuth();

  return (
    <AuthContext.Provider value={{ login, logout, authenticatedUser }}>
      {children}
    </AuthContext.Provider>
  );
}

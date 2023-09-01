import { createContext } from "react";
import { useAuth } from "../hooks/useAuth";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const { authenticatedUser, authStatus } = useAuth();

  return (
    <AuthContext.Provider value={{ authenticatedUser, authStatus }}>
      {children}
    </AuthContext.Provider>
  );
}

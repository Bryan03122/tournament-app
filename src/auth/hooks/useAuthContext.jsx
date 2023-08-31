import { useContext } from "react";
import { AuthContext } from "../context/auth-context";

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("You must call auth context within AuthProvider");
  }

  return { authContext };
};

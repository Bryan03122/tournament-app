import { useEffect, useState } from "react";
import { authStatus } from "../constants/constants";
import { onAuthenticatedUserChanged } from "../services/firebase-auth-service";

export const useAuth = () => {
  const [authenticatedUser, setAuthenticatedUser] = useState({
    user: null,
    status: authStatus.INIT,
  });

  const setUser = (user) => {
    setAuthenticatedUser({ user, status: authStatus.STARTED });
  };
  useEffect(() => {
    onAuthenticatedUserChanged(setUser);
  }, []);

  return {
    authenticatedUser: authenticatedUser.user,
    authStatus: authenticatedUser.status,
  };
};

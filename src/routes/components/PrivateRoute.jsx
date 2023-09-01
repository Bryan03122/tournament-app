import { Navigate, Outlet } from "react-router-dom";
import { authStatus } from "../../auth/constants/constants";
import { useAuthContext } from "../../auth/hooks/useAuthContext";

export function PrivateRoute() {
  const { authenticatedUser, authStatus: contextStatus } = useAuthContext();

  if (contextStatus === authStatus.INIT || authenticatedUser) return <Outlet />;

  return <Navigate to={"/auth/login"} />;
}

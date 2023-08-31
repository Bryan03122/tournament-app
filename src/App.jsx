import { useAuthContext } from "./auth/hooks/useAuthContext";
import { LoginPage } from "./auth/pages/LoginPage";

function App() {
  const { authContext } = useAuthContext();

  const { authenticatedUser } = authContext;

  return (
    <>
      <LoginPage />
      {JSON.stringify(authenticatedUser)}
    </>
  );
}

export default App;

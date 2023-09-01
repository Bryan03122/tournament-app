import { Card } from "flowbite-react";
import { LoginForm } from "../components/LoginForm";

export function LoginPage() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Card className="w-full max-w-sm ">
        <h4 className="text-3xl font-bold tracking-tight text-center">
          Iniciar Sesión
        </h4>
        <LoginForm />
      </Card>
    </div>
  );
}

import { Button, TextInput } from "flowbite-react";
import { InputLabel } from "../../common/components/InputLabel";
import { login } from "../services/firebase-auth-service";

export function LoginForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.target);

    const email = data.get("email").toString();
    const password = data.get("password").toString();

    await login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <InputLabel value="Correo Electrónico" htmlFor="email" />
        <TextInput
          name="email"
          id="email"
          placeholder="nombre@email.com"
          required
          type="email"
        />
      </div>
      <div>
        <InputLabel value="Contraseña" htmlFor="password1" />
        <TextInput id="password1" name="password" required type="password" />
      </div>

      <Button type="submit">Iniciar Sesión</Button>
    </form>
  );
}

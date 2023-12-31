import { FileInput, Modal, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Button } from "../../common/components/Button";
import { InputLabel } from "../../common/components/InputLabel";
import { usePlayerModalContext } from "../hooks/usePlayerModalContext";
import { createPlayer } from "../services/firestore-player-service";
import { uploadProfileImage } from "../services/storage-player-service";

export function CreatePlayerModal() {
  const { show, close } = usePlayerModalContext();
  return (
    <Modal show={show} onClose={close}>
      <Modal.Header>Crear jugador</Modal.Header>
      <CreatePlayerForm />
    </Modal>
  );
}

function CreatePlayerForm() {
  const { close } = usePlayerModalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    let player = {};

    const image = data.image[0];
    player.profileImageUrl = await uploadProfileImage({ image });

    player.name = data.name;
    console.log(player);
    await createPlayer({ player });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal.Body className="flex-col gap-4">
        <div>
          <InputLabel>Nombre</InputLabel>
          <TextInput
            {...register("name", {
              required: "El nombre es requerido",
            })}
            color={errors.name && "failure"}
            type="text"
            placeholder="Bryan Mariño"
            helperText={errors.name && errors.name.message}
          />
        </div>
        <div>
          <InputLabel>Foto</InputLabel>
          <FileInput
            {...register("image")}
            color={errors.image && "failure"}
            helperText={errors.image && errors.image.message}
          />
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-end">
        <Button disabled={isSubmitting} type="submit">
          Aceptar
        </Button>
        <Button color="gray" onClick={close}>
          Cancelar
        </Button>
      </Modal.Footer>
    </form>
  );
}

import { FileInput, Modal, TextInput } from "flowbite-react";
import { InputLabel } from "../../common/components/InputLabel";
import { Button } from "../../common/components/Button";
import { useCreatePlayerModalContext } from "../hooks/useCreatePlayerModalContext";
import { useForm } from "react-hook-form";
import { createPlayer } from "../services/firestore-player-service";
import { uploadProfileImage } from "../services/storage-player-service";

export function CreatePlayerModal() {
  const { setShow, show } = useCreatePlayerModalContext();
  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <Modal.Header>Crear jugador</Modal.Header>
      <CreatePlayerForm />
    </Modal>
  );
}

function CreatePlayerForm() {
  const { setShow } = useCreatePlayerModalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    let player = {};
    if (data.image) {
      const image = data.image[0];
      player.profileImageUrl = await uploadProfileImage({ image });
    }

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
        <Button color="gray" onClick={() => setShow(false)}>
          Cancelar
        </Button>
      </Modal.Footer>
    </form>
  );
}

import { Modal, TextInput } from "flowbite-react";

import { useForm } from "react-hook-form";
import { Button } from "../../common/components/Button";
import { InputLabel } from "../../common/components/InputLabel";
import { useTournamentModalContext } from "../hooks/useTournamentModalContext";
import { createTournament } from "../services/firestore-tournament-service";

export function CreateTournamentModal() {
  const { show, close } = useTournamentModalContext();
  return (
    <Modal show={show} onClose={close}>
      <Modal.Header>Crear Torneo</Modal.Header>
      <CreateTournamentForm />
    </Modal>
  );
}

export function CreateTournamentForm() {
  const { close } = useTournamentModalContext();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
  } = useForm();

  const onSubmit = (data) => {
    const { name, date } = data;

    createTournament({ tournament: { name, date } });
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
            placeholder="Campeonato relámpago"
            helperText={errors.name && errors.name.message}
          />
        </div>
        <div>
          <InputLabel>Fecha</InputLabel>
          <TextInput
            type="date"
            {...register("date", {
              required: "La fecha es requerida",
            })}
            color={errors.date && "failure"}
            helperText={errors.date && errors.date.message}
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

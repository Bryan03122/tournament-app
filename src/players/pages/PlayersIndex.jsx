import { Avatar, FileInput, Modal, Table, TextInput } from "flowbite-react";
import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "../../common/components/Button";
import { InputLabel } from "../../common/components/InputLabel";
import { Title } from "../../common/components/Title";

export function PlayersIndex() {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Title>Jugadores</Title>
      <Button
        onClick={() => setShow(true)}
        className="max-w-min"
        rightIcon={<AiFillPlusCircle />}
      >
        Agregar
      </Button>
      <CreatePlayerModal show={show} setShow={setShow} />
      <div className="h-full overflow-y-auto pr-3">
        <Table>
          <Table.Head className="sticky top-0 z-10">
            <Table.HeadCell className="sticky top-0">Foto</Table.HeadCell>
            <Table.HeadCell className="sticky top-0">Nombre</Table.HeadCell>
            <Table.HeadCell className="sticky top-0">Acciones</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            <Row />
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

function Row() {
  return (
    <Table.Row>
      <Table.Cell>
        <Avatar
          className="justify-start"
          rounded
          img={
            "https://scontent.fuio1-1.fna.fbcdn.net/v/t1.6435-9/90828775_1654306474708657_4833860046674722816_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHV0Eqkt-c3lX4RhQO2h_IPd94pX04vY-J33ilfTi9j4iaZNzl73lqF8GPwp_7BbsTWh_hUEFcWk4me3n-urODE&_nc_ohc=hKbA_WmSUegAX9jaSSG&_nc_oc=AQl4vPL81ribs7oLAdhJzqlkqcZV7kBXIZszlpxBAwMvwcVdLU0eos1VrXbnFJA1H9o&_nc_ht=scontent.fuio1-1.fna&oh=00_AfCM1tHnf365VJoM5OT0K2eLxWONbCbI9y5zgSprSyzPew&oe=65187CA4"
          }
        />
      </Table.Cell>
      <Table.Cell>Bryan Jair Mariño Gualli</Table.Cell>
      <Table.Cell className="flex gap-2">
        <Button>Ver</Button>
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </Table.Cell>
    </Table.Row>
  );
}

function CreatePlayerModal({ show, setShow }) {
  return (
    <Modal show={show} onClose={() => setShow(false)}>
      <Modal.Header>Crear jugador</Modal.Header>
      <Modal.Body>
        <form className="flex flex-col gap-4">
          <div>
            <InputLabel>Nombre</InputLabel>
            <TextInput />
          </div>
          <div>
            <InputLabel>Foto</InputLabel>
            <FileInput />
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer className="justify-end">
        <Button onClick={() => setShow(false)}>Aceptar</Button>
        <Button color="gray" onClick={() => setShow(false)}>
          Cancelar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

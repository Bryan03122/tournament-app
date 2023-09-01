import { Avatar, Table } from "flowbite-react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Button } from "../../common/components/Button";
import { Title } from "../../common/components/Title";
import { CreatePlayerModal } from "../components/CreatePlayerModal";
import { CreatePlayerModalProvider } from "../context/create-player-modal-context";
import { useCreatePlayerModalContext } from "../hooks/useCreatePlayerModalContext";
import { getNameInitials } from "../../common/helpers/helpers";
import { useEffect } from "react";
import { getPlayers } from "../services/firestore-player-service";
import { useState } from "react";

export function PlayersIndex() {
  return (
    <CreatePlayerModalProvider>
      <PlayerIndexContent />
    </CreatePlayerModalProvider>
  );
}

function PlayerIndexContent() {
  const { setShow } = useCreatePlayerModalContext();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getPlayers().then((fetchedPlayers) => {
      console.log(fetchedPlayers);
      setPlayers(fetchedPlayers);
    });
  }, []);

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
      <CreatePlayerModal />
      <div className="h-full overflow-y-auto pr-3">
        <Table>
          <Table.Head className="sticky top-0 z-10">
            <Table.HeadCell className="sticky top-0">Foto</Table.HeadCell>
            <Table.HeadCell className="sticky top-0">Nombre</Table.HeadCell>
            <Table.HeadCell className="sticky top-0">Acciones</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {players.map((player) => (
              <Row key={player.name} user={player} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

function Row({ user }) {
  return (
    <Table.Row>
      <Table.Cell>
        <Avatar
          className="justify-start"
          rounded
          placeholderInitials={
            (user.profileImageUrl === "" ||
              user.profileImageUrl === undefined) &&
            getNameInitials({ name: user.name })
          }
          img={
            (user.profileImageUrl !== "" ||
              user.profileImageUrl !== undefined) &&
            user.profileImageUrl
          }
        />
      </Table.Cell>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell className="flex gap-2">
        <Button>Ver</Button>
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </Table.Cell>
    </Table.Row>
  );
}

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Title } from "../../common/components/Title";
import { CreatePlayerModal } from "../components/CreatePlayerModal";
import { PlayerAvatar } from "../components/PlayerAvatar";
import { PlayerModalProvider } from "../context/player-modal-context";
import { usePlayerModalContext } from "../hooks/usePlayerModalContext";
import { getPlayers } from "../services/firestore-player-service";

export function PlayersIndex() {
  return (
    <PlayerModalProvider>
      <PlayerIndexContent />
    </PlayerModalProvider>
  );
}

function PlayerIndexContent() {
  const { open } = usePlayerModalContext();
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    getPlayers().then((fetchedPlayers) => {
      setPlayers(fetchedPlayers);
    });
  }, []);

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Title>Jugadores</Title>
      <Button
        onClick={open}
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
              <Row key={player.id} player={player} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

function Row({ player }) {
  return (
    <Table.Row>
      <Table.Cell>
        <PlayerAvatar player={player} />
      </Table.Cell>
      <Table.Cell>{player.name}</Table.Cell>
      <Table.Cell className="flex gap-2">
        <Link to={`${player.id}`} state={player}>
          <Button>Ver</Button>
        </Link>
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </Table.Cell>
    </Table.Row>
  );
}

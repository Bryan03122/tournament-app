import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../../common/components/Button";
import { Title } from "../../common/components/Title";
import { CreateTournamentModal } from "../components/CreateTournamentModal";
import { TournamentModalProvider } from "../context/tournament-modal-context";
import { useTournamentModalContext } from "../hooks/useTournamentModalContext";
import { getTournaments } from "../services/firestore-tournament-service";

export function TournamentsIndex() {
  return (
    <TournamentModalProvider>
      <TournamentsIndexContent />
    </TournamentModalProvider>
  );
}

function TournamentsIndexContent() {
  const { open } = useTournamentModalContext();
  const [tournaments, setTournaments] = useState([]);
  useEffect(() => {
    getTournaments().then((fetchedTournaments) => {
      setTournaments(fetchedTournaments);
    });
  }, []);
  console.log(tournaments);

  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Title>Torneos</Title>
      <Button
        onClick={open}
        className="max-w-min"
        rightIcon={<AiFillPlusCircle />}
      >
        Crear
      </Button>
      <CreateTournamentModal />

      <div className="h-full overflow-y-auto pr-3">
        <Table>
          <Table.Head className="sticky top-0 z-10">
            <Table.HeadCell className="sticky top-0">Foto</Table.HeadCell>
            <Table.HeadCell className="sticky top-0">Nombre</Table.HeadCell>
            <Table.HeadCell className="sticky top-0">Estado</Table.HeadCell>
            <Table.HeadCell className="sticky top-0">Acciones</Table.HeadCell>
          </Table.Head>
          <Table.Body>
            {tournaments.map((tournament) => (
              <Row key={tournament.id} tournament={tournament} />
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}

function Row({ tournament }) {
  return (
    <Table.Row>
      <Table.Cell>{tournament.name}</Table.Cell>
      <Table.Cell>{tournament.date.toString()}</Table.Cell>
      <Table.Cell>{tournament.status}</Table.Cell>
      <Table.Cell className="flex gap-2">
        <Link to={`${tournament.id}`} state={tournament}>
          <Button>Ver</Button>
        </Link>
        <Button>Editar</Button>
        <Button>Eliminar</Button>
      </Table.Cell>
    </Table.Row>
  );
}

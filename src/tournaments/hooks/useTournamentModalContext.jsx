import { useContext } from "react";
import { TournamentModalContext } from "../context/tournament-modal-context";

export const useTournamentModalContext = () => {
  const context = useContext(TournamentModalContext);

  return context;
};

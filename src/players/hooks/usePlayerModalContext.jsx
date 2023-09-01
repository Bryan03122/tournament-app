import { useContext } from "react";
import { PlayerModalContext } from "../context/player-modal-context";

export const usePlayerModalContext = () => {
  const context = useContext(PlayerModalContext);

  return context;
};

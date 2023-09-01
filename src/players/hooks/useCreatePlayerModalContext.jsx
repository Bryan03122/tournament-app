import { useContext } from "react";
import { CreatePlayerModalContext } from "../context/create-player-modal-context";

export const useCreatePlayerModalContext = () => {
  const context = useContext(CreatePlayerModalContext);

  return context;
};

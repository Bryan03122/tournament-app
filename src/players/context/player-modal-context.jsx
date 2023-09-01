import { createContext } from "react";
import { useModal } from "../../common/hooks/useModal";

export const PlayerModalContext = createContext();

export function PlayerModalProvider({ children }) {
  const createModal = useModal();

  return (
    <PlayerModalContext.Provider value={createModal}>
      {children}
    </PlayerModalContext.Provider>
  );
}

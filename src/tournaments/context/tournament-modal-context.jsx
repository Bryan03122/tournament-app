import { createContext } from "react";
import { useModal } from "../../common/hooks/useModal";

export const TournamentModalContext = createContext();

export function TournamentModalProvider({ children }) {
  const createModal = useModal();

  return (
    <TournamentModalContext.Provider value={createModal}>
      {children}
    </TournamentModalContext.Provider>
  );
}

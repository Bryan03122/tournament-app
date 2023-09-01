import { createContext } from "react";
import { useState } from "react";

export const CreatePlayerModalContext = createContext();

export function CreatePlayerModalProvider({ children }) {
  const [show, setShow] = useState(false);

  return (
    <CreatePlayerModalContext.Provider value={{ show, setShow }}>
      {children}
    </CreatePlayerModalContext.Provider>
  );
}

import { useState } from "react";

export const useModal = () => {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
  };
  const open = () => {
    setShow(true);
  };

  return {
    show,
    close,
    open,
  };
};

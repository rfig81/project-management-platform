import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

interface ModalProps {
  ref: React.ForwardedRef<{ showModal: () => void }>;
  children: React.ReactNode;
  actionButton?: React.ReactNode;
  buttonCaption?: string;
  onReset?: () => void;
}

const Modal = ({
  ref,
  children,
  actionButton,
  buttonCaption = "Close",
  onReset,
}: ModalProps) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    showModal: () => dialog.current?.showModal(),
  }));

  return createPortal(
    <dialog
      ref={dialog}
      onClose={onReset}
      className="fixed top-[50%] left-[50%] rounded-md p-4 shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form
        method="dialog"
        onSubmit={onReset}
        className="mt-4 flex justify-end gap-4"
      >
        {actionButton}
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;

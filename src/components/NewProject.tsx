import { useRef } from "react";
import { Project } from "../types";
import Input from "./Input";
import Modal from "./Modal";

interface AddProjectFormProps {
  onCancel: () => void;
  onSave: (project: Project) => void;
}

const AddProjectForm = ({ onCancel, onSave }: AddProjectFormProps) => {
  const dialog = useRef<{ showModal: () => void }>(null);
  const title = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLTextAreaElement>(null);
  const dueDate = useRef<HTMLInputElement>(null);

  function handleSave() {
    const enteredTitle = title.current?.value.trim();
    const enteredDescription = description.current?.value.trim();
    const enteredDueDate = dueDate.current?.value;
    const isFormInvalid =
      !enteredTitle || !enteredDescription || !enteredDueDate;

    if (isFormInvalid) {
      dialog.current?.showModal();
      return;
    }

    onSave({
      id: crypto.randomUUID(),
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={dialog}>
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid input field.
        </p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <menu className="my-4 flex items-center justify-end gap-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="rounded-md bg-stone-800 px-6 py-2 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default AddProjectForm;

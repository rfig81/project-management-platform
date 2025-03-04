import { useRef } from "react";
import { Project, Task } from "../types";
import Modal from "./Modal";
import Tasks from "./Tasks";

interface SelectedProjectProps {
  project: Project;
  onDelete: (id: string) => void;
  onAddTask: (text: string) => void;
  onDeleteTask: (id: string) => void;
  tasks: Task[];
}

const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}: SelectedProjectProps) => {
  const dialog = useRef<{ showModal: () => void }>(null);

  const deleteButton = (
    <button
      className="text-stone-600 hover:text-stone-950"
      onClick={() => onDelete(project.id)}
    >
      Delete
    </button>
  );

  const formattedDueDate = new Date(project.dueDate).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" }
  );

  function showConfirmationModal() {
    dialog.current?.showModal();
  }

  return (
    <>
      <Modal ref={dialog} actionButton={deleteButton} buttonCaption="Cancel">
        <h2>WARNING!</h2>
        <p>Are you sure you want to delete de project?</p>
      </Modal>
      <div className="mt-16 w-[35rem]">
        <header className="mb-4 border-b-2 border-stone-300 pb-4">
          <div className="flex items-center justify-between">
            <h1 className="mb-2 text-3xl font-bold text-stone-600">
              {project.title}
            </h1>
            <button
              className="text-stone-600 hover:text-stone-950"
              onClick={showConfirmationModal}
            >
              Delete
            </button>
          </div>
          <p className="m-4 text-stone-400">{formattedDueDate}</p>
          <p className="whitespace-pre-wrap text-stone-600">
            {project.description}
          </p>
        </header>
        <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
      </div>
    </>
  );
};

export default SelectedProject;

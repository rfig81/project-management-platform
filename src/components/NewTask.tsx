import { useState } from "react";

interface NewTaskProps {
  onAdd: (task: string) => void;
}

const NewTask = ({ onAdd }: NewTaskProps) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleClick() {
    if (enteredTask.trim() === "") return;
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 rounded-sm bg-stone-200 px-2 py-1"
        onChange={(event) => setEnteredTask(event.target.value)}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;

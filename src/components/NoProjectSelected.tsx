import logo from "../assets/logo.png";
import Button from "./Button";

interface NoProjectSelectedProps {
  onStartAddProject: () => void;
}

const NoProjectSelected = ({ onStartAddProject }: NoProjectSelectedProps) => {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        className="mx-auto h-16 w-16 object-contain"
        src={logo}
        alt="An empty task list"
      />
      <h2 className="my-4 text-xl font-bold text-stone-500">
        No Project Selected
      </h2>
      <p className="mb-4 text-stone-400">
        Select project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjectSelected;

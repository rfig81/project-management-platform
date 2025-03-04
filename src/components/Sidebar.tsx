import { Project } from "../types";
import Button from "./Button";

interface SidebarProps {
  selectedProjectId: undefined | null | string;
  projects: Project[];
  onStartAddProject: () => void;
  onSelectProject: (id: string) => void;
}

const Sidebar = ({
  selectedProjectId,
  projects,
  onStartAddProject,
  onSelectProject,
}: SidebarProps) => {
  return (
    <aside className="w-1/3 rounded-r-xl bg-stone-900 px-8 py-16 text-stone-50 md:w-72">
      <h2 className="mb-8 font-bold text-stone-200 uppercase md:text-xl">
        Your projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add project</Button>
      </div>
      <ul className="mt-8">
        {projects.map(({ id, title }) => {
          let buttonStyle =
            "my-1 w-full rounded-sm px-2 py-1 text-left hover:bg-stone-800 hover:text-stone-200";

          if (selectedProjectId === id)
            buttonStyle += " bg-stone-800 text-stone-200";
          else buttonStyle += " text-stone-400";

          return (
            <li key={id}>
              <button
                onClick={() => onSelectProject(id)}
                className={buttonStyle}
              >
                {title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

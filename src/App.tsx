import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import Sidebar from "./components/Sidebar";
import { Project, Task } from "./types";
function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined as undefined | null | string,
    projects: [] as Project[],
    tasks: [] as Task[],
  });

  const selectedProject = projectsState.selectedProjectId
    ? projectsState.projects.find(
        ({ id }) => id === projectsState.selectedProjectId
      )
    : undefined;

  const selectedProjectTasks = selectedProject
    ? projectsState.tasks.filter(
        ({ projectId }) => projectId === projectsState.selectedProjectId
      )
    : [];

  const content =
    projectsState.selectedProjectId === null ? (
      <NewProject onCancel={handleCancelAddProject} onSave={handleAddProject} />
    ) : selectedProject ? (
      <SelectedProject
        project={selectedProject}
        onDelete={handleDeleteProject}
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={selectedProjectTasks}
      />
    ) : (
      <NoProjectSelected onStartAddProject={handleStartAddProject} />
    );

  function handleStartAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
    }));
  }

  function handleSelectProject(selectedProjectId: string) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId,
    }));
  }

  function handleAddProject(project: Project) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, project],
    }));
  }

  function handleDeleteProject(selectedProjectId: string) {
    setProjectsState((prevState) => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(({ id }) => id !== selectedProjectId),
    }));
  }

  function handleAddTask(text: string) {
    setProjectsState((prevState) => {
      const taskId = crypto.randomUUID();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      } as Task;

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id: string) {
    setProjectsState((prevState) => ({
      ...prevState,
      tasks: prevState.tasks.filter((task) => task.id !== id),
    }));
  }

  return (
    <main className="my-8 flex h-screen gap-8">
      <Sidebar
        {...projectsState}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;

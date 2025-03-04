export type Project = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
};

export type Task = {
  id: string;
  text: string;
  projectId: string;
};

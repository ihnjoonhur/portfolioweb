export interface WorkInfo {
  id: number;
  companyName: string;
  companyLink: string;
  position: string;
  timeEmployed: string;
  description: string[];
}

export interface ProjectInfo {
  projectId: number;
  projectName: string;
  technologies: string[];
  githubLink: string;
  projectDescription: string;
  projectImage: string;
}

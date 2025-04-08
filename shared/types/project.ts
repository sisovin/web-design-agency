export interface Project {
  id: string;
  name: string;
  description: string;
  clientId: string;
  startDate: string;
  endDate: string;
  status: string;
  budget: number;
  projectManager: string;
  teamMembers: string[];
}

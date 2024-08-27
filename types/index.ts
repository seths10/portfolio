export type Experience = {
  id: number;
  companyOrOrganization: string;
  position: string;
  companyLogo?: string;
  role?: string;
  joinDate: string;
  exitDate?: string;
  present: boolean;
  achievements?: string[];
};

export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};
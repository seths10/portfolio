export type Experience = {
  id: number;
  companyOrOrganization: string;
  position: string;
  companyLogo?: string;
  role?: string;
  joinDate: string;
  exitDate?: string;
  present: boolean;
  location?: string;
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
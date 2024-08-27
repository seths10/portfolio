import { Project, Experience } from "@/types/index";

export const projects: Project[] = [
  {
    id: 1,
    title: "Quotes Generator",
    description: "Generate a random quote with a click of a button.",
    imageUrl: "/images/projects/quote.png",
    githubUrl: "https://github.com/seths10/Quotes-Generator",
    liveUrl: "https://seths10.github.io/Quotes-Generator",
  },
  {
    id: 2,
    title: "Task Clocked",
    description: "A different way to track your day using a 24hr clock",
    imageUrl: "/images/projects/task-clocked.png",
    githubUrl: "https://github.com/seths10/task-clock",
    liveUrl: "https://task-clocked.vercel.app",
  },
  {
    id: 3,
    title: "Personal Portfolio",
    description: "My personal portfolio website",
    imageUrl: "/images/projects/portfolio.png",
    githubUrl: "https://github.com/seths10/portfolio",
    liveUrl: "https://ethr.vercel.app",
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    companyOrOrganization: "Amalitech",
    companyLogo: "/images/companies/amalitech.png",
    position: "Software Engineer",
    role: "Frontend",
    present: true,
    joinDate: "Nov, 2023",
    exitDate: "Present",
    location: "Accra, Ghana",
  },
  {
    id: 2,
    companyOrOrganization: "OPIN Technologies",
    position: "Software Engineer",
    role: "Frontend",
    present: false,
    joinDate: "Dec, 2022",
    exitDate: "Jan, 2024",
    location: "Remote",
  },
  {
    id: 3,
    companyOrOrganization: "Turntabl",
    position: "Intern",
    companyLogo: "/images/companies/turntabl.jfif",
    present: false,
    joinDate: "Jun, 2022",
    exitDate: "Aug, 2022",
    location: "Accra, Ghana",
  },
  {
    id: 4,
    companyOrOrganization: "Kraado",
    position: "Contract Software Engineer",
    companyLogo: "/images/companies/kraado.jpg",
    present: false,
    joinDate: "Dec, 2022",
    exitDate: "Feb, 2023",
    location: "Remote",
  },
  {
    id: 5,
    companyOrOrganization: "Microsoft Learn Student Ambassador",
    position: "Student",
    role: "Campus Ambassador",
    companyLogo: "/images/companies/mlsa.png",
    present: false,
    joinDate: "Jul, 2022",
    exitDate: "Jul, 2024",
    location: "Remote",
  },
  {
    id: 6,
    companyOrOrganization: "Google Student Club",
    position: "Student",
    role: "Lead",
    companyLogo: "/images/companies/gdsc.jfif",
    present: false,
    joinDate: "Aug, 2021",
    exitDate: "Jul, 2022",
    location: "Cape Coast, Ghana",
  },
];

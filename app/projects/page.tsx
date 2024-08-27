"use client";

import { ArrowLeft } from "lucide-react";
import { ProjectCard } from "@/components/ui/project-card";
import { projects } from "@/lib/data";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 p-8">
      <Link href="/" className="flex items-center text-zinc-600 dark:text-zinc-400 mb-8">
        <ArrowLeft className="mr-2 h-4.5 w-5" /> Back to Home
      </Link>
      <h1 className="text-2xl font-semibold mb-8 text-center">Projects I&apos;ve worked on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
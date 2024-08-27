"use client";

import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Icons } from "../icons/icons";
import Link from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden max-w-xs w-full group/card"
    >
      <div
        className={cn(
          "cursor-pointer overflow-hidden relative card h-80 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",
          "group/inner"
        )}
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)),
            url(${project.imageUrl})
          `,
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center justify-center gap-3 absolute w-full h-full top-0 left-0 transition duration-300 opacity-0 group-hover/inner:opacity-90 bg-black">
          <Link href={project.githubUrl} target="_blank" className="opacity-0 group-hover/inner:opacity-100 transition-opacity duration-300">
            <Icons.gitHub className="h-5 w-5 text-white" />
          </Link>
          <Link href={project.liveUrl} target="_blank" className="opacity-0 group-hover/inner:opacity-100 transition-opacity duration-300">
            <ExternalLinkIcon className="h-5 w-5 text-white" />
          </Link>
        </div>

        <div className="flex flex-end gap-2"></div>

        <div className="text content">
          <h1 className="font-bold text-lg md:text-2xl text-gray-50 relative z-10">
            {project.title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

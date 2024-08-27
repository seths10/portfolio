"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto backgroundImage flex flex-col justify-between p-4",

        )}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
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

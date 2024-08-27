"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 p-8">
      <Link href="/" className="flex items-center text-blue-600 dark:text-blue-400 mb-8">
        <ArrowLeft className="mr-2" /> Back to Home
      </Link>
      <h1 className="text-4xl font-bold mb-8 text-center">Projects I&apos;ve worked on</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
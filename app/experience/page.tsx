"use client";

import { experiences } from "@/lib/data";
import { ExperienceCard } from "@/components/ui/experience-card";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/ui/bottom-nav";
import Link from "next/link";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 p-8">
      <Link
        href="/"
        className="flex items-center text-zinc-600 dark:text-zinc-400 mb-8"
      >
        <ArrowLeft className="mr-2 h-4.5 w-5" /> Back to Home
      </Link>
      <h1 className="text-2xl font-semibold mb-8 text-center">
        Companies and Organizations I&apos;ve worked with
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            index={index}
          />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

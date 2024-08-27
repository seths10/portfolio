"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Experience } from "@/types/index";
import { CheckCircle, Building, Calendar, Globe, MapPin } from "lucide-react";
import Image from "next/image";

export function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      key={experience.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl overflow-hidden max-w-xs w-full group/card"
    >
      <div
        className={cn(
          "overflow-hidden relative card h-full rounded-xl shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4",
          "group/inner bg-zinc-50 dark:bg-opacity-10 dark:backdrop-filter dark:backdrop-blur-lg border border-gray-100 dark:border-0"
        )}
      >
        <div className="space-y-4">
          <div className="w-full h-[150px] overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700/50 flex items-center justify-center">
            {experience.companyLogo ? (
              <Image
                src={experience.companyLogo}
                alt={`${experience.companyOrOrganization} logo`}
                width={300}
                height={150}
                className="object-cover w-full h-full"
              />
            ) : (
              <Building className="w-16 h-16 text-gray-400 dark:text-gray-500" />
            )}
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{experience.companyOrOrganization}</h3>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm text-indigo-600 dark:text-indigo-400">{experience.position}</span>
              {experience.role && (
                <>
                  <span className="text-gray-400">|</span>
                  <span className="text-sm italic text-gray-600 dark:text-gray-300">{experience.role}</span>
                </>
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
              <Calendar className="mr-2 h-4 w-4" />
              <p>{experience.joinDate} - {experience.present ? "Present" : experience.exitDate}</p>
            </div>
            {experience.location && (
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                {experience.location.toLowerCase() === "remote" ? (
                  <Globe className="mr-2 h-4 w-4" />
                ) : (
                  <MapPin className="mr-2 h-4 w-4" />
                )}
                <p>{experience.location}</p>
              </div>
            )}
          </div>
        </div>
        {experience.achievements && (
          <ul className="mt-4 space-y-2 overflow-y-auto flex-grow">
            {experience.achievements.map((achievement, i) => (
              <li key={i} className="text-sm flex items-start text-gray-600 dark:text-gray-200">
                <CheckCircle className="mr-2 h-4 w-4 mt-1 flex-shrink-0 text-green-500" />
                {achievement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
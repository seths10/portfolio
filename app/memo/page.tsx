"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/ui/bottom-nav";
import Link from "next/link";
import Image from "next/image";

const images = [
  "/images/memo/1.jpg",
  "/images/memo/2.jpg",
  "/images/memo/3.jpg",
  "/images/memo/4.jpg",
  "/images/memo/5.jpg",
  "/images/memo/6.jpg",
  "/images/memo/7.jpeg",
  "/images/memo/8.jpg",
  "/images/memo/9.jpg",
  "/images/memo/10.jpg",
  "/images/memo/11.jpg",
  "/images/memo/12.jpg",
  "/images/memo/13.jpeg",
];

export default function MemoPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/"
          className="flex items-center text-zinc-600 dark:text-zinc-400 mb-8"
        >
          <ArrowLeft className="mr-2 h-4.5 w-5" /> Back to Home
        </Link>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-8 text-center">
          Some tech community-building moments I&apos;ve been a part of
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 auto-rows-[180px] gap-4 w-full">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-xl shadow-md ${
                index === 0
                  ? "col-span-2 row-span-2"
                  : index === 1
                  ? "col-span-2"
                  : index === 2
                  ? "row-span-2"
                  : index === 3
                  ? "col-span-2 row-span-2"
                  : index === 6
                  ? ""
                  : index === 8
                  ? "row-span-2"
                  : index === 10
                  ? "col-span-2 row-span-2"
                  : ""
              }`}
            >
              <Image
                src={src}
                alt={`Moment ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

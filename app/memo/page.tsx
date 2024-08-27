"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MemoPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 p-8">
      <Link href="/" className="flex items-center text-zinc-600 dark:text-zinc-400 mb-8">
        <ArrowLeft className="mr-2 h-4.5 w-5" /> Back to Home
      </Link>
      <h1 className="text-3xl font-semibold mb-8 text-center">Some moments I&apos;ve been a part of</h1>

    </div>
  );
}
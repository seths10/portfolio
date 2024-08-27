"use client";

import TypingText from "@/components/ui/typing-text";
import BottomNav from "./_bottom-nav/bottom-nav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen py-10 px-4">
      <header className="w-full max-w-4xl">
        <p className="text-zinc-700 dark:text-white font-semibold text-xl tracking-wider">
          eth.
        </p>
      </header>

      <div className="flex flex-col rounded-xl border border-border bg-gray-100 dark:border-zinc-600 dark:bg-zinc-800 lg:col-span-2 w-full max-w-4xl">
        <div className="flex items-center justify-between border-b border-border p-2 dark:border-zinc-600">
          <div className="flex items-center space-x-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">app/page.tsx</div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 dark:text-gray-400">JavaScript</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">UTF-8</span>
          </div>
        </div>
        <div className="group w-full p-4 font-mono text-sm overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
          <div className="flex">
            <div className="mr-4 text-gray-400 select-none">
              {Array.from({ length: 30 }, (_, i) =>  (
                <div key={i + 1}>{i + 1}</div>
              ))}
            </div>
            <div className="flex-1">
              <div className="mt-2 line-clamp-1">
                <span className="font-medium text-yellow-600 dark:text-yellow-500">
                  import
                </span>{" "}
                <span className="transition-all group-hover:animate-pulse group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {" { Portfolio } "}
                </span>{" "}
                <span className="font-medium text-yellow-600 dark:text-yellow-500">
                  from
                </span>{" "}
                &quot;@/app/thin-air 😆&quot;
              </div>

              <TypingText
                repeat={false}
                className="my-2 w-full"
                text="$ Welcome to my portfolio..."
              />

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold mb-2">About Me</h2>
                  <p className="text-sm">
                    I&apos;m a passionate developer with a keen interest in creating innovative solutions.
                  </p>
                </div>
                <div className="bg-white dark:bg-zinc-700 p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold mb-2">Skills</h2>
                  <ul className="list-disc list-inside text-sm">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Embedded Systems (C and MicroPython)</li>
                    <li>Angular</li>
                    <li>Flutter</li>
                    <li>Node.Js</li>
                    <li>Go</li>
                    <li>and a little bit of Figma</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}

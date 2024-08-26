"use client";

import TypingText from "@/components/ui/typing-text";
import BottomNav from "./_bottom-nav/bottom-nav";

export default function Home() {
  return (
    <main className="flex items-center h-screen justify-center">
      <div className="p-2.5 absolute  top-5 left-10">
        <p className="text-zinc-700 dark:text-white font-semibold text-xl tracking-wide">
          eth.
        </p>
      </div>

      <div className="flex flex-col rounded-xl border border-border bg-gray-100 dark:border-zinc-600 dark:bg-zinc-700 lg:col-span-2">
        <div className="flex gap-1.5 border-b border-border p-4 dark:border-zinc-600">
          <span className="h-3 w-3 transform rounded-full bg-red-500 transition-transform duration-150 hover:scale-110" />
          <span className="h-3 w-3 transform rounded-full bg-yellow-500 transition-transform duration-150 hover:scale-110" />
          <span className="h-3 w-3 transform rounded-full bg-green-500 transition-transform duration-150 hover:scale-110" />
        </div>
        <div className="group w-full p-4 font-mono text-sm">
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
            &quot;@/thin-air 😆&quot;
          </div>

          <TypingText
            repeat={false}
            className="my-2 w-full"
            text="$ site under construction..."
          />
        </div>
      </div>

      <BottomNav />
    </main>
  );
}

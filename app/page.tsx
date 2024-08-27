"use client";

import BottomNav from "../components/ui/bottom-nav";
import TypingText from "@/components/ui/typing-text";
import VSCodeWindow from "@/components/ui/vscode-window";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-100 dark:bg-zinc-900 justify-between min-h-screen py-10 px-4 lg:justify-start lg:pt-10">
      <header className="w-full max-w-4xl mb-6">
        <TypingText
          className="text-zinc-700 text-center dark:text-white font-semibold text-xl tracking-wider"
          repeat={false}
          hideCursorOnComplete
          text="eth."
        />
      </header>

      <VSCodeWindow />

      <div className="flex-grow"></div>

      <BottomNav />
    </main>
  );
}
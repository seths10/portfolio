"use client";

import BottomNav from "../components/ui/bottom-nav";
import TypingText from "@/components/ui/typing-text";
import VSCodeWindow from "@/components/ui/vscode-window";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen py-10 px-4">
      <header className="w-full max-w-4xl">
        <TypingText
          className="text-zinc-700 text-center dark:text-white font-semibold text-xl tracking-wider"
          repeat={false}
          hideCursorOnComplete
          text="eth."
        />
      </header>

      <VSCodeWindow />

      <BottomNav />
    </main>
  );
}

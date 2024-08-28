"use client";

import * as React from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion } from "framer-motion";
import TypingText from "@/components/ui/typing-text";
import Image from "next/image";

function VSCodeWindow() {
  const [typingDone, setTypingDone] = React.useState(false);
  const [showInfo, setShowInfo] = React.useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (typingDone) {
      timer = setTimeout(() => {
        setShowInfo(true);
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [typingDone]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col rounded-xl border border-border bg-gray-100 dark:border-zinc-600 dark:bg-zinc-800/30 dark:backdrop-blur-md lg:col-span-2 w-full max-w-4xl relative overflow-hidden"
    >
      <div className="flex items-center justify-between border-b border-border p-2 dark:border-zinc-600">
        <div className="flex items-center space-x-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400">
          app/page.tsx
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            TypeScript
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">
            UTF-8
          </span>
        </div>
      </div>
      <div
        className="group w-full p-4 font-mono text-sm overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-zinc-600 scrollbar-track-transparent"
        style={{ maxHeight: "calc(100vh - 200px)" }}
      >
        <div className="flex">
          <div className="mr-4 text-gray-400 select-none">
            {Array.from({ length: 30 }, (_, i) => (
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
              onComplete={() => setTypingDone(true)}
            />

            {showInfo && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div className="bg-white dark:bg-zinc-700/50 dark:backdrop-blur-sm p-4 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold mb-2">About Me</h2>
                  <div className="flex items-center mb-2">
                    <Image
                      src="/images/me.jpg"
                      alt="Seth Addo"
                      priority
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">Seth Addo</h3>
                      <p className="text-sm">Full Stack Engineer</p>
                    </div>
                  </div>
                  <p className="text-sm mb-2">
                    I&apos;m a passionate software engineer with a keen interest
                    in creating innovative solutions and community building. Looking to hire me?
                  </p>
                  <div className="flex flex-col text-xs gap-1.5">
                    <div>
                      {" "}
                      <span className="text-zinc-900 dark:text-white">
                        Email:{" "}
                      </span>
                      <LinkPreview
                        url="mailto:addoseth82@gmail.com?subject=Hi%Seth"
                        imageSrc="/images/gmail-preview.png"
                        isStatic
                        className="font-bold"
                      >
                        addoseth82@gmail.com
                      </LinkPreview>
                    </div>
                    <div>
                      {" "}
                      <span className="text-zinc-900 dark:text-white">
                        LinkedIn:{" "}
                      </span>
                      <LinkPreview
                        url="https://linkedin.com/in/seth-addo-034327190"
                        imageSrc="/images/linkedin-preview.png"
                        isStatic
                        className="font-bold"
                      >
                        https://linkedin.com/in/seth-addo-034327190
                      </LinkPreview>
                    </div>
                  </div>
                </div>
                <div className="bg-white dark:bg-zinc-700/50 dark:backdrop-blur-sm p-4 rounded-lg shadow-md">
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
                    <li>Figma</li>
                    <li>
                      and anything else I need learn to finish a project ...
                    </li>
                  </ul>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-100 via-gray-100/70 to-transparent dark:from-zinc-800 dark:via-zinc-800/70 dark:to-transparent pointer-events-none"></div>
    </motion.div>
  );
}

export default VSCodeWindow;

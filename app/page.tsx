"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { CodeIcon } from "lucide-react";
import HeaderDockItem from "@/components/ui/header-dock-item";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { Icons } from "@/components/icons/icons";
import TypingText from "@/components/ui/typing-text";

export default function Home() {
  const { resolvedTheme } = useTheme();
  const headerRef = useRef<HTMLDivElement>(null);
  const top = useSpring(8, { damping: 15 });
  const width = useSpring(40, { damping: 15 });
  const height = useSpring(10, { damping: 15 });
  const isInView = useInView(headerRef);
  const [animationEnded, setAnimationEnded] = useState(false);
  const pathname = usePathname();
  const isIndexPage = pathname === "/";
  const border = 2;

  useEffect(() => {
    if (!isInView) {
      return;
    }

    function setSize() {
      const offset = 40;
      top.set(
        window.innerHeight - (headerRef.current?.clientHeight ?? 0) - offset
      );
      width.set(headerRef.current?.clientWidth ?? 0);
      height.set(border + (headerRef.current?.clientHeight ?? 0));
    }

    const timeout = setTimeout(setSize, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [top, isInView, width, height]);

  const Header = !animationEnded ? motion.header : "header";
  const styles = !animationEnded
    ? {
        top,
        width,
        height,
        transform: "translateX(-50%)",
      }
    : {
        // Once the animation ends, use CSS to properly position the header
        top: "calc(100dvh - 96px)",
        width: "fit-content",
        height: "fit-content",
        transform: "translateX(-50%)",
      };
  return (
    <main className="flex items-center h-screen justify-center">
      <div className="p-2.5 absolute  top-0 left-50">
        <p className="text-zinc-700 font-semibold text-xl tracking-wide">eth.</p>
      </div>
      <div className="flex flex-col rounded-xl border border-border bg-gray-100 dark:border-zinc-600 dark:bg-zinc-700 lg:col-span-2">
        {/** Window */}
        <div className="flex gap-1.5 border-b border-border p-4 dark:border-zinc-600">
          <span className="h-3 w-3 transform rounded-full bg-red-500 transition-transform duration-150 hover:scale-110" />
          <span className="h-3 w-3 transform rounded-full bg-yellow-500 transition-transform duration-150 hover:scale-110" />
          <span className="h-3 w-3 transform rounded-full bg-green-500 transition-transform duration-150 hover:scale-110" />
        </div>
        {/** Code */}
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

      <Header
        // @ts-expect-error - the conditional type is not being inferred correctly
        style={styles}
        onAnimationEnd={() => {
          function clear() {
            if (
              String(height.get()) ===
              String(border + (headerRef.current?.clientHeight ?? 0))
            ) {
              setAnimationEnded(true);
            } else {
              requestAnimationFrame(clear);
            }
          }

          if (!animationEnded && width.get() > 40 && isInView) {
            requestAnimationFrame(clear);
          }
        }}
        className={cn(
          "fixed left-1/2 z-50 mx-auto rounded-2xl border border-muted-foreground bg-zinc-700 text-background shadow-sm shadow-muted-foreground dark:bg-white",
          {
            "transition-all duration-300": animationEnded,
            "overflow-hidden": !animationEnded,
          }
        )}
      >
        <div
          ref={headerRef}
          className="flex h-14 w-fit max-w-fit items-center px-2"
        >
          <div className="flex flex-1 items-center justify-between space-x-2">
            <nav className="flex items-center gap-2">
              <Link href={siteConfig.links.blog} rel="noreferrer">
                <HeaderDockItem>
                  <CodeIcon className="h-4 w-4" />
                  <span className="sr-only">Components</span>
                </HeaderDockItem>
              </Link>
              <Link
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <HeaderDockItem>
                  <Icons.gitHub className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </HeaderDockItem>
              </Link>
              <Link
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noreferrer"
              >
                <HeaderDockItem>
                  <Icons.twitter className="h-3 w-3 fill-current" />
                  <span className="sr-only">Twitter</span>
                </HeaderDockItem>
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
        <motion.div
          className="pointer-events-none absolute inset-0 h-full w-full animate-pulse rounded-2xl bg-foreground duration-mid repeat-1"
          style={{ opacity: animationEnded ? 0 : 0.3 }}
        />
      </Header>
    </main>
  );
}

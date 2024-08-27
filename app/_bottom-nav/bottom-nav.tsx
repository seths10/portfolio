import { cn } from "@/lib/utils";
import { CodeIcon, FolderIcon, NewspaperIcon } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { Icons } from "@/components/icons/icons";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import HeaderDockItem from "@/components/ui/header-dock-item";
import Link from "next/link";

function BottomNav() {
  const [animationEnded, setAnimationEnded] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const top = useSpring(8, { damping: 15 });
  const width = useSpring(40, { damping: 15 });
  const height = useSpring(10, { damping: 15 });
  const isInView = useInView(headerRef);
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

  const BottomDock = !animationEnded ? motion.header : "header";
  const styles = !animationEnded
    ? {
        top,
        width,
        height,
        transform: "translateX(-50%)",
      }
    : {
        // Once the animation ends, use CSS to properly position the dock
        top: "calc(100dvh - 96px)",
        width: "fit-content",
        height: "fit-content",
        transform: "translateX(-50%)",
      };

  return (
    <BottomDock
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
            <Link href="/projects" rel="noreferrer">
              <HeaderDockItem>
                <FolderIcon className="h-4 w-4" />
                <span className="sr-only">Projects</span>
              </HeaderDockItem>
            </Link>
            <Link href={siteConfig.links.blog} rel="noreferrer">
              <HeaderDockItem>
                <NewspaperIcon className="h-4 w-4" />
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
    </BottomDock>
  );
}

export default BottomNav;

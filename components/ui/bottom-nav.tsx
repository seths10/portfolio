import { cn } from "@/lib/utils";
import {
  BriefcaseBusinessIcon,
  FolderIcon,
  NotebookPen,
  Image as ImageIcon,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { Icons } from "@/components/icons/icons";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import HeaderDockItem from "@/components/ui/header-dock-item";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function BottomNav() {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
      animate(scope.current, { opacity: 1 }, { duration: 0.5 });
    }, 500);

    return () => clearTimeout(timeout);
  }, [animate, scope]);

  return (
    <motion.header
      ref={scope}
      initial={{ opacity: 0 }}
      className={cn(
        "fixed left-1/2 bottom-8 z-50 mx-auto rounded-2xl bg-zinc-700 text-background dark:bg-white",
        "transform -translate-x-1/2"
      )}
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="flex h-14 w-fit max-w-fit items-center px-2">
        <div className="flex flex-1 items-center justify-between space-x-2">
          <nav className="flex items-center gap-2">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/projects" rel="noreferrer">
                    <HeaderDockItem>
                      <FolderIcon className="h-4 w-4" />
                      <span className="sr-only">Projects</span>
                    </HeaderDockItem>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Projects</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={siteConfig.links.blog} rel="noreferrer">
                    <HeaderDockItem>
                      <NotebookPen className="h-4 w-4" />
                      <span className="sr-only">Components</span>
                    </HeaderDockItem>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Blog</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
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
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/experience" rel="noreferrer">
                    <HeaderDockItem>
                      <BriefcaseBusinessIcon className="h-4 w-4" />
                      <span className="sr-only">Experience</span>
                    </HeaderDockItem>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Experience</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
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
                </TooltipTrigger>
                <TooltipContent>
                  <p>Twitter</p>
                </TooltipContent>
              </Tooltip>

              <div className="w-px h-8 bg-zinc-600 dark:bg-zinc-300 mx-2" />

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href="/memo" rel="noreferrer">
                    <HeaderDockItem>
                      <ImageIcon className="h-4 w-4" />
                      <span className="sr-only">Memo</span>
                    </HeaderDockItem>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Memo</p>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <ModeToggle />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Toggle theme</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}

export default BottomNav;

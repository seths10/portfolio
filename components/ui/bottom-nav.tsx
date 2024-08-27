import { cn } from "@/lib/utils";
import { Building2, FolderIcon, NotebookPen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ModeToggle } from "@/components/ui/mode-toogle";
import { Icons } from "@/components/icons/icons";
import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";
import HeaderDockItem from "@/components/ui/header-dock-item";
import Link from "next/link";

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
        "fixed left-1/2 bottom-8 z-50 mx-auto rounded-2xl bg-zinc-700 text-background shadow-sm shadow-muted-foreground dark:bg-white",
        "transform -translate-x-1/2"
      )}
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <div className="flex h-14 w-fit max-w-fit items-center px-2">
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
                <NotebookPen className="h-4 w-4" />
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
            <Link href="/companies" rel="noreferrer">
              <HeaderDockItem>
                <Building2 className="h-4 w-4" />
                <span className="sr-only">Companies</span>
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
    </motion.header>
  );
}

export default BottomNav;

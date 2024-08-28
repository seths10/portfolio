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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PopupWindow from "@/components/ui/popup-window";
import HeaderDockItem from "@/components/ui/header-dock-item";
import Link from "next/link";

function BottomNav() {
  const [scope, animate] = useAnimate();
  const [isVisible, setIsVisible] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupUrl, setPopupUrl] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    const timeout = setTimeout(() => {
      setIsVisible(true);
      animate(scope.current, { opacity: 1 }, { duration: 0.5 });
    }, 500);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', checkMobile);
    };
  }, [animate, scope]);

  const handleOpenPopup = (url: string) => {
    if (isMobile) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setPopupUrl(url);
      setIsPopupOpen(true);
    }
  };

  return (
    <>
      {isPopupOpen && !isMobile && (
        <PopupWindow
          url={popupUrl}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
      <motion.header
        ref={scope}
        initial={{ opacity: 0 }}
        className={cn(
          "fixed left-1/2 bottom-4 sm:bottom-8 z-50 mx-auto rounded-2xl bg-zinc-700 text-background dark:bg-white",
          "transform -translate-x-1/2"
        )}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
      >
        <div className="flex h-12 sm:h-14 w-fit max-w-fit items-center px-1 sm:px-2">
          <div className="flex flex-1 items-center justify-between space-x-1 sm:space-x-2">
            <nav className="flex items-center gap-1 sm:gap-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/projects" rel="noreferrer">
                      <HeaderDockItem>
                        <FolderIcon className="h-3 w-3 sm:h-4 sm:w-4" />
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
                    <button onClick={() => handleOpenPopup(siteConfig.links.blog)}>
                      <HeaderDockItem>
                        <NotebookPen className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="sr-only">Blog</span>
                      </HeaderDockItem>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Blog</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <button onClick={() => handleOpenPopup(siteConfig.links.github)}>
                      <HeaderDockItem>
                        <Icons.gitHub className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="sr-only">GitHub</span>
                      </HeaderDockItem>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/experience" rel="noreferrer">
                      <HeaderDockItem>
                        <BriefcaseBusinessIcon className="h-3 w-3 sm:h-4 sm:w-4" />
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
                    <button onClick={() => handleOpenPopup(siteConfig.links.twitter)}>
                      <HeaderDockItem>
                        <Icons.twitter className="h-2.5 w-2.5 sm:h-3 sm:w-3 fill-current" />
                        <span className="sr-only">Twitter</span>
                      </HeaderDockItem>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Twitter</p>
                  </TooltipContent>
                </Tooltip>

                <div className="w-px h-6 sm:h-8 bg-zinc-600 dark:bg-zinc-300 mx-1 sm:mx-2" />

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="/memo" rel="noreferrer">
                      <HeaderDockItem>
                        <ImageIcon className="h-3 w-3 sm:h-4 sm:w-4" />
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
    </>
  );
}

export default BottomNav;

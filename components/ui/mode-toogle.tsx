"use client";

import React from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import HeaderDockItem from "./header-dock-item";

const ModeToggleInner = React.forwardRef<HTMLButtonElement, {}>((props, ref) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button ref={ref} className="h-fit w-fit bg-transparent" onClick={toggleTheme}>
      <HeaderDockItem whileTap={{}}>
        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </HeaderDockItem>
    </button>
  );
});

ModeToggleInner.displayName = "ModeToggleInner";

export const ModeToggle = React.forwardRef<HTMLButtonElement, {}>(
  (props, ref) => <ModeToggleInner {...props} ref={ref} />
);

ModeToggle.displayName = "ModeToggle";
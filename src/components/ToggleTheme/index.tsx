import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useEffect } from "react";

const ToggleTheme = () => {
  const systemPreference = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  useEffect(() => {
    if (systemPreference) {
      document.documentElement.classList.add("dark");
    }
  }, [systemPreference]);

  const toggle = () => {
    document.documentElement.classList.toggle("dark");
    console.log("toggled theme");
  };

  return (
    <div className="hidden sm:block cursor-pointer" onClick={() => toggle()}>
      <SunIcon className="h-8 text-gray-100 hidden dark:block" />
      <MoonIcon className="h-8 text-gray-100 block dark:hidden" />
    </div>
  );
};

export default ToggleTheme;

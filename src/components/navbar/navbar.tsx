"use client";
import { Github, Menu, Sun, Moon } from "lucide-react";
import { Toggle } from "@/src/components/ui/toggle";
import { useState } from "react";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState<boolean>(false);
  const [isThemeToggled, setIsThemeToggled] = useState<boolean>(false);

  const handleNavToggle = () => {
    setIsNavToggled(!isNavToggled);
  };

  const handleToggleChange = () => {
    setIsThemeToggled(!isThemeToggled);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          aria-expanded={isNavToggled}
          onClick={handleNavToggle}
        >
          <Menu />
          <span className="sr-only">Open main menu</span>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="https://github.com/RusiraJayatilake/MapleUI"
                target="_blank"
                className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white"
              >
                <Github />
              </a>
            </li>
            <li className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white">
              <Toggle onPressedChange={handleToggleChange}>
                {isThemeToggled ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Toggle>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

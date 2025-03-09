import { Button } from "@/components/ui/button";
// import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import ThemeToggle from "@/components/theme-toggle";
import Link from "next/link";
import { GalleryVerticalEnd } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="h-16 fixed top-2 left-1/2 transform -translate-x-1/2 z-20 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-xl shadow-lg w-full max-w-screen-xl px-4 md:px-6">
      <div className="h-full flex items-center justify-between px-6">
        {/* <Logo /> */}
        <Link
          className="flex flex-row items-center gap-2 text-1xl text-gray-900 dark:text-white"
          href={"/"}
        >
          <GalleryVerticalEnd className="size-4" />
          MapleUI
        </Link>

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link href={"/signup"}>
            <Button variant="outline" className="hidden sm:inline-flex">
              Sign In
            </Button>
          </Link>
          <Button className="hidden xs:inline-flex">Get Started</Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

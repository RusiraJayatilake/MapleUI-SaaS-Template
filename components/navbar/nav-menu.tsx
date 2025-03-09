import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NavigationMenuProps } from "@radix-ui/react-navigation-menu";
import Link from "next/link";

const navMenuData = [
  { title: "Features", link: "#" },
  { title: "Pricing", link: "/pricing" },
  { title: "Testimonials", link: "#" },
  { title: "Integrations", link: "#" },
  { title: "Blog", link: "#" },
  // { title: "Dashboard", link: "/dashboard" },
];

export const NavMenu = (props: NavigationMenuProps) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-6 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navMenuData.map((value, index) => (
        <NavigationMenuItem key={index}>
          <NavigationMenuLink asChild>
            <Link href={value.link}>{value.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

import * as React from "react";

// import { SearchForm } from "@/components/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

// icons
import { MdSpatialTracking } from "react-icons/md";
import { RiUserCommunityFill } from "react-icons/ri";
import { IoAnalyticsSharp } from "react-icons/io5";

// This is sample data.
const data = {
  navMain: [
    {
      title: "Features",
      url: "#",
      items: [
        {
          title: "Subscription Tracking",
          url: "#",
          icon: <MdSpatialTracking />,
        },
        {
          title: "Analytics",
          url: "#",
          icon: <IoAnalyticsSharp />,
        },
        {
          title: "Community Engagements",
          url: "#",
          icon: <RiUserCommunityFill />,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader className="text-2xl">Dashboard</SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton>
                      {item.icon}
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

"use client";

import { NavMain } from "./ui/nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  SidebarHeader,
  SidebarFooter,
} from "./ui/sidebar";

import { useSession } from "next-auth/react";

import Image from "next/image";

import { Package, Settings2, Gauge, Users } from "lucide-react";
import { ThemeToggle } from "./ui/theme-toggle";
import { NavUser } from "./nav-user";

type SideBarProps = {
  children: React.ReactNode;
};

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: Gauge,
      isActive: true,
      items: [],
    },
    {
      title: "Stocks",
      url: "#",
      icon: Package,
      items: [
        {
          title: "Sales list",
          url: "#",
        },
        {
          title: "Items list",
          url: "#",
        },
      ],
    },
    {
      title: "People",
      url: "#",
      icon: Users,
      items: [
        {
          title: "Clients",
          url: "#",
        },
        {
          title: "Staff",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Profile",
          url: "#",
        },
      ],
    },
  ],
};

export default function SideBar({ children }: SideBarProps) {
  const { data: session } = useSession();

  console.log(session);

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="flex flex-row items-center justify-center">
          <h1 className="text-4xl font-medium font-pacifico text-background dark:text-white">
            Coffee <br />
            Break
          </h1>
          <Image src={"/coffee.svg"} alt="logo" width={120} height={120} />
        </SidebarHeader>

        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter>
          <NavUser
            user={{
              name: session?.user?.name ?? "User",
              avatar: "",
              email: "email@email.com",
            }}
          />
        </SidebarFooter>
      </Sidebar>
      <div className="flex flex-col gap-1">
        <SidebarTrigger className="bg-sidebar-border rounded-s-none" />
        <ThemeToggle />
      </div>
      <SidebarInset className="ml-2 min-h-screen bg-sidebar-primary">
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

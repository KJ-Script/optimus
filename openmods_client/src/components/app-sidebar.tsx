import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
  CirclePlus,
  LogOut,
  ChartColumnIncreasing
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Agents",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Statistics",
    url: "dashboard/stats",
    icon: ChartColumnIncreasing,
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="dark text-white">
      <div className="font-[family-name:var(--font-geist-mono)] text-[3vh] font-semibold text-center p-4">
        opencrafts
      </div>
      <SidebarContent className="flex flex-col justify-between">
        {/* Interaction group */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg">Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />

                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        {/* Logout */}
        <SidebarGroup className="pb-8 border-t">
          <SidebarGroupLabel className="text-lg">Exit</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem >
                <SidebarMenuButton asChild>
                  <a href="/">
                    <LogOut />
                    <span>Logout</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

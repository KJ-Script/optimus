import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { DashNavbar } from "@/components/dash-navbar";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashNavbar />
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        {/* <SidebarTrigger className = "w-[2%] text-white" /> */}
        <div className="scrollable bg-[hsl(240,5.9%,10%)]">
        {children}
        </div>
      </main>
    </SidebarProvider>
    </>
  );
}

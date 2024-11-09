import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Bell, Plus, Calendar, Settings, Bot  } from "lucide-react"
import Link from "next/link";
import { CreateDialogueBox } from "./create-dialogue-box";
type Props = {};

const username = "Keti Yohannes";
export function DashNavbar({}: Props) {
  return (
    <nav className="flex h-14 items-center justify-between border-b border-[#262626]  bg-[hsl(240,5.9%,10%)] px-4">
    <div className="flex items-center gap-4">

    </div>
    <div className="flex items-center gap-4">
        <CreateDialogueBox />
      <Button
        variant="ghost"
        size="icon"
        className="text-gray-400 hover:text-white"
      >
        <Bell className="h-8 w-8" />
        <span className="sr-only">Notifications</span>
      </Button>
      <div className="flex items-center gap-2">
        <span className="hidden text-md text-white md:inline-block">
          Keti Yohannes
        </span>
      </div>
    </div>
  </nav>
  );
}

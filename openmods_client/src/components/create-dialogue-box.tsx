import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {};

export function CreateDialogueBox({}: Props) {
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="dark px-6" size='lg'>create</Button>
      </DialogTrigger>
      <DialogContent className="dark text-white">
        <DialogHeader>
          <DialogTitle> Create your container</DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center space-y-4 py-2">
            <Input type="text" id="containername" placeholder="container name. ex opencraft_rag_container"/>
            <Button className="dark" size='lg'>
                <Link href="dashboard/createagents">Create your container</Link>
                </Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

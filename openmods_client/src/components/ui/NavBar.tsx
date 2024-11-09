import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {};

export default function NavBar({}: Props) {
  return (

        <nav className="relative w-full flex justify-center items-center p-6  text-white">
          <div className="flex w-[80%] justify-between">
        <div className="font-[family-name:var(--font-geist-mono)] text-[4vh] font-semibold">opencrafts</div>
        <div className="flex space-x-5 text-center">
        <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/docs">Docs</Link>
          </Button>
          <Button asChild size='lg' className=" bg-white z-50 text-black text-md">
            <Link href="/dashboard">Try opencrafts</Link>
          </Button>
          </div>
        </div>
      </nav>

  );
}

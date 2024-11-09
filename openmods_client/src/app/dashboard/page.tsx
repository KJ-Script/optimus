import { CreateDialogueBox } from "@/components/create-dialogue-box";
import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="text-white bg-[hsl(240,5.9%,10%)] h-screen w-full flex justify-center">
      <div className=" flex flex-col items-center space-y-1 p-14"> 
        <p>Currently, you have no active agents :(</p>
        <Button asChild size="lg">
          <CreateDialogueBox />
        </Button>
      </div>
    </div>
  );
};

export default page;

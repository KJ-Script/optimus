import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="h-screen text-white w-full flex justify-center  py-6">
      <Card className="dark w-[750px] h-[50%]">
        <CardHeader>
          <CardTitle>Create project</CardTitle>
          <CardDescription>
            Deploy your new project in one-click.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Directory Name</Label>
                <Input
                  id="name"
                  placeholder="Name for the folder for your training data. ex database, storge, docs"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="model">Choose a model</Label>
                <Select>
                  <SelectTrigger id="model">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="dark" position="popper">
                    <SelectItem value="gpt">GPT 4</SelectItem>
                    <SelectItem value="claude">
                      claude (Not available at the moment)
                    </SelectItem>
                    <SelectItem value="mistral">
                      Mistral (Not available at the moment)
                    </SelectItem>
                    <SelectItem value="llama">
                      llama (Not available at the moment)
                    </SelectItem>
                  </SelectContent>
                </Select>

                <Label htmlFor="doctype">Choose a document format</Label>
                <Select>
                  <SelectTrigger id="doctype">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className="dark" position="popper">
                    <SelectItem value="gpt">docs</SelectItem>
                    <SelectItem value="claude">txt</SelectItem>
                    <SelectItem value="mistral">pdf</SelectItem>
                  </SelectContent>
                </Select>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="dark" variant="outline">Adjust parameters</Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 dark">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium leading-none">Parameters</h4>
                        <p className="text-sm text-muted-foreground">
                          set your parameters.
                        </p>
                      </div>
                      <div className="grid gap-2">
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="chunksize">chunk size</Label>
                          <Input
                            id="chunksize"
                            defaultValue="1000"
                            className="col-span-2 h-8"
                          />
                        </div>
                        <div className="grid grid-cols-3 items-center gap-4">
                          <Label htmlFor="chunkoverlap">chunk overlap</Label>
                          <Input
                            id="chunkoverlap"
                            defaultValue="200"
                            className="col-span-2 h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          {/* <Button variant="outline">Cancel</Button> */}
          <div className="flex justify-center w-full"> 
          <Button className="w-[80%]">Deploy</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;

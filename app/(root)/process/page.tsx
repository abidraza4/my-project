"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Add from "./views/add";

const Condition: React.FC = () => {
  return (
    <div className="bg-background-100 text-white flex flex-row p-10 w-full h-full overflow-hidden">
        <Tabs defaultValue="account" className="h-full w-full flex flex-col justify-start items-center">
            <TabsList className="w-[400px]">
                <TabsTrigger value="Add" className="w-[200px]">Add</TabsTrigger>
                <TabsTrigger value="Remove" className="w-[200px]">Remove</TabsTrigger>
            </TabsList>
            <TabsContent value="Add"><Add></Add></TabsContent>
            <TabsContent value="Remove">Change your password here.</TabsContent>
        </Tabs>
    </div>
  );
};

export default Condition;

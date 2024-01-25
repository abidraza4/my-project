"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const Add: React.FC = () => {
  return (
    <div className="bg-background-50 text-white flex flex-col p-10 w-80vh h-full overflow-hidden">
        <span className=" text-black text-3xl font-bold flex justify-start items-start">ADD</span>
    </div>
  );
};

export default Add;

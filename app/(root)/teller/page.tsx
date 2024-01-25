"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const Teller: React.FC = () => {
  return (
    <div className="bg-background-100 text-white flex flex-col p-10 w-full h-full overflow-hidden">
        <span className=" text-black text-3xl font-bold flex justify-start items-start">AL HABIB BANKING SYSTEM</span>
        <div className="h-full w-full flex flex-col justify-center items-center">
            {/* <div className="flex flex-row justify-center items-center"> */}
                <Button className="w-80 h-16">Account Condition - Apply / Remove</Button>
            {/* </div> */}
        </div>
        <div className="flex flex-col justify-end items-end">
                <Button className="w-[200px] h-10">Exit</Button>
        </div>
    </div>
  );
};

export default Teller;

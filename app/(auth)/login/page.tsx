"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";

const LoginPage: React.FC = () => {
  return (
    <div className="bg-background-50 text-white flex flex-col justify-center w-screen h-screen overflow-hidden">
        <div className="flex flex-row justify-evenly">
            <div className=" flex flex-col justify-center items-baseline">
                <img src="/logo.png" className="max-w-[65%]" alt="Logo" />
            </div>
            <div className="space-y-8 w-[27%] flex flex-col justify-end">
                <div className="relative mb-7">
                    <span className=" text-gradient-150 text-4xl flex justify-start items-center">BANK AL HABIB</span>
                </div>
                <div className="flex flex-row justify-between items-baseline">
                    <div className="space-y-2">
                        <Label className="text-l text-black mb-3"> Branch Code </Label>
                        <Input type="brncd" placeholder="branch" className="text-black bg-background-100 h-[30px]" />
                    </div>
                    <div className="space-y-2">
                        <Label className="text-l text-black mb-3"> Username </Label>
                        <Input type="password" placeholder="username" className="text-black bg-background-100 h-[30px]" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label className="text-black"> Password</Label>
                    <Input type="password" id="password" placeholder="password" className=" text-black bg-background-100 h-[30px]" />
                </div>
                <div className="flex flex-row justify-center items-baseline gap-20">
                    <Button variant="default" className="mt-8 w-40">
                        Sign In
                    </Button>
                    <Button variant="default" className="mt-8 w-40">
                        Exit
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LoginPage;

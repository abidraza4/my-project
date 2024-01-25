"use client";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Button} from "@/components/ui/button"
import Link from "next/link";
import {SignupForm} from "./components/signup-form"
import { Checkbox } from "@/components/ui/checkbox"

const SignUpPage: React.FC = () => {
    return (     
      <div className="bg-black text-white flex items-center w-full h-full overflow-hidden">
            {/* //items-center justify-center */}
        {/* <h1 className="" color="white">hellow </h1> */}
        <div className="flex-1 relative">
            <div className="h-full flex flex-col justify-center">
                <div className="max-w-lg md:px-10 md:py-10 p-7 mx-auto w-full h-full flex flex-col justify-center">
                    <img src="/assets/logo.svg" className=" p-[100px]"></img>
                    <div className="relative mb-7">
                        <span className="text-white text-4xl">Sign up to </span>
                        <span className="text-[#B882FA] text-4xl">Conquer the ROI-gt words</span>
                    </div>
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <Label className=" text-l mb-3"> First Name </Label>
                            <Input type="name" id="fname" placeholder="First Name" className="bg-[#27242D]  h-[50px]"></Input>
                        </div>
                        <div className="space-y-2">
                            <Label> Phone </Label>
                            <Input type="pnum" id="number" placeholder="Phone Number" className="bg-[#27242D]  h-[50px] "></Input>
                        </div>
                        <div className="space-y-2">
                            <Label> Last Name</Label>
                            <Input type="name" id="lname" placeholder="Last Name" className="bg-[#27242D]  h-[50px] "></Input>
                        </div>
                        <div className="space-y-2">
                            <Label> Password</Label>
                            <Input type="password" id="password" placeholder="Enter Password" className="bg-[#27242D]  h-[50px] "></Input>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <Label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Accept terms and conditions
                            </Label>
                        </div>
                    </div>
                   
                    
                    <Button variant="gradient_square" className=" mt-8 ">get Started </Button>
                    <div className="md:max-w-[345px] mx-auto font-normal text-white mt-12 uppercase text-sm">
                        Already Registered?
                        <Link
                        href="/login"
                        className="font-medium hover:underline pl-1 text-[#8f2fcc]"
                        >
                        Sign In
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
        <div className="bg-cover bg-center lg:block hidden h-full max-h-full max-w-[50%] flex-1 flex flex-col justify-between items-center">
                <img src="/assets/signup/img.svg"  className=""></img>
        </div>
      </div>
    );
  };
  
  export default SignUpPage;
// "use client";
// import { signup } from "@/actions/signup";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
// import { useToast } from "@/components/ui/use-toast";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { Eye, EyeOff } from "lucide-react";
// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import * as z from "zod";

// export const signupFormSchema = z.object({
//   name: z
//     .string()
//     .regex(
//       /^[A-Za-z]+(?:\s+[A-Za-z]+)+$/,
//       "Name must be 2 or more alphabetical words"
//     )
//     .min(1)
//     .max(25),
//   email: z.string().email(),
//   password: z.string().min(8).max(25),
// });

export const SignupForm = () => {
//   const { toast } = useToast();
//   const [isVisible, setIsVisible] = useState(false);
//   const form = useForm<z.infer<typeof signupFormSchema>>({
//     resolver: zodResolver(signupFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       password: "",
//     },
//   });
//   async function onSignup(values: z.infer<typeof signupFormSchema>) {
//     const { error } = await signup(values);

//     if (error) {
//       return toast({
//         title: "Something went wrong",
//         description: error as string,
//         variant: "destructive",
//       });
//     }
//     toast({
//       title: "Please check your inbox",
//       variant: "success",
//     });
//   }

  return (
    <>
      
        {/* <FormField */}
        {/* //   control={Form.control}
        //   name="name"
          render={({ field }) => ( */}
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter your full name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          
        {/* /> */}
        {/* <FormField
        //   control={form.control}
          name="email"
          render={({ field }) => ( */}
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" />
              </FormControl>
              <FormMessage />
            </FormItem>
          {/* )}
        /> */}
        {/* <FormField
        //   control={form.control}
          name="password"
          render={({ field }) => ( */}
            <FormItem>
              <FormLabel>Password</FormLabel>
              <div className="flex">
                <FormControl className="flex-1">
                  <Input
                    className="flex-1"
                    // type={isVisible ? "text" : "password"}
                    placeholder="Enter Password"
                    // {...field}
                  />
                </FormControl>
                <Button
                  type="button"
                  variant={"outline"}
                  className="ml-2 w-10"
                  size="icon"
                //   onClick={() => setIsVisible((b) => !b)}
                >
                  {/* {isVisible ? (
                    <Eye className="h-4 w-4" />
                  ) : (
                    <EyeOff className="h-4 w-4" />
                  )} */}
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          {/* )}
        /> */}
        <Button className="w-full" type="submit">
          Sign up
        </Button>
    </>
  );
}

import { cn } from "@/lib/utils";
import React from "react";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
  return (
    <div className="flex max-w-[285px] items-start relative bg-[#ffffff21] rounded-[12px] overflow-hidden border-transparent">
      <input
        type="text"
        className={cn(
          className
        )}
        ref={ref}
        {...props}
        // className="w-full h-10 rounded-md px-3 py-2 text-[15px] text-[#ffffff80] leading-normal placeholder-[15px] tracking-[0] bg-transparent border border-transparent focus:ring-[#3f3451] text-black"
        // placeholder="Email Address"
      />
    </div>
  );
}
)

CustomInput.displayName = "CustomInput"

export { CustomInput }

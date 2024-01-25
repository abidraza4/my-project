import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {  
        gradient_outline:"text-neutral-50 inline-flex justify-center items-center gap-[5px] px-[129px] py-[15px] border-[1px] border-primary-50 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-gradient-50 hover:to-gradient-100 ",
        gradient_outline_mini:"text-neutral-50 inline-flex justify-center items-center  px-[2px] py-[15px] border-[1px] border-primary-50 rounded-lg bg-gradient-to-r from-transparent to-transparent hover:from-gradient-50 hover:to-gradient-100 ",
        gradient:" text-white text-[10px] tracking-[0] leading-[normal] whitespace-nowrap  border-2 border-solid border-transparent shadow-[0px_20px_40px_#0000000d] backdrop-blur-[30px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(30px)_brightness(100%)] [border-image:linear-gradient(to_bottom,rgba(228,76,82,0.44),rgb(223,77,181)_35.94%,rgb(202,67,212)_67.71%,rgba(102,16,245,0.28)_100%)_1] [background:linear-gradient(180deg,rgba(228,76,82,0.04)_0%,rgba(223,77,181,0.1)_35.94%,rgba(202,67,212,0.1)_67.71%,rgba(102,16,245,0.03)_100%)]",
        gradient_outline2:"text-neutral-50 inline-flex justify-center items-center gap-[5px] px-[129px] py-[15px] border-[1px] border-primary-50 rounded-lg bg-gradient-to-r from-gradient-50 to-gradient-100 hover:from-transparent hover:to-transparent ",

        gradient_square:"text-neutral-50 inline-flex justify-center items-center gap-[5px] px-[129px] py-[15px] rounded-lg bg-gradient-to-r from-gradient-50 to-gradient-100 hover:from-black hover:to-primary-100 ",
        gradient_round:"text-neutral-50 inline-flex justify-center items-center gap-[5px] px-[129px] py-[15px] rounded-lg bg-gradient-to-r from-gradient-50 to-gradient-100 hover:from-black hover:to-primary-100 ",
        gradient_squareF:"text-neutral-50 inline-flex justify-center items-center gap-[5px] px-[129px] py-[15px] rounded-lg bg-gradient-to-r from-gradient-50 to-gradient-100 hover:from-black hover:to-primary-100 ",
        gradient_roundF:"text-neutral-50 inline-flex justify-center items-center gap-[5px] px-[129px] py-[15px] rounded-lg bg-gradient-to-r from-gradient-50 to-gradient-100 hover:from-black hover:to-primary-100 ",



        green:"text-neutral-50 inline-flex justify-center items-center gap-[5px] px-[129px] py-[15px] rounded-lg bg-background-100 hover:scale-110 hover:bg-gradient-100 hover:opacity-80",

        black:"inline-flex h-[35px] justify-center items-center gap-[5px] shrink-0 px-[23px] py-[14.181px] rounded-[60px] bg-gray-800 text-neutral-50 hover:bg-gray-700 ",
        blackF:"inline-flex h-[35px] justify-center items-center gap-[5px] shrink-0 px-[23px] py-[14.181px] rounded-[60px] bg-gray-800 text-neutral-50 hover:bg-gray-700 ",

        purple:"inline-flex h-[35px] justify-center items-center gap-[5px] shrink-0 px-[23px] py-[14.181px] rounded-[60px] bg-purple-800 text-neutral-50 hover:bg-purple-700 ",
        purpleF:"inline-flex h-[35px] justify-center items-center gap-[5px] shrink-0 px-[23px] py-[14.181px] rounded-[60px] border-[1px] bg-transparent text-neutral-50 hover:bg-purple-700 ",
        
        default: "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive:
          "bg-red-500 text-neutral-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",
        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        link: "text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

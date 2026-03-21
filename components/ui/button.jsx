import * as React from "react"
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  "flex items-center justify-center gap-2 border-2 h-12 pt-1 font-bold text-center transition-all cursor-pointer rounded-full",
  {
    variants: {
      variant: {
        sg_primary: "bg-(--sg-green) border-(--sg-green) text-white hover:bg-transparent hover:text-(--sg-green)",
        sg_secondary: "bg-transparent border-black text-(--sg-green) hover:bg-(--sg-green) hover:border-(--sg-green) hover:text-white",
        sg_drawer_close: "bg-transparent border-black text-(--sg-green) hover:bg-(--sg-green) hover:border-(--sg-green) hover:text-white text-sm rounded-full",
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6",
        xs: "gap-1 rounded-md px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "px-2.5 py-1",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      font: {
        default: "text-md md:text-2xl",
        md: "text-md",
        sm: "text-sm",
        lg: "text-lg",
        xl: "text-xl",
      },
      width: {
        full: "block w-full",
        inline: "w-fit",
      },
      disabled: {
        true: "pointer-events-none opacity-50",
        false: ""
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      font: "default",
      width: "full",
      disabled: "false"
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  font = "default",
  width = "default",
  disabled = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-font={font}
      data-width={width}
      data-disabled={disabled}
      className={cn(buttonVariants({ variant, size, font, width, disabled, className }))}
      {...props} />
  );
}

export { Button, buttonVariants }

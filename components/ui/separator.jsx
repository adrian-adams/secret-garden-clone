"use client"

import * as React from "react"
import { cva } from "class-variance-authority";
import { Separator as SeparatorPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

const styleVariants = cva(
  "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px border-t-3 bg-transparent",
  {
    variants: {
      size: {
        xl: 'py-7',
        lg: 'py-5',
        md: 'py-3',
        sm: 'py-1',
      },
      bg: {
        transparent: 'border-0',
        black: 'border-black ',
        green: 'border-(--sg-green)',
        olive: 'border-(--sg-olive)',
      },
    },
    defaultVariants: {
      size: "sm",
      bg: "transparent",
    }
  })



function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  size = "sm",
  bg = "transparent",
  ...props
}) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      size={size}
      bg={bg}
      className={cn(styleVariants({ size, bg }),
        className
      )}
      {...props} />
  );
}

export { Separator }

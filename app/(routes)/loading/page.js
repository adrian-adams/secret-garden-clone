import React from 'react'
import {Spinner} from "@/components/ui/spinner"

export default function Loading() {
    
  return (
    <div className={`flex flex-row items-center justify-center gap-2 min-h-screen w-full bg-green-950`}>
      <p className={`sg-font-xlarge font-bold text-white`}>Loading...</p>
      <Spinner className={`text-white size-8`} />
    </div>
  )
}

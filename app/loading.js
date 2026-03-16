import React from 'react'
import {Spinner} from "@/components/ui/spinner"

export default function Loading() {
    
  return (
    <div className={`h-screen flex flex-row items-center justify-center`}>
      <div className={`flex flex-row items-center justify-center gap-2 p-10 rounded-2xl bg-green-950`}>
        <p className={`sg-font-xlarge font-bold text-white`}>Loading...</p>
        <Spinner className={`text-white size-8`} />
      </div>
    </div>
  )
}

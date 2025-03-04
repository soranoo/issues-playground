"use client";

import React from "react"
import { useRouter } from "nextjs-toploader/app";

const HelloPage = () => {
  const router = useRouter();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="text-4xl font-bold">Welcome to HELLo page</h1>
      <button 
        onClick={()=>{
          router.push("/")
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Home Page
      </button>
    </main>
  </div>
  )
}

export default HelloPage
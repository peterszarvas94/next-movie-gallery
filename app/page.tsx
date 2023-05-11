"use client";

import Movies from "@/components/Movies";
import AgeSelection from "@/components/AgeSelection";
import AgeProvider from "@/context/AgeContext";

export default function Home() {
  return (
    <AgeProvider>
      <main className="bg-secondary text-primary min-h-screen">
        <h1 className="text-5xl text-center font-title py-10">Movies</h1>
        <AgeSelection />
        <Movies />
      </main>
    </AgeProvider>
  )
}

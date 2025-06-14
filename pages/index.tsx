import React from "react";
import Hero from "@/components/common/Hero";
import Listing from "@/components/common/Listing";
import Filter from "@/components/common/Filter";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Filter />
      <Listing />
    </div>
  );
}

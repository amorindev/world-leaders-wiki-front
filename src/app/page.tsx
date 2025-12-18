"use client";

import Navbar from "@/app/components/Navbar";
import Content from "./components/Content";

function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar/>
      <Content/>
    </div>
  );
}

export default LandingPage;

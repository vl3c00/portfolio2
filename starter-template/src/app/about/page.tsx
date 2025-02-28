import React from 'react'
import Heroo from "@/sections/HeroCont"
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import CallToAction from "@/sections/CallToAction";
import Footerr from "@/sections/Footer";

function page() {
  return (
    <div className="font-sans antialiased bg-neutral-950 text-white pb-[100px]">
      <Heroo />
      <LogoTicker />
          <Introduction />
          <Features />
          <Integrations />
          <CallToAction />
          <Footerr />
    </div>
  )
}

export default page

'use client'
import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Experience from "@/components/Experiance";
import Formsubmit from "@/components/FormSubmit";
import Herosection from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";



export default function Home() {
  return (
    <div className=" overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 max-w-4xl mx-auto selection:text-cyan-800">
     
      <Navbar />
      <Herosection />
      <Aboutme />
      <Technologies />
      <Experience />
      <Projects />
      <Formsubmit />
      <Contact />
    </div>
  )
}

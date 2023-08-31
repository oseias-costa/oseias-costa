"use client";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import { Projects } from "@/components/ProjectsCovers/ProjectsCovers";
import TecnologiesSection from "@/components/Tecnologies/TecnologiesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Headline />
      <Projects />
      <TecnologiesSection />  
    </main>
  );
}

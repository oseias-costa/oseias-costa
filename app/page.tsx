"use client";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Headline from "@/components/Headline/Headline";
import { Projects } from "@/components/ProjectsCovers/ProjectsCovers";
import TecnologiesSection from "@/components/Tecnologies/TecnologiesSection";
import Testimonials from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Headline />
      <Projects />
      <TecnologiesSection />
      <Testimonials />
      <Footer />
    </main>
  );
}

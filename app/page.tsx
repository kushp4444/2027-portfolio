"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [started, setStarted] = useState(false);

  return (
    <>
      <SmoothScroll />
      <CustomCursor />
      {!started && <Preloader onDone={() => setStarted(true)} />}
      <Header />
      <main>
        <Hero started={started} />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

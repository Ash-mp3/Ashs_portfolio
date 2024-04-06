"use client";
import {useRef} from 'react';
import Link from "next/link";
import Header from "@/components/header/Header";
import About from "../components/about/About";
import Projects from "@/components/projects/Projects";
import Contact from "../components/contact/Contact";
import Welcome from "../components/welcome/Welcome";
import HexBg from "../components/hexBg/HexBg"

export default function page() {
  
  return (
    <>
      
      <div id="mainDiv">
        <HexBg />
        <Welcome />
        <Header />
        <About />
        <Projects />
        <Contact />
        <footer>
          <p>Ash @2024</p>
        </footer>
      </div>
    </>
  );
}

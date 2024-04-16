"use client";
import HexBg from "../components/hexBg/HexBg";
import Welcome from "../components/welcome/Welcome";
import Header from "@/components/header/Header";
import About from "../components/about/About";
import Projects from "@/components/projects/Projects";
import Contact from "../components/contact/Contact";
import Footer from "@/components/footer/Footer";
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
				<Footer />
			</div>
		</>
	);
}

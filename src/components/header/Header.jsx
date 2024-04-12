import "./header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ashLogo from "../../imgs/Ash-Logo.png";

const Header = () => {
	const header = useRef(null);
	const nav = useRef();
	const [stickyHeader, setStickyHeader] = useState("");
	const [currLink, setCurrLink] = useState();

	useEffect(() => {
		const navbarOffset = header.current.offsetTop;
		const navLinks = nav.current.children;
		const handleScroll = (e) => {
			if (window.scrollY >= navbarOffset) {
				setStickyHeader("sticky");
			} else {
				setStickyHeader("");
			}
		};

		const handleClick = (e) => {
			// console.log(e.target);
		};

		// console.log(navLinks.current.children)
		window.addEventListener("scroll", handleScroll);
		for (let i = 0; i < navLinks.length; i++) {
			navLinks[i].addEventListener("click", handleClick);
		}
	}, []);

	return (
		<div id="ghostHeader">
			<header ref={header} className={stickyHeader}>
				<Image id="ashLogo" src={ashLogo} alt="ash logo" />
				<div ref={nav} id="navLinks">
					<AnchorLink href="#welcomePage">Home</AnchorLink>
					<AnchorLink href="#aboutPage">About</AnchorLink>
					<AnchorLink href="#projectsPage">Projects</AnchorLink>
					<AnchorLink href="#contactPage">Contact</AnchorLink>
				</div>
			</header>
			<div></div>
		</div>
	);
};

export default Header;

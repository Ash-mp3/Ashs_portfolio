import "./header.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ashLogo from "../../imgs/Ash-Logo.png";

const Header = () => {
  const header = useRef(null);
  const [stickyHeader, setStickyHeader] = useState("");

  // let options = {
  //   threshold: 1.0,
  // };

  // useEffect(() => {
  //   const startAnimation = (entries, observer) => {
  //     if (entries[0].boundingClientRect.y < 1) {
  //       setHeaderStick('scrolled')
  //     } console.log(entries[0].boundingClientRect)
  //     console.log(window.scrollY)
  //   }
  //   const observer = new IntersectionObserver(startAnimation, options);
  //   observer.observe(floatingDivs.current)

  // }, [])

  useEffect(() => {
    const navbarOffset = header.current.offsetTop;
    const handleScroll = (e) => {
      // console.log(window.scrollY, navbarOffset);
      if (window.scrollY >= navbarOffset) {
        setStickyHeader("sticky");
      } else {
        setStickyHeader("");
      }
    };
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="ghostHeader">
      <header ref={header} className={stickyHeader}>
        <Image id="ashLogo" src={ashLogo} alt="ash logo" />
        <div id="navLinks">
          <Link href={"/about"}>About</Link>
          <Link href={"/about"}>Projects</Link>
          <Link href={"/about"}>Contact</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;

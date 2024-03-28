import './header.css'
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <h3>Asher Contreras</h3>
      <div id="navLinks">
        <Link href={"/about"}>About</Link>
        <Link href={"/about"}>Projects</Link>
        <Link href={"/about"}>Contact</Link>
      </div>
    </header>
  );
};

export default Header;

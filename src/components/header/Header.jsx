import "./header.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import ashLogo from "../../imgs/Ash-Logo.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from "@mui/system";

const Header = () => {
	const header = useRef(null);
	const [stickyHeader, setStickyHeader] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);
    const [showMenu, setShowMenu] = useState(false);
	const open = Boolean(anchorEl);
    const isWideViewport = useMediaQuery("(min-width: 768px)");

	useEffect(() => {
		const navbarOffset = header.current.offsetTop;
		const handleScroll = (e) => {
			if (window.scrollY >= navbarOffset) {
				setStickyHeader("sticky");
			} else {
				setStickyHeader("");
			}
		};

		window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 767) {
                setShowMenu(true)
            } else if (window.innerWidth > 767) {
                setShowMenu(false)
            }
        });
	}, []);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
    };


	return (
		<div id="ghostHeader">
			<header ref={header} className={stickyHeader}>
				<Image id="ashLogo" src={ashLogo} alt="ash logo" />
				<div id="navLinks" className="hidden pointer-events-none md:flex md:pointer-events-auto">
					<AnchorLink href="#welcomePage">Home</AnchorLink>
					<AnchorLink href="#aboutPage">About</AnchorLink>
					<AnchorLink href="#projectsPage">Projects</AnchorLink>
					<AnchorLink href="#linkBox">Contact</AnchorLink>
				</div>
				<div id="menuNavLinks" className="inline md:hidden">
					<Button
                        id="basic-button"
                        className=" h-full inline md:hidden md:pointer-events-none"
                        color="inherit"
						aria-controls={open ? "basic-menu" : undefined}
						aria-haspopup="true"
						aria-expanded={open ? "true" : undefined}
						onClick={handleClick}
					>
						<MenuIcon large />
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
    
						MenuListProps={{
							"aria-labelledby": "basic-button",
                        }}
					>
						<MenuItem onClick={handleClose}><AnchorLink href="#welcomePage" className="text-2xl">Home</AnchorLink></MenuItem>
						<MenuItem onClick={handleClose}><AnchorLink href="#aboutPage" className="text-2xl">About</AnchorLink></MenuItem>
						<MenuItem onClick={handleClose}><AnchorLink href="#projectsPage" className="text-2xl">Projects</AnchorLink></MenuItem>
						<MenuItem onClick={handleClose}><AnchorLink href="#linkBox" className="text-2xl">Contact</AnchorLink></MenuItem>
					</Menu>
				</div>
			</header>
			<div></div>
		</div>
	);
};

export default Header;

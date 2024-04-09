import "./welcome.css"
import { Divider } from "@mui/material"
import Image from "next/image";
import ashLogo from "../../imgs/Ash-Logo.png"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Welcome() {
    return (
        <div id="welcomePage">
            <div id="welcomeMsg">
                <Image id="logoImg" src={ashLogo} alt="ash logo"/>
                <h1>Full Stack Web Developer</h1>
            </div>
            <div id="toWebsiteBtn">
            <AnchorLink href="#aboutPage"><ArrowCircleDownIcon /></AnchorLink>
                
            </div>
        </div>
    )
}
import "./welcome.css"
import { Divider } from "@mui/material"
import Image from "next/image";
import ashLogo from "../../imgs/Ash-Logo.png"
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Welcome() {
    return (
        <div id="welcomePage">
            <div id="welcomeMsg" className="flex-col xl:flex-row">
                <Image id="logoImg" className="w-[70vw] border-b-[4px] py-[40px] md:p-0 xl:border-b-[0px] xl:border-r-[4px] xl:w-[700px]"  src={ashLogo} alt="ash logo"/>
                <h1>Full Stack Web Developer</h1>
            </div>
            <div id="toWebsiteBtn">
            <AnchorLink href="#aboutPage"><ArrowCircleDownIcon /></AnchorLink>
                
            </div>
        </div>
    )
}
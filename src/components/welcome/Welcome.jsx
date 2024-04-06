import { Divider } from "@mui/material"
import Image from "next/image";
import ashLogo from "../../imgs/Ash-Logo.png"
import "./welcome.css"

export default function Welcome() {
    return (
        <div id="welcomePage">
            <div id="welcomeMsg">
                <Image id="logoImg" src={ashLogo} alt="ash logo"/>
                <h1>Full Stack Web Developer</h1>
            </div>
        </div>
    )
}
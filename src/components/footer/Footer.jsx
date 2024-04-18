import "./footer.css";
import Link from "next/link";
import Image from "next/image";
import EmailIcon from "../../imgs/contactImgs/email.png";
import GitHubIcon from "../../imgs/contactImgs/github.png";
import LinkedinIcon from "../../imgs/contactImgs/linkedin.png";
import ResumeIcon from "../../imgs/contactImgs/resume.png";
// import Resume from "../../../public/docs/ContrerasAsherResume.pdf";

const Footer = () => {
	return (
		<footer>
			<div id="linkBox" className="w-[60%] lg:w-[25%]">

				<Link href="https://github.com/Ash-mp3" >
					<Image className="contactImg w-[20px] lg:w-[40px]" src={GitHubIcon} alt="img" />
				</Link>

				<Link href="https://www.linkedin.com/in/asher-contreras-788515288">
					<Image className="contactImg w-[20px] lg:w-[40px]" src={LinkedinIcon} alt="img" />
                </Link>

				<p>Ash @2024</p>

				<Link href="mailto:asherpc05@gmail.com">
					<Image className="contactImg w-[20px] lg:w-[40px]" src={EmailIcon} alt="img" />
				</Link>

				<Link href="https://drive.google.com/uc?export=download&id=1pyHW7tokNnnDEV4riGB1bYy17Rr-CG9B" >
					<Image className="contactImg w-[20px] lg:w-[40px]" src={ResumeIcon} alt="img" />
				</Link>
			</div>
		</footer>
	);
};

export default Footer;

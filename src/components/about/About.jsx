import "./about.css";
import Image from "next/image";
import jsLogo from "../../imgs/skillImgs/jsLogo.png";
import cssLogo from "../../imgs/skillImgs/cssLogo.png";
import gitHubLogo from "../../imgs/skillImgs/githubLogo.png";
import gitLogo from "../../imgs/skillImgs/gitLogo.png";
import htmlLogo from "../../imgs/skillImgs/htmlLogo.png";
import nodeLogo from "../../imgs/skillImgs/nodeLogo.png";
import reactLogo from "../../imgs/skillImgs/reactLogo.png";
import angularLogo from "../../imgs/skillImgs/angularLogo.png";
import expressLogo from "../../imgs/skillImgs/expressLogo.png";

const About = () => {
	return (
		<div id="aboutPage" className="PageStructure px-0 lg:px-[90px]">
			<div className="pageHeaderDiv">
				<div className="colorDiv"></div>
				<div className="grayDiv"></div>
				<h2>About</h2>
			</div>
			<div id="aboutContent">
				<p id="aboutParagraph" className=" text-[1.6rem] w-[80vw] md:text-[2rem] md:w-[600px] lg:w-[700px] ">
                    Hi, my name is Asher Contreras. I'm a full-stack web developer who thrives
                    on learning. I'm passionate about understanding and utilizing the current
                    cyberspace around me, and I'm always excited to dive in and learn new techniques
                    and tools in the ever-growing web. I love Pokémon and Zelda, and when
                    I'm not at my computer, I enjoy hiking, snowboarding, and camping with my friends.
				</p>
				<div id="skillDiv">
					<div className="skillSlide">
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={jsLogo} alt="javascript logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">JAVASCRIPT</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={htmlLogo} alt="html logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">HTML</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={cssLogo} alt="css logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">CSS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={reactLogo} alt="react logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">REACT.JS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={angularLogo} alt="angular logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">ANGULAR</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={nodeLogo} alt="node logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">NODE.JS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={expressLogo} alt="express logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">EXPRESS.JS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={gitHubLogo} alt="github logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">GITHUB</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={gitLogo} alt="git logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">GIT</p>
						</div>
					</div>
					<div className="skillSlide">
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={jsLogo} alt="javascript logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">JAVASCRIPT</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={htmlLogo} alt="html logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">HTML</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={cssLogo} alt="css logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">CSS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={reactLogo} alt="react logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">REACT.JS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={angularLogo} alt="angular logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">ANGULAR</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={nodeLogo} alt="node logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">NODE.JS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={expressLogo} alt="express logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">EXPRESS.JS</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={gitHubLogo} alt="github logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">GITHUB</p>
						</div>
						<div className="h-[70px] w-[70px] md:h-[100px] md:w-[100px] lg:w-[150px] lg:h-[135px]">
							<Image src={gitLogo} alt="git logo" />
							<p className=" text-[10px] md:text-[15px] lg:text-[20px]">GIT</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;

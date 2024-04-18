import "./projects.css";
import Carousel from "./Carousel";

const Projects = () => {
	return (
		<div id="projectsPage" className="PageStructure px-0 md:px-[50px] lg:px-[90px]">
			<div className="pageHeaderDiv">
				<div className="colorDiv"></div>
				<div className="grayDiv"></div>
				<h2>Projects</h2>
			</div>
			<div id="projectsContent" className=" w-[100%] lg:w-[80%]">
				<Carousel />
			</div>
		</div>
	);
};

export default Projects;

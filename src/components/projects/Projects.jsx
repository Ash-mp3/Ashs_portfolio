import "./projects.css";
import Carousel from "./Carousel";

const Projects = () => {
	return (
		<div id="projectsPage" className="PageStructure">
			<div className="pageHeaderDiv">
				<div className="colorDiv"></div>
				<div className="grayDiv"></div>
				<h2>Projects</h2>
			</div>
			<div id="projectsContent">
				<Carousel />
			</div>
		</div>
	);
};

export default Projects;

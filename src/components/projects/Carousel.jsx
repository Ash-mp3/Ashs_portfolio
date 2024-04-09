import React, { useState, useEffect, useRef } from "react";
import "./projects.css";
import Image from "next/image";
import Dex from "../../imgs/projectImgs/dex.png";
import Netflix from "../../imgs/projectImgs/netflix.png";
import Todos from "../../imgs/projectImgs/todos.png";
import Capstone from "../../imgs/projectImgs/capstone.png";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Carousel = () => {
	// const [currImage, setCurrImage] = useState(0);
	const [images, setImages] = useState();
	const figureRef = useRef(null);
	const [theta, setTheta] = useState();
	const numOfImgs = 4;
	let currImage = 0;

	const handleResize = () => {
		const root = figureRef.current;
		if (root) {
			const imgs = [...root.querySelectorAll("figure div")];
			setImages(imgs);
			setupCarousel(numOfImgs, parseFloat(getComputedStyle(imgs[0]).width));
		}
	};

	const handlePrevNavigation = () => {
		currImage += 1;
		rotateCarousel(currImage);
	};

	const handleNextNavigation = () => {
		currImage -= 1;
		rotateCarousel(currImage);
	};

	const setupCarousel = (n, s) => {
		const root = figureRef.current;
		if (!root) return;
		const figure = root.querySelector("figure");
		const gap = root.dataset.gap || 0;

		const apothem = s / (2 * Math.tan(Math.PI / n));
		const theta = (2 * Math.PI) / n;
		setTheta((2 * Math.PI) / n);

		figure.style.transformOrigin = `50% 50% ${-apothem}px`;
		for (let i = 0; i < n; i++) {
			const image = figure.children[i];
			// image.style.padding = `10px`;

			if (i > 0) {
				image.style.transformOrigin = `50% 50% ${-apothem}px`;
				image.style.transform = `rotateY(${i * theta}rad)`;
			}
		}
		rotateCarousel(currImage); // Update after setup
	};

	const rotateCarousel = (imageIndex) => {
		const figure = figureRef.current.querySelector("figure");
		if (figure) {
			figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
		}
	};

	useEffect(() => {
		handleResize(); // Initial setup
		window.addEventListener("resize", handleResize);

		const root = figureRef.current;
		if (root)
			root
				.querySelector(".prev")
				.addEventListener("click", handlePrevNavigation);
		root.querySelector(".next").addEventListener("click", handleNextNavigation);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="carousel" ref={figureRef}>
			<figure>
				<div className="card">
					<Image src={Capstone} alt="pokedex website image" />
					<div className="projectInfo">
						<div className="description">
							<h4>Capstone Regestarion App</h4>
							<p>
								Frontend developed with React.js and Tailwind Css. Backend
								through node and express.js. hosted on Render
							</p>
						</div>
						<div className="buttons">
							<Button variant="contained">Live Link</Button>
							<Button variant="contained">Learn More</Button>
						</div>
					</div>
				</div>
				<div className="card">
					<Image src={Todos} alt="pokedex website image" />
					<div className="projectInfo">
						<div className="description">
							<h4>ToDo List website</h4>
							<p>Developed with vinilia javascript. Hosted on github pages</p>
						</div>
						<div className="buttons">
							<Button variant="contained">Live Link</Button>
							<Button variant="contained">Learn More</Button>
						</div>
					</div>
				</div>
				<div className="card">
					<Image src={Netflix} alt="pokedex website image" />

					<div className="projectInfo">
						<div className="description">
							<h4>Netflix Mockup</h4>
							<p>styled with Css3 and Tailwind Css. Hosted on github pages</p>
						</div>
						<div className="buttons">
							<Button variant="contained">Live Link</Button>
							<Button variant="contained">Learn More</Button>
						</div>
					</div>
				</div>
				<div className="card" id="firstCard">
					<Image src={Dex} alt="pokedex website image" />
					<div className="projectInfo">
						<div className="description">
							<h4>Pokemon Api Project</h4>
							<p>
								Developed with React.js and Tailwind Css. Hosted on github pages
							</p>
						</div>
						<div className="buttons">
							<Button variant="contained">Live Link</Button>
							<Button variant="contained">Learn More</Button>
						</div>
					</div>
				</div>
			</figure>
			<nav>
				{/* <IconButton className="prev" onClick={() => handlePrevNavigation("prev")}> */}
				<ArrowBackIcon
					className=" prev"
					onClick={() => handlePrevNavigation("prev")}
				/>
				{/* </IconButton> */}
				{/* <IconButton className="next" onClick={() => handleNextNavigation("next")}> */}
				<ArrowForwardIcon
					className=" next"
					onClick={() => handleNextNavigation("next")}
				/>
				{/* </IconButton> */}
			</nav>
		</div>
	);
};

export default Carousel;

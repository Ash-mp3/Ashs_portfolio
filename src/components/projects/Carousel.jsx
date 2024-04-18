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
		<div className="carousel " ref={figureRef}>
            <figure className=" w-[100%] md:w-[80%] lg:w-[90%] xl:w-[75%] 2xl:w-[60%]">
                <div className="card" id="firstCard">
					<Image src={Dex} alt="pokedex website image" />
					<div className="projectInfo">
						<div className="description">
							<h4 className=" text-[1.5rem] sm:text-[2.5rem] md:text-[2.8rem]">Pokemon Api Project</h4>
							<p className=" text-[1rem] sm:text-[1.2rem] md:text-[1.5rem]">
								Developed with React.js and Tailwind Css. Hosted on github pages
							</p>
						</div>
						<div className="buttons">
                            <Button href="https://ash-mp3.github.io/pokedex/" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">Link</Button>
							<Button href="https://github.com/Ash-mp3/pokedex" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">GitHub</Button>
						</div>
					</div>
				</div>
				<div className="card">
					<Image src={Capstone} alt="Regestarion App website image" />
					<div className="projectInfo">
						<div className="description">
							<h4 className=" text-[1.5rem] sm:text-[2.5rem] md:text-[2.8rem]">Regestarion App</h4>
							<p className=" text-[1rem] sm:text-[1.2rem] md:text-[1.5rem]">
								Developed with React.js, Tailwind Css and express.js. Hosted on
								Render
							</p>
						</div>
						<div className="buttons">
							<Button href="https://capstone-co5w.onrender.com/" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">Link</Button>
							<Button href="https://github.com/Wackyprogamer/capstone" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">GitHub</Button>
						</div>
					</div>
				</div>
				<div className="card">
					<Image src={Todos} alt="ToDo List website image" />
					<div className="projectInfo">
						<div className="description">
							<h4 className=" text-[1.5rem] sm:text-[2.5rem] md:text-[2.8rem]">ToDo List website</h4>
							<p className=" text-[1rem] sm:text-[1.2rem] md:text-[1.5rem]">Developed with vinilia javascript. Hosted on github pages</p>
						</div>
						<div className="buttons">
                            <Button href="https://ash-mp3.github.io/To-Do-List_Project/" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">Link</Button>
							<Button href="https://github.com/Ash-mp3/To-Do-List_Project" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">GitHub</Button>
						</div>
					</div>
				</div>
				<div className="card">
					<Image src={Netflix} alt="Netflix Mockup website image" />
					<div className="projectInfo">
						<div className="description">
							<h4 className=" text-[1.5rem] sm:text-[2.5rem] md:text-[2.8rem]">Netflix Mockup</h4>
							<p className=" text-[1rem] sm:text-[1.2rem] md:text-[1.5rem]">styled with Css3 and Tailwind Css. Hosted on github pages</p>
						</div>
						<div className="buttons">
                            <Button href="https://ash-mp3.github.io/netflix_page/" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">Link</Button>
						    <Button href="https://github.com/Ash-mp3/netflix_page" target="_blank" variant="contained" className="text-[0.8rem] w-[50%] m-[3px] md:text-[1rem] lg:text-[1.5rem]">GitHub</Button>
						</div>
					</div>
				</div>
				
			</figure>
			<nav>
				<ArrowBackIcon
					className="prev left-[20%] bottom-[-20%] md:bottom-[-15%] lg:bottom-[40%] lg:left-[-10%] xl:left-[0%] 2xl:left-[10%]"
					onClick={() => handlePrevNavigation("prev")}
				/>
				<ArrowForwardIcon
					className="next right-[20%] bottom-[-20%] md:bottom-[-15%] lg:bottom-[40%] lg:right-[-10%] xl:right-[0%] 2xl:right-[10%] "
					onClick={() => handleNextNavigation("next")}
				/>
			</nav>
		</div>
	);

};

export default Carousel;

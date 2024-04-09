import "./about.css";
import { useEffect, useRef } from "react";
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
    <div id="aboutPage" className="PageStructure">
      <div className="pageHeaderDiv">
        <div className="colorDiv"></div>
        <div className="grayDiv"></div>
        <h2>About</h2>
      </div>
      <div id="aboutContent">
        <p id="aboutParagraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          inventore corporis eaque error, id consequatur commodi nisi molestias
          ipsam quae, sed doloremque quibusdam. Cum pariatur reiciendis
          assumenda! Officia veniam ratione quaerat perferendis sapiente, ullam
          natus nam quis minus, quia porro, aliquid facere. Officia mollitia
          vero, nobis quia fugit beatae! Provident. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Commodi, saepe? Itaque ipsam ipsum
          laudantium tenetur.
        </p>
        <div id="skillDiv">
          <div className="skillSlide">
            <div>
              <Image src={jsLogo} alt="javascript logo" />
              <p>JAVASCRIPT</p>
            </div>
            <div>
              <Image src={htmlLogo} alt="html logo" />
              <p>HTML</p>
            </div>
            <div>
              <Image src={cssLogo} alt="css logo" />
              <p>CSS</p>
            </div>
            <div>
              <Image src={reactLogo} alt="react logo" />
              <p>REACT.JS</p>
            </div>
            <div>
              <Image src={angularLogo} alt="angular logo" />
              <p>ANGULAR</p>
            </div>
            <div>
              <Image src={nodeLogo} alt="node logo" />
              <p>NODE.JS</p>
            </div>
            <div>
              <Image src={expressLogo} alt="express logo" />
              <p>EXPRESS.JS</p>
            </div>
            <div>
              <Image src={gitHubLogo} alt="github logo" />
              <p>GITHUB</p>
            </div>
            <div>
              <Image src={gitLogo} alt="git logo" />
              <p>GIT</p>
            </div>
          </div>
          <div className="skillSlide">
          <div>
              <Image src={jsLogo} alt="javascript logo" />
              <p>JAVASCRIPT</p>
            </div>
            <div>
              <Image src={htmlLogo} alt="html logo" />
              <p>HTML</p>
            </div>
            <div>
              <Image src={cssLogo} alt="css logo" />
              <p>CSS</p>
            </div>
            <div>
              <Image src={reactLogo} alt="react logo" />
              <p>REACT.JS</p>
            </div>
            <div>
              <Image src={angularLogo} alt="angular logo" />
              <p>ANGULAR</p>
            </div>
            <div>
              <Image src={nodeLogo} alt="node logo" />
              <p>NODE.JS</p>
            </div>
            <div>
              <Image src={expressLogo} alt="express logo" />
              <p>EXPRESS.JS</p>
            </div>
            <div>
              <Image src={gitHubLogo} alt="github logo" />
              <p>GITHUB</p>
            </div>
            <div>
              <Image src={gitLogo} alt="git logo" />
              <p>GIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import "./projects.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { createTheme } from "@mui/material/styles";
import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Image from "next/image";
import Dex from "../../imgs/projectImgs/dex.png";
import Netflix from "../../imgs/projectImgs/netflix.png";
import Todos from "../../imgs/projectImgs/todos.png";

const Projects = () => {
  return (
    <div id="projectsPage" className="PageStructure">
      <div className="pageHeaderDiv">
        <div className="colorDiv"></div>
        <div className="grayDiv"></div>
        <h2>Projects</h2>
      </div>
      <div id="projectsContent">
        <div className="proCol">
          <Card className="card">
            <CardContent className="content">
              <Image src={Dex} alt="pokedex website image" />
            </CardContent>
            <CardActions className="buttons">
              <Button variant="contained">Live Link</Button>
              <Button variant="contained">Learn More</Button>
            </CardActions>
          </Card>

          <Card className="card">
            <CardContent className="content">
              <Image src={Netflix} alt="pokedex website image" />
            </CardContent>
            <CardActions className="buttons">
              <Button variant="contained">
                Live Link
              </Button>
              <Button variant="contained">Learn More</Button>
            </CardActions>
          </Card>
        </div>
        <div className="proCol">
          <Card className="card">
            <CardContent className="content">
              <Image src={Todos} alt="pokedex website image" />
            </CardContent>
            <CardActions className="buttons">
              <Button variant="contained">Live Link</Button>
              <Button variant="contained">Learn More</Button>
            </CardActions>
          </Card>
          <Card className="card">
            <CardContent className="content">
              <Image src={Todos} alt="pokedex website image" />
            </CardContent>
            <CardActions className="buttons">
              <Button variant="contained">Live Link</Button>
              <Button variant="contained">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import "./projects.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Dex from '../imgs/Dex.png'

const Projects = () => {
  return (
    <div id="projectsPage">
      <div id="projectsHeader">
        <h1>projects</h1>
      </div>
      <div id="projectsContent">
        <div class="proCol">
          <Card className="card">
            <CardContent className="content">
              <img src={Dex} alt="pokedex website image" />
            </CardContent>
            <CardActions className="buttons">
              <Button>Live Link</Button>
              <Button>Learn More</Button>
            </CardActions>
          </Card>
          <Card className="card"></Card>
        </div>
        <div class="proCol">
          <Card className="card"></Card>
          <Card className="card"></Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;

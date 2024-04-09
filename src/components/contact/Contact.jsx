import "./contact.css";
import { Button } from "@mui/material";

const Contact = () => {
  return (
    <div id="contactPage" className="PageStructure">
      <div className="pageHeaderDiv">
        <div className="colorDiv"></div>
        <div className="grayDiv"></div>
        <h2>Contact</h2>
      </div>
      <div id="contactContent">
        <h4>
          Have a question or want to work together? Leave your details and I'll
          get back to you as soon as possible.
        </h4>
        <form action="submit">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <textarea type="text" rows={5} placeholder="Message" />
          <Button type="submit" variant="outlined">Send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

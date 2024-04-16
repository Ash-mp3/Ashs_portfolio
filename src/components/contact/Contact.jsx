import "./contact.css";
import { Button } from "@mui/material";
import Link from "next/link";

const Contact = () => {
	return (
		<div id="contactPage" className="PageStructure">
			<div className="pageHeaderDiv">
				<div className="colorDiv"></div>
				<div className="grayDiv"></div>
				<h2>Contact</h2>
			</div>
			<div id="contactContent">
				<div id="emailForm">
					<h4>
                        Want to get in touch?
                        Feel free to message me here
                        or on my email and soicals!
					</h4>
					<form action="submit">
						<input type="text" autocomplete="off" placeholder="Name" />
						<input type="text" autocomplete="off" placeholder="Email" />
						<textarea type="text" autocomplete="off" rows={6} placeholder="Message" />
						<Button type="submit" variant="outlined">
							<span>Send</span>
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

import "./contact.css";
import { Button } from "@mui/material";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
	const [state, handleSubmit] = useForm("xayraeyg");
	// if (state.succeeded) {
	// 	return <p>Thanks for joining!</p>;
	// }
	return (
		<div id="contactPage" className="PageStructure px-0 lg:px-[90px]">
			<div className="pageHeaderDiv">
				<div className="colorDiv"></div>
				<div className="grayDiv"></div>
				<h2>Contact</h2>
			</div>
			<div id="contactContent">
				<div
					id="emailForm"
					className="w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%]"
				>
					<h4>
						Want to get in touch? Feel free to message me here, email me, or
						find me on social media!
					</h4>
					<form onSubmit={handleSubmit}>
						<input type="text" autocomplete="off" placeholder="Name" />
						<input id="email" type="email" name="email" placeholder="Email" />
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
						<textarea
							id="message"
							name="message"
							rows={6}
							placeholder="Message"
						/>
						<ValidationError
							prefix="Message"
							field="message"
							errors={state.errors}
						/>
						<Button
							type="submit"
							disabled={state.submitting}
                            variant="outlined"
                            color={state.succeeded ? "success" : "primary"}
						>
							<span>{state.succeeded ? "Sent" : "Submit"}</span>
						</Button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;

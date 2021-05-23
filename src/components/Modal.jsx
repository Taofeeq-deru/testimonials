import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

const btn = {
	background: "#FF5C00",
	boxShadow: "1px 4px 8px rgba(239, 88, 3, 0.2)",
	borderRadius: "4px",
	padding: "16px",
	color: "#ffffff",
	marginBottom: "24px",
	"&:hover": {
		background: "#FF5C00",
	},
};

const useStyles = makeStyles((theme) => ({
	title: {
		textAlign: "center",
		fontWeight: 900,
		color: "#000",
	},
	input: {
		display: "none",
	},
	label: {
		color: "#676767",
		fontSize: "14px",
		marginBottom: "5px",
		padding: 0,
	},
	uploadLabel: {
		display: "flex",
		justifyContent: "space-between",
		background: "#FEFEFE",
		border: "1px solid #EAEAEA",
		borderRadius: "8px",
		padding: "14px",
		color: "#676767",
		fontSize: "16px",
		marginBottom: "16px",
	},
	pointer: {
		cursor: "pointer",
	},
	namesCont: {
		display: "flex",
		flexFlow: "row nowrap",
		justifyContent: "space-between",
		margin: "16px 0",
	},
	names: {
		display: "flex",
		flexFlow: "column nowrap",
		width: "48%",
	},
	textInput: {
		background: "rgba(254, 254, 254, 0.3)",
		border: "1px solid #EAEAEA",
		borderRadius: "8px",
		height: "42px",
		padding: "5px",
		"&:focus": {
			outline: "none",
		},
	},
	area: {
		background: "rgba(254, 254, 254, 0.3)",
		border: "1px solid #EAEAEA",
		borderRadius: "8px",
		width: "100%",
		marginTop: "5px",
		padding: "5px",
		"&:focus": {
			outline: "none",
		},
	},
	yourStory: {
		margin: "16px 0",
	},
	radiosCont: {
		display: "flex",
		flexFlow: "row wrap",
	},
	radiosLabel: {
		color: "#676767",
		fontFamily: "14px",
		marginRight: "auto",
	},
	button: {
		...btn,
	},
	closeButton: {
		...btn,
		padding: "16px 32px",
	},
	thanksHead: {
		fontSize: "32px",
		fontWeight: 700,
		color: "#000",
	},
	thanksMssg: {
		textAlign: "center",
		display: "flex",
		justifyContent: "center",
		color: "#4A4A4A",
		fontSize: "16px",
	},
	center: {
		textAlign: "center",
		margin: "20px 0",
	},
}));

const initialValues = {
	file: null,
	firstName: "",
	lastName: "",
	type: "",
	story: "",
};

export const Modal = ({ open, close }) => {
	const classes = useStyles();

	const [values, setValues] = useState({ ...initialValues });

	const [showThanks, setThanks] = useState(false);

	const handleChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = () => {
		const file = URL.createObjectURL(values?.file);
		const localValues = JSON.parse(localStorage.getItem("testimonies")) || [];
		const newValues = [...localValues, { ...values, file }];
		localStorage.setItem("testimonies", JSON.stringify(newValues));
		setThanks(true);
		setValues({ ...initialValues });
	};

	const closeModal = () => {
		setThanks(false);
		setValues({ ...initialValues });
		close();
	};

	return (
		<div>
			<Dialog
				open={open}
				onClose={closeModal}
				aria-labelledby="form-dialog-title"
				maxWidth="sm"
				fullWidth={true}
			>
				{showThanks ? (
					<Thanks close={closeModal} />
				) : (
					<>
						<DialogTitle id="form-dialog-title" className={classes?.title}>
							Share your amazing story!
						</DialogTitle>
						<DialogContent>
							<form
								onSubmit={(e) => {
									e.preventDefault();
									handleSubmit();
								}}
							>
								<p className={classes?.label}>Upload your picture</p>
								<input
									accept="image/*"
									className={classes.input}
									id="file"
									multiple
									type="file"
									onChange={(e) =>
										setValues({ ...values, file: e.target.files[0] })
									}
								/>
								<label htmlFor="file" className={classes?.uploadLabel}>
									{values?.file ? (
										<>
											<span>{values?.file?.name}</span>
											<span
												onClick={(e) => {
													e.preventDefault();
													setValues({ ...values, file: null });
												}}
												className={classes?.pointer}
											>
												<svg
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M18 6L6 18"
														stroke="black"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
													<path
														d="M6 6L18 18"
														stroke="black"
														strokeWidth="2"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
										</>
									) : (
										<>
											<span>Choose image</span>
											<svg
												width="22"
												height="23"
												viewBox="0 0 22 23"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
												className={classes?.pointer}
											>
												<path
													d="M20.44 11.0499L11.25 20.2399C10.1242 21.3658 8.5972 21.9983 7.00502 21.9983C5.41283 21.9983 3.88586 21.3658 2.76002 20.2399C1.63417 19.1141 1.00168 17.5871 1.00168 15.9949C1.00168 14.4027 1.63417 12.8758 2.76002 11.7499L11.95 2.55992C12.7006 1.80936 13.7186 1.3877 14.78 1.3877C15.8415 1.3877 16.8595 1.80936 17.61 2.55992C18.3606 3.31048 18.7822 4.32846 18.7822 5.38992C18.7822 6.45138 18.3606 7.46936 17.61 8.21992L8.41002 17.4099C8.03473 17.7852 7.52574 17.996 6.99502 17.996C6.46429 17.996 5.9553 17.7852 5.58002 17.4099C5.20473 17.0346 4.9939 16.5256 4.9939 15.9949C4.9939 15.4642 5.20473 14.9552 5.58002 14.5799L14.07 6.09992"
													stroke="black"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</>
									)}
								</label>
								<div className={classes?.namesCont}>
									<div className={classes?.names}>
										<label className={classes?.label} htmlFor="firstName">
											First Name
										</label>
										<input
											type="text"
											name="firstName"
											id="firstName"
											value={values?.firstName}
											className={classes?.textInput}
											onChange={(e) => handleChange(e)}
										/>
									</div>
									<div className={classes?.names}>
										<label className={classes?.label} htmlFor="lastName">
											Last Name
										</label>
										<input
											type="text"
											name="lastName"
											id="lastName"
											value={values?.lastName}
											className={classes?.textInput}
											onChange={(e) => handleChange(e)}
										/>
									</div>
								</div>
								<div className={classes?.yourStory}>
									<label className={classes?.label} htmlFor="story">
										Share your story
									</label>
									<textarea
										name="story"
										id="story"
										rows="6"
										className={classes?.area}
										value={values?.story}
										onChange={(e) => handleChange(e)}
									/>
								</div>
								<div className={classes?.radiosCont}>
									<span className={classes?.radiosLabel}>
										What did you interact with Vasiti as?
									</span>
									<span>
										<input
											type="radio"
											name="type"
											id="customer"
											value={"customer"}
											onChange={(e) => handleChange(e)}
										/>{" "}
										Customer
									</span>
									<span>
										<input
											type="radio"
											name="type"
											id="vendor"
											value={"vendor"}
											onChange={(e) => handleChange(e)}
										/>{" "}
										Vendor
									</span>
								</div>
							</form>
						</DialogContent>
						<DialogActions>
							<Button onClick={handleSubmit} className={classes?.button}>
								Share your story
							</Button>
						</DialogActions>
					</>
				)}
			</Dialog>
		</div>
	);
};

const Thanks = ({ close }) => {
	const classes = useStyles();

	return (
		<div>
			<DialogTitle id="form-dialog-title" className={classes?.title}>
				<span className={classes?.thanksHead}>
					🎉 <br />
					Thank you for sharing your story!
				</span>
			</DialogTitle>
			<DialogContent>
				<span className={classes?.thanksMssg}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</span>
				<div className={classes?.center}>
					<Button onClick={close} className={classes?.closeButton}>
						Close
					</Button>
				</div>
			</DialogContent>
		</div>
	);
};

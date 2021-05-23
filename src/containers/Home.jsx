import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Typography, withWidth, Container } from "@material-ui/core";
import headerImg from "../images/header-banner.png";
import girls from "../images/two-girls.png";
import shopper from "../images/woman-shoppingbag-card.png";
import { Line } from "../icons";
import { testimonies } from "./data";
import { Modal } from "../components";

const flex = {
	display: "flex",
	flexFlow: "row wrap",
	paddingTop: "32px",
	"@media screen and (min-width: 760px)": {
		flexWrap: "nowrap",
		alignItems: "center",
		justifyContent: "center",
	},
};

const w100 = {
	width: "100%",
	"@media screen and (min-width: 960px)": {
		width: "unset",
	},
};

const story = {
	textTransform: "uppercase",
	fontWeight: 500,
	fontSize: "16px",
	marginTop: "24px",
	lineHeight: "32px",
	letterSpacing: "0.2em",
	cursor: "pointer",
};

const tag = {
	borderRadius: "4px",
	fontWeight: 700,
	fontSize: "16px",
	width: "min-content",
	padding: "8px",
	textTransform: "uppercase",
};

const smallTag = {
	borderRadius: "4px",
	fontWeight: 500,
	fontSize: "13px",
	width: "min-content",
	padding: "5px",
	textTransform: "uppercase",
};

const useStyles = makeStyles((theme) => ({
	header: {
		...flex,
	},
	headerLeft: {
		maxWidth: "500px",
	},
	headerTitle: {
		fontWeight: 700,
		color: "#000",
		fontSize: "36px",
		"@media screen and (min-width: 1024px)": {
			fontSize: "48px",
		},
	},
	headerText: {
		fontSize: "18px",
		color: "#494949",
	},
	headerImg: {
		width: "100%",
		"@media screen and (min-width: 760px)": {
			width: "unset",
		},
	},
	darkTesti: {
		background: "#222222",
		...flex,
		color: "#fff",
		paddingTop: "64px",
	},
	lightTesti: {
		background: "#FFF8F5",
		...flex,
		color: "#242120",
		paddingTop: "64px",
	},
	ellipse: {
		position: "relative",
		...w100,
		order: "2",
		"@media screen and (min-width: 760px)": {
			order: "1",
		},
	},
	lightEllipse: {
		position: "relative",
		...w100,
		order: "1",
		"@media screen and (min-width: 760px)": {
			order: "2",
		},
	},
	svg: {
		...w100,
	},
	bigTestiImg: {
		position: "absolute",
		top: "120px",
		left: "0",
		zIndex: "200",
		...w100,
		"@media screen and (min-width: 1024px)": {
			top: "48px",
		},
	},
	bigTestiText: {
		maxWidth: "400px",
		padding: "0 3px",
		order: "1",
		"@media screen and (min-width: 760px)": {
			order: "2",
		},
		"@media screen and (min-width: 1024px)": {
			marginLeft: "64px",
		},
	},
	lightBigTestiText: {
		maxWidth: "400px",
		padding: "0 3px",
		order: "2",
		"@media screen and (min-width: 760px)": {
			order: "1",
		},
		"@media screen and (min-width: 1024px)": {
			marginRight: "64px",
		},
	},
	bigTestiTitle: {
		fontWeight: 700,
		fontSize: "32px",
	},
	bigTestiTag: {
		border: "1px solid rgba(255, 255, 255, 0.4)",
		...tag,
	},
	lightBigTestiTag: {
		border: "1px solid rgba(255, 92, 0, 0.4)",
		color: "#FF5C00",
		...tag,
	},
	bigTestimony: {
		fontSize: "18px",
		lineHeight: "150%",
		letterSpacing: "0.02em",
	},
	shareStory: {
		...story,
	},
	lightShareStory: {
		color: "#FF5C00",
		...story,
	},
	line: {
		marginTop: "-5px",
	},
	otherTesti: {
		background: "#fff",
		padding: "32px 0",
	},
	testiList: {
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-around",
	},
	eachTesti: {
		width: "320px",
		marginBottom: "32px",
	},
	img: {
		width: "200px",
		height: "200px",
		borderRadius: "50%",
	},
	name: {
		color: "#474747",
		textTransform: "capitalize",
	},
	vendor: {
		background: "#F0FFEE",
		color: "#049A01",
		...smallTag,
	},
	customer: {
		background: "#EEF8FF",
		color: "#0D019A",
		...smallTag,
	},
	testimony: {
		color: "#474747",
		fontSize: "16px",
	},
}));

const Home = () => {
	const classes = useStyles();
	const [modal, setModal] = useState(false);

	const openModal = () => {
		setModal(true);
	};

	const closeModal = () => {
		setModal(false);
	};

	const localTestimonies =
		JSON.parse(localStorage.getItem("testimonies")) || [];

	return (
		<>
			<div>
				<Container maxWidth="lg" className={classes?.header}>
					<div className={classes?.headerLeft}>
						<Typography variant="h1" className={classes?.headerTitle}>
							Amazing <br /> Experiences from Our <br /> Wonderful Customers
						</Typography>
						<p className={classes?.headerText}>
							Here is what customers and vendors are saying about us, you can
							share your stories with us too.
						</p>
					</div>
					<div className={classes?.headerRight}>
						<img
							src={headerImg}
							alt="boy and girl"
							className={classes?.headerImg}
						/>
					</div>
				</Container>
				<div className={classes?.darkTesti}>
					<div className={classes?.ellipse}>
						<svg
							width="631"
							height="631"
							viewBox="0 0 631 631"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={classes?.svg}
						>
							<circle cx="315.5" cy="315.5" r="315.5" fill="#2E2E2E" />
						</svg>
						<img src={girls} alt="two girls" className={classes?.bigTestiImg} />
					</div>
					<div className={classes?.bigTestiText}>
						<Typography variant="h3" className={classes?.bigTestiTitle}>
							Tolu & Joy’s Experience
						</Typography>
						<p className={classes?.bigTestiTag}>customer</p>
						<p className={classes?.bigTestimony}>
							I had the best experience shopping with vasiti. Usability of the
							website was great, very good customer service, an all round great
							experience. I would definately be coming back! I had the best
							experience shopping with vasiti. Usability of the website was
							great, very good customer service, an all round great experience.
							I would definately be coming back!
						</p>
						<span className={classes?.shareStory} onClick={openModal}>
							Share your own story!
						</span>
						<Line className={classes?.line} />
					</div>
				</div>
				<div className={classes?.otherTesti}>
					<Container maxWidth="lg" className={classes?.testiList}>
						{testimonies?.map((item, i) => (
							<div className={classes?.eachTesti} key={i}>
								<img
									src={item?.img}
									alt={item?.name}
									className={classes?.img}
								/>
								<Typography variant="h5" className={classes?.name}>
									{item?.name}
								</Typography>
								<p className={classes[item?.type]}>{item?.type}</p>
								<p className={classes?.testimony}>{item?.testimony}</p>
							</div>
						))}
					</Container>
				</div>
				<div className={classes?.lightTesti}>
					<div className={classes?.lightEllipse}>
						<svg
							width="631"
							height="631"
							viewBox="0 0 631 631"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							className={classes?.svg}
						>
							<circle
								cx="315.5"
								cy="315.5"
								r="315.5"
								fill="#FF5C00"
								fillOpacity="0.03"
							/>
						</svg>

						<img
							src={shopper}
							alt="woman with card"
							className={classes?.bigTestiImg}
						/>
					</div>
					<div className={classes?.lightBigTestiText}>
						<Typography variant="h3" className={classes?.bigTestiTitle}>
							Josiah’s Experience
						</Typography>
						<p className={classes?.lightBigTestiTag}>vendor</p>
						<p className={classes?.lightBigTestimony}>
							I had the best experience shopping with vasiti. Usability of the
							website was great, very good customer service, an all round great
							experience. I would definately be coming back! I had the best
							experience shopping with vasiti. Usability of the website was
							great, very good customer service, an all round great experience.
							I would definately be coming back!
						</p>
						<span className={classes?.lightShareStory} onClick={openModal}>
							Share your own story!
						</span>
						<Line className={classes?.line} />
					</div>
				</div>
				<div className={classes?.otherTesti}>
					<Container maxWidth="lg" className={classes?.testiList}>
						{testimonies?.map((item, i) => (
							<div className={classes?.eachTesti} key={i}>
								<img
									src={item?.img}
									alt={item?.name}
									className={classes?.img}
								/>
								<Typography variant="h5" className={classes?.name}>
									{item?.name}
								</Typography>
								<p className={classes[item?.type]}>{item?.type}</p>
								<p className={classes?.testimony}>{item?.testimony}</p>
							</div>
						))}
						{localTestimonies?.map((item, i) => (
							<div className={classes?.eachTesti} key={i}>
								<img
									src={item?.file}
									alt={item?.firstName}
									className={classes?.img}
								/>
								<Typography variant="h5" className={classes?.name}>
									{item?.firstName} {item?.lastName}
								</Typography>
								<p className={classes[item?.type]}>{item?.type}</p>
								<p className={classes?.testimony}>{item?.story}</p>
							</div>
						))}
					</Container>
				</div>
			</div>
			<Modal open={modal} close={closeModal} />
		</>
	);
};

Home.propTypes = {
	width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Home);

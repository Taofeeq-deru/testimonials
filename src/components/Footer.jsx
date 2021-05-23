import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
	Typography,
	Button,
	withWidth,
	Container,
	Hidden,
	FormControl,
	Input,
	InputAdornment,
} from "@material-ui/core";
import phone from "../images/subscribe-banner.png";
import { Facebook, Twitter, Instagram, Linkedin } from "../icons";

const useStyles = makeStyles((theme) => ({
	root: {
		background: "#25201D",
	},
	top: {
		display: "flex",
		padding: "64px 0",
		position: "relative",
	},
	phone: {
		position: "absolute",
		top: "-44px",
		left: "0",
	},
	webSubscribe: {
		marginLeft: "auto",
		width: "400px",
	},
	subBtn: {
		color: "#242120",
		fontWeight: 600,
	},
	subInput: {
		background: "rgba(255, 255, 255, 0.2)",
		borderRadius: "6px",
		height: "51px",
		width: "368px",
		padding: "0 5px",
		color: "#fff",
		"&:placeholder": {
			color: "#fff",
		},
		"&:focus": {
			outline: "none",
			boxShadow: "none",
			borderBottom: "none",
		},
	},
	subTitle: {
		color: "#fff",
		fontSize: "40px",
		fontWeight: 700,
		marginBottom: "5px",
	},
	subText: {
		color: "#fff",
		fontSize: "14px",
		margin: "15px 0",
	},
	bottom: {
		padding: "84px 32px",
		display: "flex",
		flexFlow: "row wrap",
		justifyContent: "space-between",
	},
	footerHead: {
		color: "#fff",
		fontWeight: 600,
		fontSize: "16px",
		marginBottom: "18px",
	},
	footerIcons: {
		display: "flex",
		flexFlow: "row nowrap",
		marginBottom: "24px",
	},
	icons: {
		marginRight: "5px",
	},
}));

const Footer = () => {
	const classes = useStyles();

	return (
		<>
			<footer className={classes?.root}>
				<Hidden smDown>
					<Container maxWidth="md" className={classes?.top}>
						<img
							src={phone}
							alt="subscribe banner"
							className={classes?.phone}
						/>
						<div className={classes?.webSubscribe}>
							<Typography variant="h2" className={classes?.subTitle}>
								Be a member <br /> of our community 🎉
							</Typography>
							<p className={classes?.subText}>
								We’d make sure you’re always first to know what’s happening on
								Vasiti—thus, the world.
							</p>
							<FormControl className={classes.margin}>
								<Input
									id="input-with-icon-adornment"
									placeholder="enter your email address"
									className={classes?.subInput}
									endAdornment={
										<InputAdornment position="end">
											<Button variant="contained" className={classes?.subBtn}>
												SUBSCRIBE
											</Button>
										</InputAdornment>
									}
								/>
							</FormControl>
						</div>
					</Container>
				</Hidden>
				<Container maxWidth="lg" className={classes?.bottom}>
					<div className={classes?.footerCol}>
						<Typography variant="h6" className={classes?.footerHead}>
							Conmpany
						</Typography>
						<p className={classes?.subText}>About Us</p>
						<p className={classes?.subText}>Term of Use</p>
						<p className={classes?.subText}>Privacy Policy</p>
						<p className={classes?.subText}>Peess and Media</p>
					</div>
					<div className={classes?.footerCol}>
						<Typography variant="h6" className={classes?.footerHead}>
							Products
						</Typography>
						<p className={classes?.subText}>Marketplace</p>
						<p className={classes?.subText}>Magazine</p>
						<p className={classes?.subText}>Seller</p>
						<p className={classes?.subText}>Wholesale</p>
						<p className={classes?.subText}>Services</p>
					</div>
					<div className={classes?.footerCol}>
						<Typography variant="h6" className={classes?.footerHead}>
							Careers
						</Typography>
						<p className={classes?.subText}>Become a Campus Rep</p>
						<p className={classes?.subText}>Become a Vasiti Influencer</p>
						<p className={classes?.subText}>Become a Campus writer</p>
						<p className={classes?.subText}>Become an Affiliate</p>
					</div>
					<div className={classes?.footerCol}>
						<Typography variant="h6" className={classes?.footerHead}>
							Get in touch
						</Typography>
						<p className={classes?.subText}>Contact us</p>
						<p className={classes?.subText}>Partner with us</p>
						<p className={classes?.subText}>Advertise with us</p>
						<p className={classes?.subText}>Help/FAQs</p>
					</div>
					<div className={classes?.footerCol}>
						<Typography variant="h6" className={classes?.footerHead}>
							Join our community
						</Typography>
						<div className={classes?.footerIcons}>
							<Facebook className={classes?.icons} />
							<Instagram className={classes?.icons} />
							<Twitter className={classes?.icons} />
							<Linkedin className={classes?.icons} />
						</div>
						<p className={classes?.subText}>Email Newsletter</p>
					</div>
				</Container>
			</footer>
		</>
	);
};

Footer.propTypes = {
	width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Footer);

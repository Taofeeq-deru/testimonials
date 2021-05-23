import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Typography, Button, withWidth, Hidden } from "@material-ui/core";
import { Logo } from "../icons";

const menu = {
	fontSize: "13px",
	color: "#000000",
	textAlign: "center",
	textTransform: "uppercase",
	cursor: "pointer",
};

const useStyles = makeStyles((theme) => ({
	authButton: {
		background: "#FF5C00",
		boxShadow: "1px 4px 8px rgba(239, 88, 3, 0.2)",
		borderRadius: "4px",
		width: "84.16px",
		color: "#ffffff",
		"&:hover": {
			background: "#FF5C00",
		},
	},
	sideBar: {
		position: "absolute",
		left: "0",
		top: "0",
		zIndex: "1000",
		width: "250px",
		height: "100vh",
		display: "none",
		padding: "32px",
	},
	sideOpen: {
		display: "flex",
		flexFlow: "column nowrap",
		background: "#fff",
	},
	sideMenu: {
		...menu,
		textAlign: "left",
		margin: "20px 0",
	},
}));

const Sidebar = ({ sider, close }) => {
	const classes = useStyles();

	const closeSider = () => close();

	return (
		<>
			<Hidden mdUp>
				<div
					className={`${classes?.sideBar} ${sider && classes?.sideOpen}`}
					onClick={(e) => e.stopPropagation()}
				>
					<Logo />
					<Typography
						variant="h6"
						className={classes?.sideMenu}
						onClick={closeSider}
					>
						about us
					</Typography>
					<Typography
						variant="h6"
						className={classes?.sideMenu}
						onClick={closeSider}
					>
						stories
					</Typography>
					<Typography
						variant="h6"
						className={classes?.sideMenu}
						onClick={closeSider}
					>
						contact
					</Typography>
					<Typography
						variant="h6"
						className={classes?.sideMenu}
						onClick={closeSider}
					>
						log in
					</Typography>
					<Button className={classes?.authButton} onClick={closeSider}>
						SIGN UP
					</Button>
				</div>
			</Hidden>
		</>
	);
};

Sidebar.propTypes = {
	width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Sidebar);

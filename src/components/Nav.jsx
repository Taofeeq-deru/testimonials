import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import {
	Typography,
	Button,
	IconButton,
	withWidth,
	Container,
	Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Logo } from "../icons";

const menu = {
	fontSize: "13px",
	color: "#000000",
	textAlign: "center",
	textTransform: "uppercase",
	cursor: "pointer",
};

const useStyles = makeStyles((theme) => ({
	upperNav: {
		padding: "32px 0",
	},
	upperNavCont: {
		flexGrow: 1,
		display: "flex",
		alignItems: "center",
	},
	lowerNav: {
		padding: "16px 10px",
		border: "1px solid rgba(0, 0, 0, 0.08)",
		boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.04)",
	},
	lowerNavCont: {
		flexGrow: 1,
		display: "flex",
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	upperMenuItem: {
		...menu,
		margin: "0 16px",
	},
	menuItem: {
		flexGrow: 1,
		...menu,
	},
	navLogo: {
		marginRight: "auto",
	},
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
}));

const Nav = ({ sider, setSider }) => {
	const classes = useStyles();

	return (
		<>
			<nav position="static" onClick={() => setSider(false)}>
				<div className={classes?.upperNav}>
					<Container maxWidth="lg" className={classes?.upperNavCont}>
						<Logo className={classes?.navLogo} />
						<Hidden smDown>
							<Typography variant="h6" className={classes?.upperMenuItem}>
								about us
							</Typography>
							<Typography variant="h6" className={classes?.upperMenuItem}>
								stories
							</Typography>
							<Typography variant="h6" className={classes?.upperMenuItem}>
								contact
							</Typography>
							<Typography variant="h6" className={classes?.upperMenuItem}>
								log in
							</Typography>
							<Button className={classes?.authButton}>SIGN UP</Button>
						</Hidden>
						<Hidden mdUp>
							<IconButton
								edge="start"
								className={classes.menuButton}
								color="inherit"
								aria-label="menu"
								onClick={(e) => {
									e.stopPropagation();
									setSider(!sider);
								}}
							>
								<MenuIcon />
							</IconButton>
						</Hidden>
					</Container>
				</div>
				<Hidden smDown>
					<div className={classes?.lowerNav}>
						<Container maxWidth="lg" className={classes?.lowerNavCont}>
							<Typography variant="h6" className={classes?.menuItem}>
								marketplace
							</Typography>
							<Typography variant="h6" className={classes?.menuItem}>
								wholesale center
							</Typography>
							<Typography variant="h6" className={classes?.menuItem}>
								seller center
							</Typography>
							<Typography variant="h6" className={classes?.menuItem}>
								services
							</Typography>
							<Typography variant="h6" className={classes?.menuItem}>
								internships
							</Typography>
							<Typography variant="h6" className={classes?.menuItem}>
								events
							</Typography>
						</Container>
					</div>
				</Hidden>
			</nav>
		</>
	);
};

Nav.propTypes = {
	width: PropTypes.oneOf(["lg", "md", "sm", "xl", "xs"]).isRequired,
};

export default withWidth()(Nav);

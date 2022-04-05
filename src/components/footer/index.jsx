import { Typography, Stack, Grid } from "@mui/material"
import React from "react"
import { makeStyles } from '@mui/styles';
import Vader from "../../assets/star-wars/darthvader.jpg"
import { ReactComponent as Facebook } from '../../assets/social-media/icon_facebook.svg';
import { ReactComponent as Twitter } from '../../assets/social-media/icon_twitter.svg';
import Instagram from "../../assets/social-media/icon_instagram.png"

const useStyles = makeStyles((theme) => ({
	contentContainer: {
		backgroundImage: `url(${Vader})`,
		backgroundSize: 'cover',
		minHeight: 430,
		backgroundPosition: "center"
	},
	link: {
		textDecoration: "underline",
		color: "#D5D5D5",
		cursor: "pointer",
		fontWeight: 500,
		fontSize: "18px",
		[theme.breakpoints.down("md")]: {
			fontWeight: 300,
			fontSize: "13px"
		}
	},
	followText: {
		color: "#D5D5D5",
		fontWeight: 500,
		fontSize: "18px",
		[theme.breakpoints.down("md")]: {
			fontWeight: 300,
			fontSize: "13px"
		}
	}
}));

const Footer = () => {

	//Hooks
	const classes = useStyles();

	return(
		<footer style={{ width: "100%" }}>
			<Stack className={classes.contentContainer} justifyContent="flex-start" alignItems="center">

				<Stack  width="90%" marginTop={{ md: "90px", sm: "30px", xs: "30px" }}  alignItems="space-around" spacing={9}>
					<Typography color="#D5D5D5" variant="h4" sx={{ display: { md: "initial", sm: "initial", xs: "none" } }}>TM Lucasfilm Ltd. All Rights Reserved.</Typography>

					<Grid container md={12} justifyContent="space-around" alignItems="center">
						<Grid container item md={8} sm={12} direction="row" justifyContent="space-around">
							<Stack gap={1}>
								<p className={classes.link}>Terms of Use</p>
								<p className={classes.link}>Legal Notices</p>
								<p className={classes.link}>Privacy Policy</p>
							</Stack>

							<Stack  gap={1}>
								<p className={classes.link}>Your California Privacy Rights</p>
								<p className={classes.link}>Star Wars at Disney Store</p>
								<p className={classes.link}>Privacy Policy</p>
							</Stack>
						</Grid>

						<Grid container item md={4} sm={12} alignItems="center" marginTop={4}>
							<Stack width="90%" flexDirection={{ md: "column", sm:"row", xs: "row" }}  alignItems="center" gap={2}>
								<p color="#D5D5D5" className={classes.followText}>FOLLOW STAR WARS</p>
								<Stack flexDirection="row" justifyContent="center" alignItems="center" gap={7}>
									<Facebook style={{ cursor: "pointer" }} />
									<Twitter style={{ cursor: "pointer" }} />
									<img src={Instagram} alt="icon-instagram" style={{ cursor: "pointer" }}/>
								</Stack>
							</Stack>
						</Grid>
					</Grid>
				</Stack>
				
			</Stack>
		</footer>
	)
}

export default Footer
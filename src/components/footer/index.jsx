import { Typography, Stack, Grid } from "@mui/material"
import React from "react"
import { makeStyles } from '@mui/styles';
import Vader from "../../assets/star-wars/darthvader.jpg"
import { ReactComponent as Facebook } from '../../assets/social-media/icon_facebook.svg';
import { ReactComponent as Twitter } from '../../assets/social-media/icon_twitter.svg';
import Instagram from "../../assets/social-media/icon_instagram.png"

const useStyles = makeStyles({
	contentContainer: {
		backgroundImage: `url(${Vader})`,
		backgroundSize: 'cover',
		minHeight: 400,
		backgroundPosition: "center"
	},
	link: {
		textDecoration: "underline",
		color: "#D5D5D5",
		cursor: "pointer",
		fontWeight: 500,
		fontSize: "180px"
	},
});

const Footer = () => {

	//Hooks
	const classes = useStyles();

	return(
		<footer style={{ width: "100%" }}>
			<Stack className={classes.contentContainer} justifyContent="flex-start">

				<Stack marginTop={{ md: "90px", sm: "30px", xs: "30px" }} spacing={9}>
					<Typography color="#D5D5D5" variant="h4" sx={{ display: { md: "initial", sm: "initial", xs: "none" } }}>TM Lucasfilm Ltd. All Rights Reserved.</Typography>

					<Grid container md={12} justifyContent="space-around" alignItems="center">
						<Grid container item md={8} sm={12} direction="row" justifyContent="space-around">
							<Stack gap={3}>
								<Typography className={classes.link}>Terms of Use</Typography>
								<Typography className={classes.link}>Legal Notices</Typography>
								<Typography className={classes.link}>Privacy Policy</Typography>
							</Stack>

							<Stack  gap={3}>
								<Typography className={classes.link}>Your California Privacy Rights</Typography>
								<Typography className={classes.link}>Star Wars at Disney Store</Typography>
								<Typography className={classes.link}>Privacy Policy</Typography>
							</Stack>
						</Grid>

						<Grid container item md={4} sm={12} alignItems="center">
							<Stack flexDirection={{ md: "column", sm:"row", xs: "row" }} gap={2}>
								<Typography color="#D5D5D5">FOLLOW STAR WARS</Typography>
								<Stack flexDirection="row" justifyContent="center" alignItems="center" gap={7}>
									<Facebook />
									<Twitter />
									<img src={Instagram} alt="icon-instagram" />
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

{/* <Stack width="100%" justifyContent="space-around" alignItems="center">
	<Stack width="100%" flexDirection="row" bgcolor="red" justifyContent="space-around" alignItems="center">
		<Stack gap={3}>
			<Typography className={classes.link} variant="h6">Terms of Use</Typography>
			<Typography className={classes.link} variant="h6">Legal Notices</Typography>
			<Typography className={classes.link} variant="h6">Privacy Policy</Typography>
		</Stack>

		<Stack  gap={3}>
			<Typography className={classes.link} variant="h6">Your California Privacy Rights</Typography>
			<Typography className={classes.link} variant="h6">Star Wars at Disney Store</Typography>
			<Typography className={classes.link} variant="h6">Privacy Policy</Typography>
		</Stack>

		<Stack>
			<Typography className={classes.link} variant="h6">Terms of Use</Typography>
			<Typography className={classes.link} variant="h6">Legal Notices</Typography>
			<Typography className={classes.link} variant="h6">Privacy Policy</Typography>
		</Stack>
	</Stack>
</Stack> */}
import { Typography, Stack } from "@mui/material"
import React from "react"
import { makeStyles } from '@mui/styles';
import TopBanner from "../../../assets/star-wars/header.png"
import MiddleBanner from "../../../assets/star-wars/kiloren.jpg"
import BattleFrontSection from "./sections/BattleFrontSection";

const useStyles = makeStyles({
	mainContainer: {
		// minHeight: "180vh",
	},
	sectionsContainer: {

	},
	topBanner: {
		// backgroundImage: `url(${TopBanner})`,
        // backgroundSize: 'cover',
        // minHeight: 800,
	}
});

const Home  = () => {

	//Hooks
	const classes = useStyles();

	return(
		<Stack className={classes.mainContainer}>
			<Stack className={classes.sectionsContainer} gap={20} alignItems="center">
				
				<Stack width="100%">
					<img src={TopBanner} alt="star-wars title"/>
				</Stack>

				<section>
					<BattleFrontSection />
				</section>

				<Stack width="100%">
					<img src={MiddleBanner} alt="kiloren image"/>
				</Stack>

			</Stack>
		</Stack>
	)
}

export default Home
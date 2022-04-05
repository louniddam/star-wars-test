import { Typography, Stack } from "@mui/material"
import React from "react"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	mainContainer: {
		// minHeight: "180vh",
	},
});

const Home  = () => {

	//Hooks
	const classes = useStyles();

	return(
		<Stack className={classes.mainContainer}>

		</Stack>
	)
}

export default Home
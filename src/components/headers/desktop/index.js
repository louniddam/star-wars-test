import { Typography, Stack } from "@mui/material"
import React from "react"
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	mainContainer: {
		width: "100%",
		minHeight: "10vh",
		backgroundColor: "black",
		padding: "10px",
		opacity: "0.9",
		position: "fixed",
		top: 0,
		left: 0
	},
	itemsContainer: {

	},
	navItems: {
		color: "white",
		paddingTop: "3vh",
		fontWeight: "900 !important",
		cursor: "pointer",
		transition: "ease-in-out",
		"&:hover": {
			transform: "scale(1.1)"
		}
	}
});

const Header = () => {

	//Hooks
	const classes = useStyles()

	return(
		<Stack className={classes.mainContainer}>
			<Stack flexDirection={{md: "row", sm: "column" }} alignItems="center" justifyContent="space-around" className={classes.itemsContainer} gap={1}>
				<Typography className={classes.navItems}>LE COTÉ LUMINEUX</Typography>
				<Typography className={classes.navItems}>LE COTÉ OBSCURE</Typography>
				<Typography className={classes.navItems}>L'EMPIRE</Typography>
				<Typography className={classes.navItems}>LES DRUÏDES</Typography>
				<Typography className={classes.navItems}>LES EWOKS</Typography>
				<Typography className={classes.navItems}>JABBA LE HUTT</Typography>
			</Stack>
		</Stack>
	)
}

export default Header
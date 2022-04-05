import { Button, Stack, Typography } from "@mui/material"
import React from "react"
import { makeStyles } from '@mui/styles';
import Burger from "../../../assets/others/menu.png"
import Close from "../../../assets/others/close.png"
import BackgroundImg from '../../../assets/star-wars/header-bg.png'

const useStyles = makeStyles({
	mainContainer: {
		width: "100%",
		position: "fixed",
		top: 8,
		right: 0
	},
	burgerMenu: {
		width: "20px",
		height: "20px",
		cursor: "pointer"
	},
	openMenu: {
		position: "fixed",
		width: "100%",
		height: "100%",
		// top: "-100%",
		left: 0,
		right: 0,
		bottom: 0,
		overflow: "hidden",
		backgroundImage: `url(${BackgroundImg})`,
		backgroundSize: 'cover',
	},
	closeButton: {
		marginLeft: "10px",
		marginTop: "10px",
		width: "40px",
		height: "40px",
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

const MobileHeader = () => {

	//Hooks
	const classes = useStyles()

	//States
	const [isOpen, setIsOpen] = React.useState(false)

	return(
		<Stack className={classes.mainContainer}>
			{
				!isOpen ?
				<Stack width="100%" alignItems="flex-end">
					<Button variant="text" onClick={() => setIsOpen(true)}>
						<img src={Burger} alt="burger-menu" className={classes.burgerMenu} />
					</Button>
				</Stack>
				:
				<Stack className={classes.openMenu}>
						<img src={Close} className={classes.closeButton} onClick={() => setIsOpen(false)}/>
						<Stack>
							<Typography className={classes.navItems} onClick={() => setIsOpen(false)}>LE COTÉ LUMINEUX</Typography>
							<Typography className={classes.navItems} onClick={() => setIsOpen(false)}>LE COTÉ OBSCURE</Typography>
							<Typography className={classes.navItems} onClick={() => setIsOpen(false)}>L'EMPIRE</Typography>
							<Typography className={classes.navItems} onClick={() => setIsOpen(false)}>LES DRUÏDES</Typography>
							<Typography className={classes.navItems} onClick={() => setIsOpen(false)}>LES EWOKS</Typography>
							<Typography className={classes.navItems} onClick={() => setIsOpen(false)}>JABBA LE HUTT</Typography>
						</Stack>
				</Stack>
			}

		</Stack>
	)
}

export default MobileHeader
import React from "react"
import { makeStyles } from '@mui/styles';
import { Typography, Stack } from "@mui/material"
import BattleFrontImg from "../../../../assets/star-wars/ad.jpg" 

const useStyles = makeStyles((theme) => ({
	text: {
		textAlign: "left"
	},
	imageContainer: {
		// [theme.breakpoints.down("md")]: {
		// 	visibility: "hidden"
		//   },
	}
  }));

const BattleFrontSection = () => {

	//Hooks
	const classes = useStyles();

	return(
		<Stack width="100%" flexDirection="row" justifyContent="space-around" alignItems="flex-start">
			<Stack gap={2} width={{ md: "35%", sm: "100%" }}>
				<Typography variant="h5" fontWeight={800} className={classes.text}>
					Star Wars, The force Awakens
				</Typography>

				<Typography variant="body1" className={classes.text}>
				Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus  combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ». 
				</Typography>

				<Typography variant="body1" className={classes.text}>
				Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
				</Typography>

				<Typography variant="body1" className={classes.text}>
				Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus  combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ». 
				</Typography>

				<Typography variant="body1" className={classes.text}>
				Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
				</Typography>

				<Typography variant="body1" className={classes.text}>
				Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus  combattent les vestiges de l'Empire réunis sous la bannière du « Premier Ordre ». 
				</Typography>

				<Typography variant="body1" className={classes.text}>
				Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.
				</Typography>

			</Stack>

			<Stack sx={{ display: { md:"initial", sm: "none", xs: "none" } }}>
				<img src={BattleFrontImg} alt="battle front game" />
			</Stack>
		</Stack>
	)
}

export default BattleFrontSection
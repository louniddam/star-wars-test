import React from "react"
import { makeStyles } from '@mui/styles';
import { Typography, Stack } from "@mui/material"
import Robots from "../../../../assets/star-wars/r2d2.jpg" 

const useStyles = makeStyles((theme) => ({
	robotImg: {
		width: "400px",
		height: "auto",
		[theme.breakpoints.down("md")]: {
			width: "300px",	
		},
		[theme.breakpoints.down("sm")]: {
			width: "250px",	
		}
	}
}));

const HistorySection = () => {

	//Hooks
	const classes = useStyles();

	return(
		<Stack width="100%" alignItems="center" gap={5}>
			<Stack width="90%">
				<Typography variant="h3" textAlign="center" fontWeight={800}>
					A long time ago, in a galaxy far, far away…
				</Typography>
			</Stack>

			<Stack width="70%" alignItems="center" sx={{ display: { md: "initial", sm: "none", xs: "none" } }} spacing={1}>
				<Stack flexDirection="row" alignItems="flex-start" gap={2}>
					<img src={Robots}  alt="the best robots of the galaxy" className={classes.robotImg} />
					<Stack width="40%">
						<Typography textAlign="left">La Guerre des étoiles (titre original Star Wars, soit littéralement Guerres Stellaires ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. 
						Sans prétendre expliquer le succès du premier film (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque de moyens (le budget était relativement modeste, les acteurs presque inconnus):
						</Typography>
					</Stack>
				</Stack>

				<Stack>
					<Typography textAlign="left">- Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée, westerns, péplums, contes de fées et même le Seigneur des Anneaux de J.R.R. Tolkien ; cette œuvre n'apparaît pas comme de la science-fiction au sens strict mais plutôt comme du space fantasy.
					- Les effets spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation de John Dykstra (qui a également participé au premier film de Star Trek), qui avait développé une nouvelle manière d'animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur (Dykstraflex).
					- Le film a développé un univers cohérent, avec, comme préoccupation constante, autant la création d'une ambiance que l'action proprement dite.
					- La musique, composée par John Williams, introduit des thèmes récurrents et des leitmotivs (procédé classique mais renforçant la cohérence).
					</Typography>
				</Stack>
			</Stack>
			
			<Stack width="70%" justifyContent="center" alignItems="center" sx={{ display: { md: "none", sm: "initial", xs: "initial" } }}>
				<img src={Robots}  alt="the best robots of the galaxy" className={classes.robotImg} />
				<Stack width="100%" sx={{ marginTop: 2 }}>
					<Typography textAlign="justify">
					La Guerre des étoiles (titre original Star Wars, soit littéralement Guerres Stellaires ) est une épopée cinématographique de science-fiction créée par George Lucas, considérée comme un élément phare du space opera. Prévue à la base pour être une suite de trois trilogies (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par la seconde trilogie (l'Épisode IV - Un nouvel espoir) en 1977. La série connut un succès phénoménal partout dans le monde et engendra une très importante communauté de fans. 
					Sans prétendre expliquer le succès du
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	)
}

export default HistorySection
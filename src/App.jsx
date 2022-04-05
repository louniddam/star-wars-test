import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material"
import Home from "./views/pages/home"
import Header from "./components/headers/desktop"
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import Footer from './components/footer';
import useMediaQuery from '@mui/material/useMediaQuery';
import MobileHeader from "./components/headers/mobile"

function App() {
	//hooks
	const theme = createTheme()
	const matches = useMediaQuery(theme.breakpoints.down('md'))


  return (
	<div className="App">
		<ThemeProvider theme={theme}>
			<Router>
				{
					!matches ?
					<Header />
					:
					<MobileHeader />
				}
				<Routes>
					<Route exact path="/" element={<Home/>} />
				</Routes>
				<Footer />
			</Router>
		</ThemeProvider>
	</div>
  );
}

export default App;

import { createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider } from "@mui/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import Header from "./components/headers/desktop";
import MobileHeader from "./components/headers/mobile";
import './css/App.css';
import Home from "./views/pages/home";

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

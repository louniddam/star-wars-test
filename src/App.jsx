import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material"
import Home from "./views/pages/home"
import Header from "./components/headers/desktop"
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import Footer from './components/footer';


const theme = createTheme()

function App() {
  return (
	<div className="App">
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
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

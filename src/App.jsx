import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material"
import Home from "./views/pages/home"
import Header from "./components/headers/desktop"
import { ThemeProvider } from "@mui/styles";
import { createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme()

function App() {
  return (
	<div className="App">
		<ThemeProvider theme={theme}>
			<Router>
				<Header />
					{/* <div style={{ marginTop: 100 }}></div> */}
				<Routes>
					<Route exact path="/" element={<Home/>} />
				</Routes>
			</Router>
		</ThemeProvider>
	</div>
  );
}

export default App;

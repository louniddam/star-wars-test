import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material"
import Home from "./views/pages/home"
import Header from "./components/headers/desktop"

function App() {
  return (
	<div className="App">
	  <Router>
		  <Header />
			{/* <div style={{ marginTop: 100 }}></div> */}
		<Routes>
			<Route exact path="/" element={<Home/>} />
		</Routes>
	  </Router>
	</div>
  );
}

export default App;

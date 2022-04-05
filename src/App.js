import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Typography } from "@mui/material"
import Home from "./views/pages/home"

function App() {
  return (
	<div className="App">
	  <Router>
		<Routes>
		  <Route exact path="/" element={<Home/>} />
		</Routes>
	  </Router>
	</div>
  );
}

export default App;

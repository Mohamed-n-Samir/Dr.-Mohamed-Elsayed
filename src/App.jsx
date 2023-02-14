import { useState } from "react";
import "./App.css";
import i18next from "i18next";
import Header from "./Components/Header/Header";
import Navbar1 from "./Components/Navbar1/Navbar1";
import Section1 from "./Components/Section1/Section1";

function App() {
	return (
		<div>
			<Navbar1 />
			<Header />
			<Section1 />
		</div>
	);
}

export default App;

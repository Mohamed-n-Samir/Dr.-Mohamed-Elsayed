import React from "react";
import "./header.css";
import LogoSection from "../LogoSection/LogoSection";
import Navbar2 from "../Navbar2/Navbar2";

const Header = () => {
	return (
		<header id="header">
			<Navbar2 />
			<LogoSection />
		</header>
	);
};

export default Header;

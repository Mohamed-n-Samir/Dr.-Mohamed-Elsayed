import React from "react";
import "./navbar1.css"
import { useTranslation } from "react-i18next";


const Navbar1 = () => {

    const [t, i18n] = useTranslation();


	return (
		<nav className="navbar1">
			<ul className="container links">
				<li className="link">
					<a href="/#index.html">{t("home")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("vlogs")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("blogs")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("lectures")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("liveBroadcast")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("profile")}</a>
				</li>
				<li className="link">
					<a href="/#index.html">{t("BuyCredit")}</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar1;

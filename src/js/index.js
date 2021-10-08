//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import Home from "./component/home.jsx";
import Ernesto from "./component/Ernesto.jsx";
import Sarah from "./component/Sarah.jsx";
import Maz from "./component/Maz.jsx";
import Abraham from "./component/Abraham.jsx";
import Christian from "./component/Christian.jsx";

//render your react application
ReactDOM.render(
	<>
		<Ernesto />
		<Christian />
		<Sarah />
		<Maz />
		<Abraham />
		<Home />
	</>,

	document.querySelector("#app")
);

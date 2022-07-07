//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "src/styles/index.css";

//import your own components
import { Home } from "src/js/component/home.js";

var countZero = 0;

function counterApp() {
	countZero++;
	const numberZero = "0000000" + countZero;
	var splitNumber = numberZero.slice(-6);

	ReactDOM.render(
		<Home
			props1={splitNumber.charAt(0)}
			props2={splitNumber.charAt(1)}
			props3={splitNumber.charAt(2)}
			props4={splitNumber.charAt(3)}
			props5={splitNumber.charAt(4)}
			props6={splitNumber.charAt(5)}
			counter={countZero}
		/>,

		document.querySelector("#app")
	);
}

//render your react application
setInterval(counterApp, 50);
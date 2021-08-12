import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import './index.css';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// using bootstrap instead 
// import "semantic-ui-css/semantic.min.css";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

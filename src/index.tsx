import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import serverStyleCleanup from 'node-style-loader/clientCleanup'

const render = Component => {
	ReactDOM.hydrate(
		<Router>
			<Component />
		</Router>,
		document.getElementById("root"));
};

if (window) {
	window.onload = () => render(App);
	serverStyleCleanup();
}

if (module.hot) {
	module.hot.accept("./App", () => {
		const NewApp = require("./App").default;
		render(<NewApp />);
	});
}

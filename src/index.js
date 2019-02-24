import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const render = Component => {
	ReactDOM.render(<App />, document.getElementById("root"));
};

window.onload = render;

if (module.hot) {
	module.hot.accept("./App", () => {
		const NewApp = render(require("./App")).default;
		ReactDOM.render(<NewApp />, document.getElementById("root"));
	});
}

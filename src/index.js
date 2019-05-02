import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const render = Component => {
	ReactDOM.render(<Component />, document.getElementById("root"));
};

window.onload = render(App);

if (module.hot) {
	module.hot.accept("./App", () => {
		const NewApp = render(require("./App")).default;
		ReactDOM.render(<NewApp />, document.getElementById("root"));
	});
}

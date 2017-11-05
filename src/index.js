import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
	<div>
		<div className="header-div">
			<h1>Vocabulous.</h1>
		</div>
		<App />
	</div>,
	document.getElementById('global')
);

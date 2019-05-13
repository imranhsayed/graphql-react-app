import React from 'react';
import Logo from './logo.png';
import './Style.css';

class App extends React.Component {
	render() {
		return(
			<div>
				<div className="logo-container">
					<img src={Logo} alt="Logo" className="logo"/>
				</div>
			</div>
		)
	}
}

export default App;

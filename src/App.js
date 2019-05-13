import React from 'react';
import Logo from './logo.png';
import './Style.css';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo";

const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

class App extends React.Component {
	render() {
		return(
			<ApolloProvider client={client}>
				<div className="container">
					<div className="logo-container">
						<img src={Logo} alt="Logo" className="logo"/>
					</div>
				</div>
			</ApolloProvider>
		)
	}
}

export default App;

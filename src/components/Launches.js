import React from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number,
			mission_name,
			launch_date_local,
			launch_success
		}
	}
`;

class Launches extends React.Component {
	render() {
		return(
			<div></div>
		);
	}
}

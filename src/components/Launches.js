import React from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
import Loader from '../loader.gif';

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
			<React.Fragment>
				<h1 className="display-4 my-3">Launches</h1>
				<MissionKey/>
				<Query query={LAUNCHES_QUERY}>
					{ ( {loading, error, data} ) => {
						if ( loading ) {
							return <img className="launch-loader" src={Loader} alt="Loader"/>
						}
						if ( error ) {
							console.warn( error );
						}
						console.warn( data );
						return <LaunchItem data={data}/>
					} }
				</Query>
			</React.Fragment>
		);
	}
}

export default Launches;

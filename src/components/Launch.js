import React from 'react';
import gql from 'graphql-tag';
import { Query } from "react-apollo";
import Loading from '../loader.gif';
import { Link } from "@reach/router";

const LAUNCH_QUERY = gql`
	query LaunchQuery( $flight_number: Int! ) {
		launch( flight_number: $flight_number ) {
			flight_number
			mission_name
			launch_year
			launch_success
			launch_date_local,
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	} 
`;

class Launch extends React.Component {
	render() {
		const flight_number = parseInt( this.props.id );

		return(
			<React.Fragment>
				<Query query={ LAUNCH_QUERY } variables={{ flight_number }}>
					{
						( { loading, error, data } ) => {
							// Show loader until the request is complete.
							if ( loading ) {
								return <img className="launch-loader" src={Loading} alt="Loader"/>
							}
							// If error.
							if ( error ) {
								console.warn( error );
							}

							const { mission_name, flight_number, launch_year, launch_success, rocket } = data.launch;

							// Display Data
							return (
								<div>
									{/* Mission name */}
									<h1 className="display-4 my-3">
										<span className="text-dark">Mission: { mission_name }</span>
									</h1>

									{/*Launch Details*/}
									<h4 className="mb-4">Launch Details: </h4>
									<ul className="list-group">
										<li className="list-group-item">Flight Number: { flight_number }</li>
										<li className="list-group-item">Launch Year: { launch_year }</li>
										<li className="list-group-item">
											Launch Successful:
											{
												launch_success
												? <span className="text-success"> Yes</span>
												: <span className="text-danger"> No</span>
											}
										</li>
										<li className="list-group-item">Flight Number: { flight_number }</li>
									</ul>

									{/* Rocket Details */}
									<h4 className="mt-4 mb-4">Rocket Details: </h4>
									<ul className="list-group">
										<li className="list-group-item">Rocket ID: { rocket.rocket_id }</li>
										<li className="list-group-item">Rocket Name: { rocket.rocket_name }</li>
										<li className="list-group-item">Rocket Type: { rocket.rocket_type }</li>
									</ul>

									<hr/>

									{/* Back to Home Button */}
									<Link to="/" className="btn btn-secondary mb-5">Back</Link>
								</div>
							)
						}
					}
				</Query>
			</React.Fragment>
		);
	}
}
export default Launch;

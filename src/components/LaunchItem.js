import React from 'react';

export default ( props ) => {
	const { data } = props;

	return (
		<React.Fragment>
			{ data.launches.map( item => {
				console.warn( item.flight_number );
				return (
					<div key={item.flight_number} className="card card-body mb-3">
						<div className="col-md-9">
							<h4>{item.flight_number}.
								Mission:
								<span className={ item.launch_success ? 'text-success' : 'text-danger' } > {item.mission_name}</span>
							</h4>
							<p className="text-muted">Date: {item.launch_date_local}</p>
						</div>
						<div className="col-md-3">
							<button className="btn btn-secondary">Details</button>
						</div>
					</div>
				)
			} ) }
		</React.Fragment>
	)
}

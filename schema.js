const { GraphQLObjectType, GraphQLInt } = require( 'graphql' );

// Launch type
const LaunchType = new GraphQLObjectType({
	name: 'Launch',
	fields: () => ({
		flight_number: { type: GraphQLInt },
	})
});

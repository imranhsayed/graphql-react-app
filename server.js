const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require( 'cors' );
const MyGraphQLSchema = require( './schema' );

const app = express();

// Allow Cross origin
app.use( cors() );

app.use('/graphql', graphqlHTTP({
	schema: MyGraphQLSchema,
	graphiql: true
}));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log( `Server started on Port ${PORT}` ));

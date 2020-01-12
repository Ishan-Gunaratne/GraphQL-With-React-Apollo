const { buildSchema } = require("graphql");

const schema = buildSchema(`

    type rocket {
        rocket_id : String
        rocket_name : String
        rocket_type : String

}
    type launch {
        flight_number : Int
        mission_name : String
        launch_year : String
        launch_date_local: String
        launch_success: Boolean
        rocket:rocket
        
    }

        type Query {
            launches : [launch]
        }

    `);

module.exports = schema;

// const LaunchType = new GraphQLObjectType({
//   name: "Launch",
//   fields: () => ({
//     flight_number: { type: GraphQLInt },
//     mission_name: { type: GraphQLString },
//     launch_year: { type: GraphQLString },
//     launch_date_local: { type: GraphQLString },
//     launch_success: { type }
//   })
// });

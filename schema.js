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

const express = require("express");
const garphQLHTTP = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const axios = require("axios");
const app = express();

const resolvers = {
  launches: () => {
    return axios
      .get("https://api.spacexdata.com/v3/launches")
      .then(res => res.data);
  }
};
app.use(cors());
app.use(
  "/graphql",
  garphQLHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers
  })
);

const PORT = process.env.PORT || 4200;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

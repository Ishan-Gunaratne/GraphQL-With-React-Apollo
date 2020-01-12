const express = require("express");
const garphQLHTTP = require("express-graphql");
const schema = require("./schema");
const axios = require("axios");
const app = express();
const resolvers = {
  launches: () => {
    return axios
      .get("https://api.spacexdata.com/v3/launches")
      .then(res => res.data);
  }
};

app.use(
  "/graphql",
  garphQLHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers
  })
);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

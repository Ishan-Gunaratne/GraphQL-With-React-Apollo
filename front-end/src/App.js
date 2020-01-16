import React from "react";
import Launches from "./components/Launches";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import logo from "./logo.jpg";
import "./App.css";

const client = new ApolloClient({
  uri: "http://localhost:4200/graphql"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="Container">
        <img
          src={logo}
          alt="SpaceX"
          style={{ width: 300, display: "block", margin: "auto" }}
        />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;

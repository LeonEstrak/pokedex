import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ConfigProvider from "./Providers/config";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
  headers: ConfigProvider.defaultHeaders,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>GraphQL Support Added</p>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;

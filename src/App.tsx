import React from "react";
import "./App.css";
import Searchbar from "./components/searchbar";
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
          <p>GraphQL Support Added</p>
          <div className="h-screen flex items-center justify-center">
            <Searchbar />
          </div>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;

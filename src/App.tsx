import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import ConfigProvider from "./Providers/config";
import LandingPage from "./pages/LandingPage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
  headers: ConfigProvider.defaultHeaders,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pokemon/:name" element={<PokemonDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

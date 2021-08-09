import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import NewRecipe from "./pages/Create";
import RecipeList from "./components/RecipeList";
import Nav from './components/Nav';
import Profile from './pages/Profile'
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log('graphQLErrors', graphQLErrors);
  }
  if (networkError) {
    console.log('networkError', networkError);
  }
});

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
	uri: "/graphql",
});

const link = ApolloLink.from([errorLink, httpLink]);

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("id_token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(link),
	cache: new InMemoryCache(),
});

function App() {
	return (
    <ApolloProvider client={client}>
      <Router>
        <Container>
          <Nav />
          <Switch>
            <Route exact path="/">
              <RecipeList />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              {/* <Home /> */}
              <RecipeList />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/profile">
              <Profile />
            </Route>
            <Route path="/recipe-list">
              <RecipeList />
            </Route>
            <Route path="/create-recipe">
              <NewRecipe />
            </Route>
          </Switch>
        </Container>
      </Router>
    </ApolloProvider>
  );
}

export default App;
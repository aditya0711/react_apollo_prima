import {setContext} from "apollo-link-context";
import {AUTH_TOKEN} from "../lib/constants";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

const cache = new InMemoryCache();

export const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(AUTH_TOKEN)
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})
export const httpLink = createHttpLink({
  uri: "http://localhost:4000"
});

export const httpClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cache
})
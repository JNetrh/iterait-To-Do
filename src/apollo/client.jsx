/* eslint-disable no-console */
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { split, ApolloLink } from "apollo-link";
import { BatchHttpLink } from "apollo-link-batch-http";
import { getMainDefinition } from "apollo-utilities";
import merge from "lodash/merge";

import { getSavedState, setSavedState } from "./persist";
import { initialState, createResolvers } from "./resolvers";

const cache = new InMemoryCache();

const batchHttpLink = new BatchHttpLink({
  uri: "localhost:3000/graphql"
});

const link = split(({ query }) => {
  const definition = getMainDefinition(query);

  return (
    definition.kind === "OperationDefinition" &&
    definition.operation === "subscription"
  );
}, batchHttpLink);

const appState = merge({}, initialState, getSavedState());

cache.writeData({ data: { appState } });

const apolloClient = new ApolloClient({
  link: ApolloLink.from([link]),
  cache,
  resolvers: createResolvers(
    query => cache.readQuery,
    initialState,
    (state, persistent) => {
      cache.writeData({
        data: { appState: { __typename: "AppState", ...state } }
      });

      if (persistent) {
        setSavedState(state);
      }
    }
  ),
  defaultOptions: {
    query: {
      fetchPolicy: "no-cache"
    },
    watchQuery: {
      fetchPolicy: "no-cache"
    }
  }
});

export default apolloClient;

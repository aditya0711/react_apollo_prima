import React from 'react';
import {LoonaProvider, createLoona} from '@loona/react';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloProvider} from 'react-apollo';

import {Root} from './components/Root';
import {states} from './store';
import {BrowserRouter} from "react-router-dom";
import {httpLink} from "./common/apolloLinks";

const cache = new InMemoryCache();

const loona = createLoona(cache);

const client = new ApolloClient({
  link: loona.concat(httpLink),
  cache,
});

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <LoonaProvider loona={loona} states={states}>
            <Root/>
          </LoonaProvider>
        </ApolloProvider>
      </BrowserRouter>
    );
  }
}

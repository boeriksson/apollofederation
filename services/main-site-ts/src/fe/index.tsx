import ReactDOM from 'react-dom'
import React from 'react'
import Main from './Main.js'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from '@apollo/client'

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
});

function start() {
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(
        <ApolloProvider client={client}>
            <Main/>
        </ApolloProvider>
    );
}

start()
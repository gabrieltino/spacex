import React from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Launches from "./Launches";
import Launch from './Launch';

const client = new ApolloClient({
  uri: '/graphql'
  // uri: 'http://localhost:5000/graphql'
});

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <h5>SpaceX</h5>
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Nav from './components/Nav';
import Login from './pages/Login';
import Signup from './pages/Signup';
import NoMatch from './pages/NoMatch';
import Order from './pages/Order';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from '../src/utils/store';
import Home from './pages/Home';
import Location from './pages/Location';
import About from './pages/About';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/location" component={Location} />
              <Route exact path="/about" component={About} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/cart" component={Cart} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

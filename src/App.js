import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import NoMatch from './components/NoMatch';
import { Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';

const App = () => (
  <>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </>
);

export default App;

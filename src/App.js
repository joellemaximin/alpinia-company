import React from 'react';
import Home from './Components/Home';
import Reference from './Components/Reference';
import Contact from './Components/Contact';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import { Container } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Navigation />
          <Container>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/site/:id' component={Reference} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Container>
      </BrowserRouter>
          

    </div>
  );
}

export default App;

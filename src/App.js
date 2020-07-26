import React from 'react';
import Home from './Components/Home';
import Reference from './Components/Reference';
import Contact from './Components/Contact';
import Sites from './Components/Sites';
import Footer from './Components/Footer'
import { Switch, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

          <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path='/site/:id' component={Reference} />
            <Route exact path="/sites" component={Sites} />
            <Route exact path="/contact" component={Contact} /> */}
          </Switch>
        <Footer/>
      </BrowserRouter>
          

    </div>
  );
}

export default App;

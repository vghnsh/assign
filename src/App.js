import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home.component';
import Cartpg from './Components/CartPage/Cartpg.componet';
import Header from  './Components/Header/Header.scomponent';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/cart'>
        <Header/>
          <Cartpg/>
        </Route>
        <Route path='/'>
          <Header/>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

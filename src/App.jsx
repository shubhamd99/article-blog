import React, { Component } from 'react';


import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import Write from './components/write';
import Article from './components/article';
import CustomBar from './components/navbar';

class App extends Component {
  

  render() {
    return (
      <Router>
        <div>
          <CustomBar />
          <Route exact path="/" component={Home} />
          <Route path="/article" component={Article} />
          <Route path="/write" component={Write} />
        </div>
      </Router>
    );
  }
}

export default App;

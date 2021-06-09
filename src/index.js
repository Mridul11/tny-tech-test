import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import ShowArticleComponent from './components/News/ShowArticleComponent/ShowArticleComponent';

const Component = () =>
  <div className="ui container">
    <Router>
      <HeaderComponent />
      <div style={{ marginTop: "15%" }}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:id" component={ShowArticleComponent} />
      </div>
      <FooterComponent />
    </Router>
  </div>

const appRoot = document.getElementById('app-root');

ReactDOM.render(<Component />, appRoot);

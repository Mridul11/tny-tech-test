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
      <Switch style={{ marginTop: "10%" }}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:title" component={ShowArticleComponent} />
      </Switch>
      <FooterComponent />
    </Router>
  </div>

const appRoot = document.getElementById('app-root');

ReactDOM.render(<Component />, appRoot);

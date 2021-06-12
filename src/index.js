import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';
import ShowArticleComponent from './components/News/ShowArticleComponent/ShowArticleComponent';

const Component = () =>
  <div className="ui container">
    <Router>
      <div style={{ marginTop: "10%" }}>
        <Route path="" component={HeaderComponent} />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/:title" component={ShowArticleComponent} />
        <Route path="" component={ FooterComponent} />
      </div>
    </Router>
  </div>

const appRoot = document.getElementById('app-root');

ReactDOM.render(<Component />, appRoot);

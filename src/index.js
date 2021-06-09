import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/HomePage/HomePage';
import HeaderComponent from './components/Header/HeaderComponent';
import FooterComponent from './components/Footer/FooterComponent';

const Component = () => (
  <div>
    <HeaderComponent />
    <HomePage />
    <FooterComponent />
  </div>
);

const appRoot = document.getElementById('app-root');

ReactDOM.render(<Component />, appRoot);

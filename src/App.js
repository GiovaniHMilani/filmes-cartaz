import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header/'

import Home from './pages/Home/Home';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router>
      <Header />

      <Route path="/" exact component={Home} />

      <GlobalStyle />
    </Router>
  );
}

export default App;
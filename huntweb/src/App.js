import './styles.css';

import Header from './components/header';
import Main from './pages/main';
import React from 'react';
import Routes from './routes';

const App = () => (
  <div className="App">
  <Header/>
  <Routes/>
  </div>
);
  
export default App;

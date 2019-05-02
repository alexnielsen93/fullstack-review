import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import {HashRouter as Router} from 'react-router-dom'
import Navbar from './components/navbar'
import router from './router'

function App() {
  return (
    <Provider store = {store}>
      <Router>
      <Navbar/>
      {router}
      </Router>
    </Provider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // Import necessary components
import Home from './componenets/Pages/Home';
import CategoryPage from './componenets/CategoryPage';
// import { Switch } from 'react-router-dom';
import { Switch } from 'react-router';

const App = () => {
  return (
   <Home/>
  );
};

export default App;

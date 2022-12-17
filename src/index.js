import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import Home from './Home';
import HomePageHeader from './components/HomePageHeader';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePageHeader/>
  </React.StrictMode>
);

//reportWebVitals();

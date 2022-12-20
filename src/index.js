import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './Form';
import Home from './Home';
import HomePageHeader from './components/HomePageHeader';
import HomePageGuide from './components/HomePageGuide';
import HomePageFooter from './components/HomePageFooter';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePageHeader/>
    <HomePageGuide/>
    <Form/>
    <HomePageFooter/>
  </React.StrictMode>
);

//reportWebVitals();

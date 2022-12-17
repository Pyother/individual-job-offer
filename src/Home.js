import React from 'react';
import './App.css';
import Form from './Form';
import HomePageHeader from './components/HomePageHeader';

import { Container, Row, Col } from 'react-bootstrap';

window.addEventListener('scroll', function() {
    const scroolElement = this.document.getElementById("header-container");
    this.document.getElementById("header-1").style = "position: sticky; top: 0vh; transform: translateY(0, -50%);";
});

export default function Home() {
    return (
        <div className="homepage">
            <div className="context-container">
                
            </div>
            <div className="header-container">
                
            </div> 
            <div className="footer-container" >

            </div>
        </div>
    );
}



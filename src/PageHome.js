import React from 'react';
import Form from './Form';
import PageHomeHeader from './components/PageHomeHeader';
import PageHomeGuide from './components/PageHomeGuide';
import PageHomeFooter from './components/PageHomeFooter';

window.addEventListener('scroll', function() {
    const scroolElement = this.document.getElementById("header-container");
    this.document.getElementById("header-1").style = "position: sticky; top: 0vh; transform: translateY(0, -50%);";
});

export default function Home() {
    return (
        <div>
            <PageHomeHeader/>
            <PageHomeGuide/>
            <Form/>
            <PageHomeFooter/>
        </div>
    );
}



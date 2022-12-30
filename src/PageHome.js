import React from 'react';
import Form from './Form';
import PageHomeHeader from './components/PageHomeHeader';
import PageHomeGuide from './components/PageHomeGuide';
import PageHomeFooter from './components/PageHomeFooter';

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



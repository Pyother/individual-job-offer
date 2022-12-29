import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PageHome";
import Database from "./PageDatabase";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/database" element={<Database/>} />
            </Routes>
        </Router>
    );
}

export default App;
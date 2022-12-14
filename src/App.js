import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PageHome";
import Database from "./PageDatabase";
import Admin from "./PageAdmin";
import Editor from "./PageEditor";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/database" element={<Database/>} />
                <Route exact path="/admin" element={<Admin/>} />
                <Route exact path="/editor" element={<Editor/>} />
            </Routes>
        </Router>
    );
}

export default App;
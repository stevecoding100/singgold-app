import React from "react";
import Home from "./screen/Home";
import Courses from "./screen/Courses";
import Mentors from "./screen/Mentors";
import About from "./screen/About";

import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    );
}

export default App;

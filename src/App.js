import React from "react";
import Home from "./screen/Home";
import Courses from "./screen/Courses";
import Cart from "./screen/Cart";
import About from "./screen/About";

import { Routes, Route } from "react-router-dom";
import { ShopContextProvider } from "./context/ShopProvider";

function App() {
    return (
        <>
            <ShopContextProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
            </ShopContextProvider>
        </>
    );
}

export default App;

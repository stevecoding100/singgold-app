import React from "react";
import Category from "../components/Category";
import ChooseTopic from "../components/ChooseTopic";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import PopularCourses from "../components/PopularCourses";
import Review from "../components/Review";

function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Category />
            <PopularCourses />
            <ChooseTopic />
            <Review />
            <Cta />
            <Newsletter />
            <Footer />
        </>
    );
}

export default Home;

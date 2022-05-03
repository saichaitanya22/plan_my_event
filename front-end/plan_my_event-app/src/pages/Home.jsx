import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
    return (
        <div>
            <NavBar />
            <Slider />
            <Categories />
            <Products/>
            <Footer/>
        </div>
    );
};

export default Home;
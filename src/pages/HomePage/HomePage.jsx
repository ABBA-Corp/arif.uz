import React from "react";
import "./HomePage.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Category from "./components/Category/Category";
import Service from "./components/Service/Service";
import Content from "./components/Content/Content";
import Slider from "./components/Slider/Slider";
import Rating from "./components/Rating/Rating";
import Section from "./components/Section/Section";
import Aside from "./components/Aside/Aside";
import About from "./components/About/About";
import Form from "./components/Form/Form";
import Footer from "../../components/Footer/Footer";
import Bottom from "../../components/Bottom/Bottom";
import Number from "./components/Number/Number";
import Contact from "./components/Contact/Contact";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage-list">
        <Navbar />
        <Header />
      </div>
      <Category />
      <Service />
      <Content />
      <Slider />
      <Rating />
      <Number />
      <Section />
      <Aside />
      <About />
      <Contact />
      <Form />
      <Footer />
      <Bottom />
    </div>
  );
};

export default HomePage;

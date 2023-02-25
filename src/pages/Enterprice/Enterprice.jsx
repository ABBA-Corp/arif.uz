import React from "react";
import Nav from "../../components/Nav/Nav";
import Navbar from "../../components/Navbar/Navbar";
import NewFooter from "../../components/NewFooter/NewFooter";
import Footer from "../Footer/Footer";
import Catalog from "./components/Catalog/Catalog";
import "./Enterprice.css";

const Enterprice = () => {
  return (
    <div className="enterprice">
      <div className="meetingpage-navbar">
        <Navbar />
      </div>
      <Nav />
      <Catalog />
      <NewFooter />
      <Footer />
    </div>
  );
};

export default Enterprice;

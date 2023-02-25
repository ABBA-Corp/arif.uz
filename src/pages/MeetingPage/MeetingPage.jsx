import React from "react";
import Nav from "../../components/Nav/Nav";
import Navbar from "../../components/Navbar/Navbar";
import NewFooter from "../../components/NewFooter/NewFooter";
import Footer from "../Footer/Footer";
import Meeting from "./components/Meeting/Meeting";
import "./MeetingPage.css";

const MeetingPage = () => {
  return (
    <div className="meetingpage">
      <div className="meetingpage-navbar">
        <Navbar />
      </div>
      <Nav />
      <Meeting />
      <NewFooter />
      <Footer />
    </div>
  );
};

export default MeetingPage;

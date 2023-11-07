import React from "react";
import web from "../images/c-7.png"
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () =>{
    return (
        <>
         <Common
          name="Grow your Buisness With" 
          imgsrc={web}
          visit="service"
          btname="Get Started"/>
        </>
    )
};

export default Home;
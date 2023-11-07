import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/c-9.png"
import Common from "./Common";
const About = () =>{
    return(
        <>
          <Common 
           name="Welcome to About page" 
           imgsrc={web}
           visit="/contact"
           btname="Contact Now"/>
        </>
    )
}

export default About;
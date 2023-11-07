import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Home from "./Home";
import { Route,Routes, } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "./Navbar";


const App = () =>{
  return(
    <>
    <Navbar/>
   <Routes>
    <Route exact path="/" Component={Home}/>
    <Route exact path="/service" Component={Service}/>
    <Route exact path="/about" Component={About}/>
    <Route exact path="/contact" Component={Contact}/>
    </Routes>
   
    </>
  )
};
export default App



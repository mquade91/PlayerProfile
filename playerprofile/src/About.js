import React, { Component } from "react";

import "./About.css";
import Slide0 from "./Slide0";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

class About extends Component {
   
    render() {
        console.log("About");
        console.log(this.props.currentSlide);
         switch (this.props.currentSlide) {
            case 0:
                return (
                    <Slide0/>
                    );
            case 1:
                return (
                <Slide1/>
                );
            case 2:
                return (
                    <Slide2/>
                    );
            case 3:
                return (
                    <Slide3/>
                    );
            default: return (
                    <Slide3/>
                );
        }
    }
}
export default About;

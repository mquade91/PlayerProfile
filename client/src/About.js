import React, { Component } from "react";

import "./About.css";
import Slide100 from "./slides/Slide100";
import Slide200 from "./slides/Slide200";
import Slide300 from "./slides/Slide300";
import Slide400 from "./slides/Slide400";
import Slide500 from "./slides/Slide500";
import Slide600 from "./slides/Slide600";
import Slide700 from "./slides/Slide700";
import Slide800 from "./slides/Slide800";

class About extends Component {
   
    render() {

         switch (this.props.slide) {
            case 100:
                return (
                    <Slide100/>
                    );
            case 200:
                return (
                <Slide200/>
                );
            case 300:
                return (
                <Slide300/>
                );
            case 400:
                return (
                    <Slide400/>
                    );
            case 500:
                return (
                    <Slide500/>
                    );
            case 600:
                return (
                    <Slide600/>
                    );
            case 700:
                return (
                    <Slide700/>
                    );
            default: return (
                    <Slide800/>
                );
        }
    }
}
export default About;

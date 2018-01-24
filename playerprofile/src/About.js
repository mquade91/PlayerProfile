import React, { Component } from "react";

import "./About.css";
import Present0 from "./Present0";
import Present1 from "./Present1";
import Present2 from "./Present2";
import Present3 from "./Present3";

class About extends Component {
    state = {
        centerSection: 0
    };
      
    mattPage = () => {
            console.log("Matt")
            this.setState.centerSection = 1;
        };
    eddiePage = () => {
            console.log("Eddie")
            this.setState.centerSection = 2;
        };
    michaelPage = () => {
            console.log("Michael")
            this.setState.centerSection = 3;
        };

    render() {
        if(this.state.centerSection === 1) {
        return (
        <Present1/>
        );
        } else {
            if(this.state.centerSection === 2) {
            return (
            <Present2/>
            );
            } else {
                if(this.state.centerSection === 3) {
                    return (
                    <Present3/>
                    );
                } else {
                    return (
                        
                        <Present0/>
                        );
                    }
                }
            }   
        }
    
}
export default About;

import React, { Component } from "react";

import "./About.css";

class About extends Component {

    render() {
            return (
            <div className="wrapper">
                <div className="left">
                    <div className="leftTop">
                        <p>Our Leadership</p>
                    </div>
                    <div className="Chas">
                        <img className="individualPhoto" id="chasPhoto" src="../assets/images/Chas.jpg" alt="Chas Campbell"/>
                        <p>Chas Campbell<br/>Marketing and Sales</p>
                    </div>
                    <div className="Eddie">
                        <img className="individualPhoto" id="eddiePhoto" src="../assets/images/Eddie.png" alt="Eddie Pedersen"/>
                        <p>Eddie Pedersen<br/>Information Technology</p>
                    </div>
                    <div className="Matt">
                        <img className="individualPhoto" id="mattPhoto" src="../assets/images/Matt.png" alt="Matthew Quadw"/>
                        <p>Matthew Quade<br/>General Manager</p>
                    </div>
                    <div className="Michael">
                        <img className="individualPhoto" id="michaelPhoto" src="../assets/images/Michael.png" alt="Michael Sloan"/>
                        <p>Michael Sloan<br/>Client Accounts</p>
                    </div>
                </div>
                <div className="center">
                    <h2>SmartScout - The Concept</h2>
                </div>
                <div className="right">
                    <div className="rightTop">
                        <p>Our Offices</p>
                    </div>
                    <div className="officePhoto">
                        <img id="officePicture" src="../assets/images/uncc-smaller.png" alt="SmartScout Office Building"/>
                    </div>
                    <div className="officeInfo">
                    <br></br>
                    <p>320 E 9th St Charlotte, NC 28202</p>
                    <p>At the corner of 9th and Brevard</p>
                    <p>Beside First Ward Park.</p>
                    <p>Main switchboard (704) 687-8902</p>
                    <p>email: info@smartscout.com</p>
                    </div>
                </div>
            </div>
        );
}
}
export default About;

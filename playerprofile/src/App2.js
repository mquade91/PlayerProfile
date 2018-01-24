import React from "react";

import About from "./About";

const App = () => (
   <div className="wrapper">
            <div className="left">
                <div className="leftTop">
                    <h5>Our Leadership</h5>
                </div>
                <div className="individualPhotos">
                    <div className="Matt">
                        <img className="individualPhoto" id="mattPhoto" src="../assets/images/Matt.png" alt="Matthew Quade" 
                        onClick={this.mattPage}/>
                        <p>General Manager<br/>Matthew Quade</p>
                    </div>
                    <div className="Eddie">
                        <img className="individualPhoto" id="eddiePhoto" src="../assets/images/Eddie.png" alt="Eddie Pedersen"/>
                        <p>Information Technology<br/>EddiePedersen</p>
                    </div>
                    <div className="Michael">
                        <img className="individualPhoto" id="michaelPhoto" src="../assets/images/Michael.png" alt="Michael Sloan"/>
                        <p>Client Accounts<br/>Michael Sloan</p>
                    </div>
                    <div className="Chas">
                        <img className="individualPhoto" id="chasPhoto" src="../assets/images/Chas.jpg" alt="Chas Campbell"/>
                        <p>Marketing and Sales<br/>Chas Campbell</p>
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="centerTop">
                    <h3>SmartScout</h3>
                <About/>
                </div>
            </div>
            <div className="right">
                <div className="rightTop">
                    <h5>Our Offices</h5>
                </div>
                <div className="officePhoto">
                    <img id="officePicture" src="../assets/images/uncc-smaller.png" alt="SmartScout Office Building"/>
                </div>
                <div className="officeInfo">
                <br></br>
                    <p>
                        320 E 9th St
                        Charlotte, NC 28202<br/>
                        At the corner of 9th and Brevard
                        Beside First Ward Park.<br/>
                        Main Switchboard<br/>
                        (704) 687-8902<br/>
                        email: info@smartscout.com
                    </p>
                </div>
            </div>
            <div className="rightSpacer">
                
            </div>
        </div>
        // End of wrapper
    );

export default App;
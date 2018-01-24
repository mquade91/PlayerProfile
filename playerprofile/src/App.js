import React, { Component } from "react";

import About from "./About";
import Panel from "./Panel";
class App extends Component {
    state = {
        currentSlide: 0
    }
    
    handlePanelClick = (id) => {
        console.log("App");
        console.log(id);
        switch (id) {
            case "mattPhoto":
                this.setState({currentSlide: 1});
                    break;
            case "eddiePhoto":
                this.setState({currentSlide: 2});
                break;
            case "michaelPhoto":
                this.setState({currentSlide: 3});
                break;    
            case "chasPhoto":
                this.setState({currentSlide: 0});
                break;
            default: this.setState({centerSection: 0});
            console.log("Bad id");
        }
        console.log(this.state.currentSlide);
    }
     render() {
         return (
            <div className="wrapper">
                <div className="left">
                    <div className="leftTop">
                        <h5>Our Leadership</h5>
                    </div>
                    <div className="individualPhotos">
                        <Panel handlePhotoClick = {this.handlePanelClick}/>
                    </div>
                </div>
                <div className="center">
                    <div className="centerTop">
                        <h3>SmartScout</h3>
                    <About slide = {this.state.currentSlide}/>
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
    }
}     
export default App;
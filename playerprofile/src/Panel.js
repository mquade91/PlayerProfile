import React, { Component } from "react";
import pictures from "./pictures.json"; 
import Picture from "./Picture";

class Panel extends Component {
    
render() {
        
        return (
            <div>
                <div className="individualPhotos">
                    {pictures.map(currentElement => (
                    <Picture
                        id={currentElement.id}
                        key={currentElement.id}
                        className={currentElement.className}
                        src={currentElement.src}
                        alt={currentElement.alt}
                        p1={currentElement.p1}
                        p2={currentElement.p2}
                        handlePhotoClick = {this.props.handlePhotoClick}
                    />
                    ))}
                </div>
            </div>
        );
    }
}
export default Panel;
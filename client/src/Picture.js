import React from "react";

// Create a picture component to be used to load into the panel.
// Each picture needs to be clickable.

 const Picture = (props) => (
    <div className={props.className}>
        <img className="individualPhoto" id={props.id} src={props.src} alt={props.alt} onClick={() => {
        props.handlePhotoClick(props.id)}}/>
        <p>{props.p1}</p>
        <p>{props.p2}</p>
    </div>
                
 );
 
export default Picture;
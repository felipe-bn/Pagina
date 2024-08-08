import React from "react";
import '../Assets/Styles/ServicesComponentSyles.css'
function ServicesComponent(props){
    return(
        <div className="service-card">
            <img src={props.src} alt={props.alt} className="service-img"></img>
            <div className="content">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default ServicesComponent;
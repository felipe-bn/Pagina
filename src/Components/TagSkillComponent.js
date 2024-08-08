import React from "react";
import '../Assets/Styles/SkillPageStyles.css'
function TagSkillComponent(props){
    return(
        <div className="skill-cont">
            <span>{props.skill}</span>
        </div>
    )
}

export default TagSkillComponent;
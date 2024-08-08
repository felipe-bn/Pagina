import React from "react";
import '../Assets/Styles/SkillPageStyles.css';
import TagSkillComponent from "../Components/TagSkillComponent";
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function SkillPage(){
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
      });
    const right = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(-20px)',
        config: { duration: 800 },
      });
    return(
        <main className="main" id="skill">
            <section className="skill-container">
                <animated.h1 style={right} ref={ref}>My Skills as a Developer:</animated.h1>
                <div className="skills">
                    <TagSkillComponent skill="Java" ></TagSkillComponent>
                    <TagSkillComponent skill="Python"></TagSkillComponent>
                    <TagSkillComponent skill="Mysql"></TagSkillComponent>
                    <TagSkillComponent skill="HTML5"></TagSkillComponent>
                    <TagSkillComponent skill="Css"></TagSkillComponent>
                    <TagSkillComponent skill="React"></TagSkillComponent>
                    <TagSkillComponent skill="Angular"></TagSkillComponent>
                    <TagSkillComponent skill="Spring"></TagSkillComponent>
                    <TagSkillComponent skill="Django"></TagSkillComponent>
                    <TagSkillComponent skill="Postman"></TagSkillComponent>
                    <TagSkillComponent skill="Figma"></TagSkillComponent>
                    <TagSkillComponent skill="Star UML"></TagSkillComponent>
                </div>
            </section>
        </main>
    );
}

export default SkillPage;
import React from "react";
import '../App.css'
import '../Assets/Styles/DescriptionPageStyles.css'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function DescriptionPage(props){
    const handleButtonClick = () => {
      console.log(props.projectsRef.current);
      if (props.projectsRef.current) {
        props.projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
      });
    const left = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(20px)',
        config: { duration: 800 },
      });
    const right = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateX(0px)' : 'translateX(-20px)',
        config: { duration: 800 },
      });
    
    const DescargarCv = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/CV.pdf`; 
        link.download = 'Felipe_Padros_CV.pdf'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

    }
    return(
        <main className="main" id="description">
            <section className="description-cont">
            <animated.h1 style={left} ref={ref}>I'm Felipe Padrós</animated.h1>
            <animated.p style={right} ref={ref}>I am currently studying software development at UADE. Im from Buenos Aires Argentina,
                and i love play Rugby and write code.
            </animated.p>
            <animated.p style={left} ref={ref}>Wanna see my Projects??</animated.p>
            <animated.p style={right} ref={ref}>Well!! Slide or click this button to redirect</animated.p>
            <div className="btns-cont">
            <button className="btn" onClick={handleButtonClick}>Projects</button>
            <button className="btn" onClick={DescargarCv}>Download CV</button>
            </div>
            </section>

        </main>
    );
}

export default DescriptionPage;

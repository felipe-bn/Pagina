import React from "react";
import '../Assets/Styles/HomeComponentStyles.css'
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

function HomeComponent(){
    const { ref, inView } = useInView({
        triggerOnce: true, 
        threshold: 0.1, 
      });
    const top= useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(-20px)',
        config: { duration: 800 }
      });
    const down= useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(20px)',
        config: { duration: 800 }
      });
    return(
        <main className="container">
            <animated.div className="job" id="software" style={top} ref={ref}>
                <span>S</span>
                <span>o</span>
                <span>f</span>
                <span>t</span>
                <span>w</span>
                <span>a</span>
                <span>r</span>
                <span>e</span>
            </animated.div>            
            <animated.div className="job" id="developer" style={down} ref={ref}>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
            </animated.div>
        </main>
    );
}

export default HomeComponent;
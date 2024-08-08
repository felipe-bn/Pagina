import React, { useRef } from 'react';
import './App.css';
import HomePage from './Pages/HomePage';
import ContactButtonsComponent from './Components/ContactButtonsComponent';
import DescriptionPage from './Pages/DescriptionPage';
import ServicesPage from './Pages/ServicesPage';
import SkillPage from './Pages/SkillsPage';
import ProjectsPage from "./Pages/ProjectsPage"

function App() {
  const projectsRef = useRef(null);
  return (
    <div className="App">
      <HomePage></HomePage>
      <DescriptionPage projectsRef={projectsRef}></DescriptionPage>
      <ServicesPage></ServicesPage>
      <ContactButtonsComponent></ContactButtonsComponent>
      <SkillPage></SkillPage>
      <ProjectsPage ref={projectsRef}></ProjectsPage>
      
    </div>
  );
}

export default App;

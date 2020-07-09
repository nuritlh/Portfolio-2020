import React from 'react';

const Resume = () => {

  const Indeni = () => {
    return (
      <div key="indeni"><h3>Indeni - Security Infrastructure Automation</h3>
        <p className="info">Full-Stack Developer<span>&bull;</span> <em className="date">2019-Present</em></p>
        <ul>
          <li>Design new and improve existing features in our automation frameworks.</li>
          <li>Maintain high quality code to allow focusing on new development, keep it up to date with the new
            technologies and covered by solid unit and integration tests.</li>
          <li>Support for our offerings, communicate best-practices and usage guidelines according to the
            development groups methodologies.</li>
          <li>Work both autonomously and collaboratively across disciplines with Product, UX Designers, QA
            Engineers, and Developers.</li>
        </ul>
      </div>
    )
  };

  const ZoomIn = () => {
    return (
      <div key="indeni"><h3>Zoomin Software (SaaS)</h3>
        <p className="info">Front-end Developer<span>&bull;</span> <em className="date">2018-2019</em></p>
        <ul>
          <li>Customized knowledge portal solution for big scale software and hardware companies.</li>
          <li>Practice of producing HTML, CSS using React framework for Web Applications.</li>
          <li>Translated design team’s UX wireframes and mockups into responsive, interactive features.</li>
          <li>Lead big scale client’s projects (for Dell, Intel, McAfee, Mastercard). Worked closely with the
            customer on scope, requirements, timelines and implemented the product from scratch to
            production.</li>
          <li>Implemented functionality in JavaScript using React, PWA and offline first strategy.</li>
          <li>Work with senior developer to manage large, complex design projects for clients.</li>
        </ul>
      </div>
    )
  };

  const Mellanox = () => {
    return (
      <div key="indeni"><h3>Mellanox Technologies</h3>
        <p className="info">Project Management<span>&bull;</span> <em className="date">2015-2018</em></p>
        <ul>
          <li>Information Project Management for all manufacturing operations units.</li>
          <li>Improving processes, identifying problems, defining work methodology, tools and methods.</li>
          <li>Set customer requirements, system selection (internal, external requirements of suppliers,
            customers, employees). QA for internal & custom systems/tools.</li>
          <li>Active member of a Mellanox’s process optimization group. A highly experienced managers and
            decision team. The Group is responsible for determining operational models and assure readiness
            for scale in order to support growth along with supply chain complexity, different geographies,
            customer special requirements and new challenges</li>
        </ul>
      </div>
    )
  };

  const Ruppin = () => {
    return (
      <div key="Ruppin">
        <h3>Ruppin Academic Center</h3>
        <p className="info">Bachelor of Science – BS<span>&bull;</span><em className="date">2011-2015</em></p>
        <p>Industrial Engineering, Major in Information Systems</p>
      </div>
    )
  };

  const Codding = () => {
    return (
      <div key="Ruppin">
        <h3>Coding-Academy</h3>
        <p className="info">Certificate<span>&bull;</span><em className="date">2018</em></p>
        <p>An intensive coding boot-camp (540 hours) that qualifies Front-End developers </p>
      </div>
    )
  };

  const Skills = () => {
    return(
      <div>
        <span style={{ padding: 20, fontSize: 20 }}>React/Redux</span>
        <span style={{ padding: 20, fontSize: 20 }}>Vue/Vuex</span>
        <span style={{ padding: 20, fontSize: 20 }}>HTML5/CSS3</span>
        <span style={{ padding: 20, fontSize: 20 }}>JavaScript</span>
        <span style={{ padding: 20, fontSize: 20 }}>TypeScript</span><br/><br/>
        <span style={{ padding: 20, fontSize: 20 }}>Jest/Enzyme</span>
        <span style={{ padding: 20, fontSize: 20 }}>NodeJs</span>
        <span style={{ padding: 20, fontSize: 20 }}>MySQL</span>
        <span style={{ padding: 20, fontSize: 20 }}>MongoDB</span>
        <span style={{ padding: 20, fontSize: 20 }}>Git/Mercirial</span>
      </div>
    )
  };

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>
          <div className="nine columns main-col">
            <Indeni/>
            <ZoomIn/>
            <Mellanox/>
          </div>
        </div>

      <div className="row education">
         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 <Ruppin/>
                 <Codding/>
               </div>
            </div>
         </div>
      </div>

      <div className="row skill">
         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>
         <div className="nine columns main-col">
				<div className="bars">
				   <ul className="skills">
					  <Skills/>
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
};

export default Resume;

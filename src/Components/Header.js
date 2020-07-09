import React  from 'react';
import ParticlesBg  from "particles-bg";

const  Header = () => {
  const name = 'I\'M NURIT LEVI';
  const description = `Full-stack Developer, Passionate about technology, Striving to be the best, Independent in my doing & thinking.
        Experience in develop an efficient, reusable, and high-quality code with unit tests. Implementing client requirements,
        Work closely with Product and Lead tasks towards execution.
        Outgoing and detail-oriented, I am proficient at building and maintaining professional relationships.`;
  const LinkedIn = 'https://www.linkedin.com/in/nurit-levi-0308392b/';
  const github = 'https://github.com/nuritlh';

    return (
      <header id="home">
      <ParticlesBg type="circle" bg={true} />
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
        <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>
       <ul id="nav" className="nav">
          <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
          <li><a className="smoothscroll" href="#about">About</a></li>
         <li><a className="smoothscroll" href="#resume">Resume</a></li>
          <li><a className="smoothscroll" href="#portfolio">Works</a></li>
       </ul>
      </nav>
      <div className="row banner">
       <div className="banner-text">
          <h1 className="responsive-headline">{name}</h1>
          <h3>{description}.</h3>
          <hr />
          <ul className="social">
             <a href={LinkedIn} className="button btn linkedin-btn" target="_blank"><i className="fa fa-linkedin"/>LinkedIn</a>
             <a href={github} className="button btn github-btn" target="_blank"><i className="fa fa-github" />GitHub</a>
          </ul>
       </div>
      </div>
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>
   </header>);
};

export default Header;

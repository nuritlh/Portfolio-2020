import React from 'react';
import ReactGA from 'react-ga';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Portfolio from './Components/Portfolio';

const App = () => {
  ReactGA.initialize('UA-110570651-1');
  ReactGA.pageview(window.location.pathname);

  return (
    <div className="App">
        <div>
          <Header />
          <About />
          <Resume />
          <Portfolio />
          <Footer />
        </div>
    </div>
  );
};

export default App;

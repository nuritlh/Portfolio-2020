import React from 'react';

const Portfolio = () => {
  const allProjects = [
    {
      image: 'travel.png',
      title: 'TravelMaker',
      url: 'https://travelmaker18.herokuapp.com/#/',
      category: 'Social media for travelers create with Vuex'
    },
    {
      image: 'notes_email.png',
      title: 'Email & Notes',
      url: 'https://nuritlh.github.io/Appsus/#/',
      category: 'Email box and note keeper reate with Vuex'
    },
    {
      image: 'image_gallery.png',
      title: 'Image gallery',
      url: 'https://nuritlh.gitlab.io/promote-gallery-exam/',
      category: 'Image gallery create with react'
    },
    {
      image: 'memory_game.png',
      title: 'Memory Game',
      url: 'https://travelmaker18.herokuapp.com/#/',
      category: 'Memory math game create with react'
    },
    {
      image: 'user_matches.png',
      title: 'User Matches Game',
      url: 'https://users-match.herokuapp.com/',
      category: 'User Matches Game with math calculations create with react'
    },
    {
      image: 'portfolio_old.png',
      title: 'Portfolio (old)',
      url: 'https://young-river-46779.herokuapp.com/#/',
      category: 'Portfolio create with Vue'
    }
  ];

  const projects = allProjects.map(function (projects) {
    const projectImage = 'images/portfolio/' + projects.image;

    return (
      <div key={projects.title} className="columns portfolio-item">
        <div className="item-wrap">
          <a href={projects.url} title={projects.title}>
            <img alt={projects.title} src={projectImage} />
            <div className="overlay">
              <div className="portfolio-item-meta">
                <h5>{projects.title}</h5>
                <p>{projects.category}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    )
  });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
};

export default Portfolio;

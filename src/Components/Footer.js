import React from 'react';


const Footer = () => {
    const social = [
      {
        name: 'facebook',
        url: 'https://www.facebook.com/nurit.hevroni',
        className: 'fa fa-facebook'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/nurit-levi-0308392b/',
        className: 'fa fa-linkedin'
      },
      {
        name: 'github',
        url: 'https://github.com/nuritlh',
        className: 'fa fa-github'
      },
    ];

  const networks = social.map(function(network){
    return <li key={network.name}><a href={network.url} target="_blank"><i className={ network.className }/></a></li>
  });

    return (
      <footer>
       <div className="row">
          <div className="twelve columns">
             <ul className="social-links">
                {networks}
             </ul>
          </div>
          <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open"/></a></div>
     </div>
  </footer>
    );
};

export default Footer;

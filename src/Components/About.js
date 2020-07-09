import React from 'react';

const About = () => {

  const profilepic= 'images/nurit_pic.jpeg';
  const name = 'Nurit Levi';
  const phone = '050-4-995-755';
  const address = 'Israel, Tel-Aviv';
  const email = 'nuritlh@gmail.com';
  const resume = 'https://drive.google.com/file/d/12xaTM4rVZhHC6a4m359hspcYt8xG27P5/view?usp=sharing';
  const bio = `I am a young and ambitious Full-Stack Developer with 2 years experience, focused on front-end development,
  building amazing web applications with ReactJs and NodeJs.
  I am always looking to improve my software and project management skills because I like to be up-to-date with the latest technologies.
  Personally I think programming is about writing code using your brain and I also consider testing and code reviews to be very important areas on every project.`;

    return (
      <section id="about">
        <div className="row">
           <div className="three columns">
              <img className="profile-pic"  src={profilepic} alt="Nordic Giant Profile Pic" />
           </div>
           <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>{bio}</p>
              <div className="row">
                 <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                       <span>{name}</span><br/>
                       <span>{address}</span><br/>
                       <span>{phone}</span><br/>
                       <span>{email}</span>
                    </p>
                 </div>
                 <div className="columns download">
                    <p>
                       <a href={resume} target="_blank" className="button"><i className="fa fa-download"/>Download Resume</a>
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </section>
    );
}
;
export default About;

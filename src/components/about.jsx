import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="colorlib-about-conatiner">
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Us</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>I am a Full Stack Developer, excelled in MERN stack. I am a Engineering graduate from AKTU with IT as my major. I love exploring new buzzing technologies and believes in constant learning</p>
                    <p>I have started reflecting my ideas and thougths through the medium of words recently so spelling and grammer mistakes are very often.You can write me back if you spot any and don't want to live anymore :P </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building web apps using JavaScript, React.js, Next.js, Redux, Webpack, WPA, CSR, SSR, HTML, CSS.</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the IT background, I have good grasp over fundamental concepts of DSA.</p>
                    <p>My Hacker rank certificate : <span><a href="https://www.hackerrank.com/certificates/899929a26e68">hackerrank.com/certificates/899929a26e68</a></span></p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Backend Development</h3>
                    <p>I am experienced in writing scalable server applications, REST based architectured APIs using Node.js, Express.js with MongoDB, mySQL. I love to learn new technologies.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}

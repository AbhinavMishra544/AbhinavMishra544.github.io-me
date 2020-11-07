import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Currently working at Superlative Gaming Pvt Ltd (Noida).&nbsp; <span>March 2020-Present</span></h2>
                        <p>I am working as a Full Stack Developer(MERN) for a game product Poker. My Role includes working with backend team for creating GamePlay RESTful APIs, improving API performance and use Node.js, Express.js, MongoDB for backend development.</p>
                        <p>Front-end role involves creating Admin Panel from Scratch using React.js, Redux, HTML, CSS.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Worked at Litle Black Book (LBB), South Delhi.&nbsp; <span>Oct 2019 - March 2020</span></h2>
                        <p>Here I also worked as a Full Stack Developer(MERN).</p>
                        <p>My <span style = { { fontWeight:"bold"}}>Backend Role</span> includes writing RESTful APIs using Node.js, Express.js, MongoDB.</p>
                        <p> I also created Node.js Micro-service which generates a PDF when POST request is hit and saving that PDF in AWS S3 bucket and mailing it to intended recipients. Used AWS Lambda, SQS, s3 bucket as a service and Node.js to generate PDF.</p>
                        <p><span style = { { fontWeight:"bold"}}>Front-end Role</span> includes working on web of LBB, LBB's Merchant Panel UI using React.js, Redux, Next.js, HTML, CSS.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Graduate From AKTU &nbsp;<span>2015-2019</span></h2>
                        <p>I am an IT graduate from AKTU with my major in I.T(Information Technology). I have taken courses like DSA, OOPs, Database and have better understanding of these subjects.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

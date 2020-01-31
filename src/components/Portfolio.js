import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div id="modal-0" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://atfmakes.com/reacttowork/"><img width="100%" src="https://www.atfmakes.com/1/images/slides/ReactToWork.png" alt="ReactToWork"></img></a>
                </div>
                <h1 className="video-text">ReactToWork</h1>
                
<p>A Job Board for React Engineers, built in React with a Ruby on Rails backend. This is an app I built with my friend<a href="https://www.linkedin.com/in/chungcha/"> Charlie Chung</a> because we saw a need for a React centric job board that was both well-populated with jobs and made jobs easy to save for later application. We designed and developed the app from the ground up. Try it out for yourself <a href="https://atfmakes.com/reacttowork/">here.</a></p>
                </div>
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Here's some of my work. </h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item,index)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={`#modal-${index}`}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
          <h1>Want to see more? Drop me a line anytime using the contact info below.</h1>
        </div>
      </div>
  </section>
        );
  }
}
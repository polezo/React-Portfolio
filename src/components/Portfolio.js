import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
  {/* reconfigure modals to work with the resume jsondata and a .map */}
      <div id="modal-0" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://atfmakes.com/reacttowork/"><img width="100%" src="https://atfmakes.com/img/ReactToWorkSplash2.jpg" alt="ReactToWork"></img></a>
                </div>
                <h3 className="video-text">ReactToWork <span className="modal-links"> • <a href="https://atfmakes.com/reacttowork/">demo</a> • <a href="https://github.com/polezo/ReactToWorkFrontend">github</a> </span></h3>
                
<p>A Job Board for React Engineers, built in React with a Ruby on Rails backend. This is an app I built with my friend<a href="https://www.linkedin.com/in/chungcha/"> Charlie Chung</a> because we saw a need for a React centric job board that was both well-populated with jobs and made jobs easy to save for later application. We designed and developed the app from the ground up. Try it out for yourself <a href="https://atfmakes.com/reacttowork/">here.</a></p>
                </div>
                <div id="modal-1" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w-2N2BCxono" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h3 className="video-text">LetterLagoon <span className="modal-links"> • <a href="https://github.com/polezo/LetterLagoon">github</a> </span></h3>
                
<p>This is a spelling and phonics game for elementary school children. Built in React Native, it utilizes Redux for state management and AirBNB's Lottie framework for animations. It has over 2 different game modes, over 50 words, 25+ unique animations, 100+ audio elements, and a lot of happy playtesting from my daughter :).</p>
                </div>
                <div id="modal-2" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://atfmakes.com/numbercommander/"><img width="100%" src="https://atfmakes.com/img/NumberCommanderSplash2.jpg" alt="NumberCommander"></img></a>
                </div>
                <h3 className="video-text">NumberCommander <span className="modal-links"> • <a href="https://atfmakes.com/numbercommander/">demo</a>  • <a href="https://github.com/polezo/NumberCommander">github</a> </span></h3>
                
<p>NumberCommander is an math game that I'm currently developing for web using the HTML5 canvas and THREE.js. Inspired by old Apple II games like Number Munchers and Math Blasters, NumberCommander has 3 fun and simple math gamemodes with a unique space theme that kids are sure to love. <p><a href="https://atfmakes.com/numbercommander">Try the alpha out now!</a></p></p>
                </div>
                <div id="modal-3" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Gn44gYu5uIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h3 className="video-text">Memory Palace AR for AARP</h3>
                
<p>In this demo I created for AARP's Staying Sharp The user goes through a Memory Palace exercise (also known as <a href="https://en.wikipedia.org/wiki/Method_of_loci">the Method of Loci</a>) in Augmented reality. I designed and built this prototype from the ground up for Android Devices using Unity, C#, and the ARCore toolkit.</p>
                </div>

               
                <div id="modal-4" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://atfmakes.com/numbercommander/"><img width="100%" src="https://atfmakes.com/img/MetaVerseARSplash.jpg" alt="MetaverseOnDemand"></img></a>
                </div>
                <h3 className="video-text">MetaverseOnDemand<span className="modal-links"> • <a href="https://medium.com/@atyreefinch/metaverse-on-demand-using-googles-poly-api-ar-js-to-search-render-models-instantly-in-ar-e95b5145ed9e">blog</a>  • <a href="https://github.com/polezo/ARVerseOnDemand">github</a> </span></h3>
                
<p>This is an experiment I built using A-Frame, AR.js and the Google Poly API. It allows users
to search the large library of Google Poly models and immediately view them in AR from
their browser. It has toggles to view from multiple angles and really check out details, the option to resize objects to make them larger than life, and a lot of fun models from talented artists around the world. See my <a href="https://medium.com/@atyreefinch/metaverse-on-demand-using-googles-poly-api-ar-js-to-search-render-models-instantly-in-ar-e95b5145ed9e">blog post</a> for more about it, instructions on how it works and a link to check it out!<p></p></p>
                </div>

                   
                <div id="modal-5" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe width="90%" height="100%" src='//players.brightcove.net/3772599298001/HkD6Qklb_default/index.html?videoId=5858374552001' allowfullscreen frameborder={0}></iframe>
                </div>
                <h3 className="video-text">Martin Yan Recipe Videos<span className="modal-links"> • <a href="https://videos.aarp.org/search?q=martin%20yan&page=0">link</a>  </span></h3>
                
<p>In 2016 I produced several brain friendly recipe videos for Staying Sharp that starred celebrity Chef Martin Yan. I wrote all the recipe scripts to ensure they met our brain health science standards, communicating business requirements from the marketing team to the studio team to ensure all deliverables were met, and managed production on set along with m co-producer, Rebecca Abraham. You can check out the full series of videos <a href="https://videos.aarp.org/search?q=martin%20yan&page=0">here</a></p>
                </div>

                <div id="modal-6" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7XG7-d__R8U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h3 className="video-text">JetShare Explainer<span className="modal-links">  </span></h3>
                
<p>JetShare is the fastest and simplest way to privately share content with Friends, Family and work colleagues. I produced, edited and animated this explainer video for the app in 2017, working with the client to deliever a script that hit all the key app benefits in a fun and engaging way.</p>
                </div>

                <div id="modal-7" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/lkmJ6aKNQDQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <h3 className="video-text">Words Before Rumble<span className="modal-links">  </span></h3>
                
<p>On October 30, 1974, Muhammad Ali delivered what I consider to be the greatest get-hype, ready-to-rumble motivational speech of all time. I animated this kinetic typography piece to celebrate that awesome speech.<br></br></p>
                </div>
                

      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Portfolio</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item,index)=>{
              return(
                <div key={index} className="columns portfolio-item">
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
          
        </div>
      </div>
  </section>
        );
  }
}
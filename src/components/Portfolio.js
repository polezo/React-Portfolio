import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
  {/* reconfigure modals to work with the resume jsondata and a .map */}
      <div id="modal-0" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://atfmakes.com/reacttowork/" target="_blank" rel="noopener noreferrer"><img width="100%" src="https://atfmakes.com/img/ReactToWorkSplash2.jpg" alt="ReactToWork"></img></a>
                </div>
                <h3 className="video-text">ReactToWork <span className="modal-links"> • <a href="https://atfmakes.com/reacttowork/" target="_blank" rel="noopener noreferrer">demo</a> • <a href="https://github.com/polezo/ReactToWorkFrontend" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
                
<p>A Job Board for React Engineers, built in React with a Ruby on Rails backend. This is an app I built with my friend<a href="https://www.linkedin.com/in/chungcha/" target="_blank" rel="noopener noreferrer"> Charlie Chung</a> because we saw a need for a React centric job board that was both well-populated with jobs and made jobs easy to save for later application. We designed and developed the app from the ground up. Try it out for yourself <a href="https://atfmakes.com/reacttowork/" target="_blank" rel="noopener noreferrer">here.</a></p>
                
                </div>

                <div id="modal-1" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="LetterLagoon Video" width="100%" height="100%" src="https://www.youtube.com/embed/MUpAzyjMhyA" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <h3 className="video-text">LetterLagoon <span className="modal-links"> • <a href="https://github.com/polezo/LetterLagoon" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
                
<p>This is a spelling and phonics game for elementary school children. Built in React Native, it utilizes Redux for state management and AirBNB's Lottie framework for animations. It has 2 different game modes, over 50 words, 25+ unique animations, 100+ audio elements, and a lot of happy playtesting from my daughter :). See more detail on the animations by viewing <a href="https://www.youtube.com/watch?v=w-2N2BCxono" target="_blank" rel="noopener noreferrer">this video.</a></p>
                </div>


<div id="modal-2" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="BrewQueue Video" width="100%" height="100%" src="https://www.youtube.com/embed/qxlLTEEbWWc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <h3 className="video-text">BrewQueue<span className="modal-links"> • <a href="https://github.com/polezo/brewQueue" target="_blank" rel="noopener noreferrer">github</a></span></h3>
                <p>I built this as a part of Flatiron School with my friend <a href="https://sergioaperez.com/" target="_blank" rel="noopener noreferrer">Sergio Perez</a> (who narrates this video). It was an experiment to see how robust a site we could make without JS. We tapped the OpenBreweryDB API for breweries around the country for users to visit and rate. Designed from scratch and styled using Bootstrap and custom CSS, users can save their favorite breweries, meet beer fans who share their tastes and more.</p> 
                </div>

                <div id="modal-3" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://atfmakes.com/numbercommander/" target="_blank" rel="noopener noreferrer"><img width="100%" src="https://atfmakes.com/img/NumberCommanderSplash2.jpg" alt="NumberCommander"></img></a>
                </div>
                <h3 className="video-text">NumberCommander <span className="modal-links"> • <a href="https://atfmakes.com/numbercommander/" target="_blank" rel="noopener noreferrer">demo</a>  • <a href="https://github.com/polezo/NumberCommander" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
                
<p>NumberCommander is an math game that I'm currently developing for web using the HTML5 canvas and THREE.js. Inspired by old Apple II games like Number Munchers and Math Blasters, NumberCommander has three fun and simple math gamemodes with a unique space theme that kids are sure to love.<a href="https://atfmakes.com/numbercommander" target="_blank" rel="noopener noreferrer"> Try the alpha out now!</a></p><br></br>
                </div>

                <div id="modal-4" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="Memory Palace AR Video" width="100%" height="100%" src="https://www.youtube.com/embed/Gn44gYu5uIg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <h3 className="video-text">Memory Palace AR for AARP</h3>
                
<p>In this demo I created for AARP's Staying Sharp, the user goes through a Memory Palace exercise (also known as <a href="https://en.wikipedia.org/wiki/Method_of_loci" target="_blank" rel="noopener noreferrer">the Method of Loci</a>) in Augmented reality. I designed and built this prototype from the ground up for Android Devices using Unity, C#, and the ARCore toolkit.</p>
                </div>

               
                <div id="modal-5" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://medium.com/@atyreefinch/metaverse-on-demand-using-googles-poly-api-ar-js-to-search-render-models-instantly-in-ar-e95b5145ed9e" target="_blank" rel="noopener noreferrer"><img width="100%" src="https://atfmakes.com/img/MetaVerseARSplash.jpg" alt="MetaverseOnDemand"></img></a>
                </div>
                <h3 className="video-text">MetaverseOnDemand<span className="modal-links"> • <a href="https://medium.com/@atyreefinch/metaverse-on-demand-using-googles-poly-api-ar-js-to-search-render-models-instantly-in-ar-e95b5145ed9e" target="_blank" rel="noopener noreferrer">blog</a>  • <a href="https://github.com/polezo/ARVerseOnDemand" target="_blank" rel="noopener noreferrer">github</a> </span></h3>
                
<p>This is an experiment I built using A-Frame, AR.js and the Google Poly API. It allows users
to search the large library of Google Poly models and immediately view them in AR from
their browser. It has toggles to view from multiple angles and really check out details, an option to resize objects to make them larger than life, and a lot of fun models from talented artists around the world. See my <a href="https://medium.com/@atyreefinch/metaverse-on-demand-using-googles-poly-api-ar-js-to-search-render-models-instantly-in-ar-e95b5145ed9e" target="_blank" rel="noopener noreferrer">blog post</a> for more about it, instructions on how it works and a link to the demo to try it yourself.</p>
                </div>

                   
                <div id="modal-6" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="Martin Yan Video" width="90%" height="100%" src='//players.brightcove.net/3772599298001/HkD6Qklb_default/index.html?videoId=5858374552001' allowFullScreen="allowfullscreen" frameBorder={0}></iframe>
                </div>
                <h3 className="video-text">Martin Yan Recipe Videos<span className="modal-links"> • <a href="https://videos.aarp.org/search?q=martin%20yan&page=0" target="_blank" rel="noopener noreferrer">link</a>  </span></h3>
                
<p>In 2016 I produced several brain friendly recipe videos for Staying Sharp that starred celebrity Chef Martin Yan. I wrote all the recipe scripts to ensure they met our brain health science standards, communicated business requirements from the marketing team to the studio team to ensure all deliverables were met, and managed production on set along with my co-producer, Rebecca Abraham. You can check out the full series of videos <a href="https://videos.aarp.org/search?q=martin%20yan&page=0" target="_blank" rel="noopener noreferrer">here.</a></p>
                </div>

                <div id="modal-7" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="JetShare Video" width="100%" height="100%" src="https://www.youtube.com/embed/7XG7-d__R8U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <h3 className="video-text">JetShare Explainer<span className="modal-links">  </span></h3>
                
<p>JetShare is the fastest and simplest way to privately share content with Friends, Family and work colleagues. I produced, edited and animated this explainer video for the app in 2017, working with the client to deliever a script that hit all the key app benefits in a fun and engaging way.</p>
                </div>

                <div id="modal-8" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="AR Mask Video" width="100%" height="100%" src="https://www.youtube.com/embed/ZFX21siT8DI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <h3 className="video-text">Blue Demon AR Mask<span className="modal-links">  </span></h3>
                
<p>(<strong>Warning:</strong> Video may be scary!) This is an interactive AR mask I made for Instagram for Halloween using the Spark AR Toolkit from Facebook and scripts written in Javascript. You can read more about how it was made in <a href="https://medium.com/@atyreefinch/making-an-instagram-fb-ar-halloween-mask-with-spark-ar-studio-and-javascript-218226942a81" target="_blank" rel="noopener noreferrer"> my blog about it</a>, see a kewt video of my daughter using it <a href="https://youtu.be/jvUEV-uOSAk" target="_blank" rel="noopener noreferrer"> here</a>, or try it out in Instagram yourself using <a href="https://www.instagram.com/a/r/?effect_id=2999623446731766&ch=YTYyMTliODY1NTdhMzAzNjUwOGMyYTJhYzg0NmJhMjc="> this link</a> from a mobile device.</p>
                </div>

                <div id="modal-9" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="Bolt Pattern Pro Commercial" width="100%" height="100%" src="https://www.youtube.com/embed/a-jrQVU9CGY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
                </div>
                <h3 className="video-text">Bolt Pattern Pro Commercial<span className="modal-links">  </span></h3>
                
<p>Bolt Pattern Pro allows shop owners and car enthusiasts alike to accurately measure a vehicle’s bolt pattern, even with the wheel mounted. Working with the tool's inventor, I directed and animated this commercial for the product a few years back. Motion graphics/animation produced in After Effects.</p>

  
<div id="modal-10" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <a href="https://www.cdc.gov/flu/resource-center/freeresources/graphics/animated-images.htm" target="_blank" rel="noopener noreferrer"><img width="100%" src="https://atfmakes.com/img/CDC-NIVWSplash.gif" alt="CDC #FightFlu Gifs"></img></a>
                </div>
                <h3 className="video-text">#GetAFluVax GIFs<span className="modal-links"> • <a href="https://www.cdc.gov/flu/resource-center/freeresources/graphics/animated-images.htm" target="_blank" rel="noopener noreferrer">link</a></span></h3>
                
<p>This series of GIFS is a Hermes Award winning campaign I developed for the CDC while I was at Westat. These animated infographics were created as evergreen material to use every flu season and encourage key audiences to get their vaccine. I wrote and animated the gifs and used them in social and paid display marketing campaigns we ran for the client. See the collection <a href="https://www.cdc.gov/flu/resource-center/freeresources/graphics/animated-images.htm" target="_blank" rel="noopener noreferrer">here</a>.</p>
                </div>

                </div>


                <div id="modal-11" className="modal-center mfp-hide row">
                <div className="five columns modal-video">
                <iframe title="Muhammed Ali Speech" width="100%" height="100%" src="https://www.youtube.com/embed/lkmJ6aKNQDQ" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>
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
                      <img src={`${item.imgurl}`} className="item-img" alt={`${item.name}-thumbnail`}/>
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
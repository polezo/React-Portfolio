import React from 'react'

class Skills extends React.Component {

    state = { skillsToggle:false }

    toggleSkills = () => {
        this.setState({skillsToggle: !this.state.skillsToggle})
    }

    render(){
        let resumeData = this.props.resumeData;
        return (
        <div className="row skill">
        
        <div className="three columns header-col">
           <h1><span>Skills</span></h1>
        </div>
        
        <div className="four columns minus-padding-l">
        
        <p className="smaller-text">
        {`${resumeData.skillsDescription}. `}<strong className="smaller-text4">See more on my <a href="https://atfmakes.com/resume.pdf" target="_blank" rel="noopener noreferrer">full resume</a>.</strong>
        </p>
     
     <div className="bars">
     
       <ul className="skills">
       {
              !this.state.skillsToggle ? resumeData.skills.map((item) => {
                return(
                  <li key={item.id}>
                  <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                  </span><em>{item.skilldisplay}</em>
                  </li>
                )
              } 
              ) : resumeData.skills4.map((item) => {
                return(
                  <li key={item.id}>
                  <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                  </span><em>{item.skilldisplay}</em>
                  </li>
                )
              } 
              )
              
            }
     
      </ul>
     
     </div>

     
     
     </div>

        <div className="four columns minus-padding-l">
        
        <p className="smaller-text2">
        <strong onClick={this.toggleSkills} className="smaller-text3" style={{"cursor":"pointer","color":"#11ABB0"}}> Toggle Skills.</strong>  <strong className="smaller-text3">Note: </strong>Progress bars are <i>in-part </i> just an excuse for fun CSS--not to be taken <i>100%</i> literally 😛
        </p>
        
        <div className="bars">
        
          <ul className="skills">
            {
              !this.state.skillsToggle ? resumeData.skills2.map((item) => {
                return(
                  <li key={item.id}>
                  <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                  </span><em>{item.skilldisplay}</em>
                  </li>
                )
              } 
              ) : resumeData.skills3.map((item) => {
                return(
                  <li key={item.id}>
                  <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                  </span><em>{item.skilldisplay}</em>
                  </li>
                )
              } 
              )
              
            }
        
         </ul>
        
        </div>

        
        
        </div>
        
        </div>
        )}

}

export default Skills
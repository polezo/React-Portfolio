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
        {`${resumeData.skillsDescription}. `}<strong className="smaller-text">See more on my resume <a href="https://atfmakes.com/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</strong>
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
        Note: Progress bars are <i>in-part </i> an excuse for some fun CSS--not be taken <i>100%</i> literally :-P. <strong onClick={this.toggleSkills} className="smaller-text2" style={{"cursor":"pointer","color":"#11ABB0"}}> Toggle Skills</strong>  
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
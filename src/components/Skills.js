import React from 'react'

class Skills extends React.Component {

    render(){
        let resumeData = this.props.resumeData;
        return (
        <div className="row skill">
        
        <div className="three columns header-col">
           <h1><span>Skills</span></h1>
        </div>
        
        <div className="four columns minus-padding-l">
        
        <p className="smaller-text">
        {`${resumeData.skillsDescription}. `}<strong className="smaller-text">See more <a href="https://atfmakes.com/resume.pdf" target="_blank" rel="noopener noreferrer">here</a>.</strong>
        </p>
     
     <div className="bars">
     
       <ul className="skills">
         {
           resumeData.skills && resumeData.skills.map((item,index) => {
             return(
               <li key={index}>
               <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
               </span><em>{item.skilldisplay}</em>
               </li>
             )
           })
         }
     
      </ul>
     
     </div>

     
     
     </div>

        <div className="four columns minus-padding-l">
        
          <br></br>
          <br></br>
        
        <div className="bars">
        
          <ul className="skills">
            {
              resumeData.skills2 && resumeData.skills2.map((item,index) => {
                return(
                  <li key={index}>
                  <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                  </span><em>{item.skilldisplay}</em>
                  </li>
                )
              })
            }
        
         </ul>
        
        </div>

        
        
        </div>
        
        </div>
        )}

}

export default Skills
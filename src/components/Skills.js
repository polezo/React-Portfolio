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
        
        <p>
        {`${resumeData.skillsDescription}. See more `} <a href="https://atfmakes.com/resume.pdf">here</a>.
        </p>
     
     <div className="bars">
     
       <ul className="skills">
         {
           resumeData.skills && resumeData.skills.map((item) => {
             return(
               <li>
               <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
               </span><em>{item.skillname}</em>
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
              resumeData.skills2 && resumeData.skills2.map((item) => {
                return(
                  <li>
                  <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                  </span><em>{item.skillname}</em>
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
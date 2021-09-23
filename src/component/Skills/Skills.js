import React from "react"
import "./Skills.css"
// import FontAwesome from 'react-fontawesome'
// import faStyles from 'font-awesome/css/font-awesome.css'
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SkillBar from 'react-skillbars';
// import { FaHtml5 } from 'react-icons/fa';

class Skills extends React.Component{
    SKILLS = [
        {
            "type": "HTML",
            "level": 90
          },
          {
            "type": "CSS",
            "level": 60
          },
          
        {
            "type": "Javascript",
            "level": 80
          },
        {
          "type": "React",
          "level": 40
        },
    ]
    colors = {
        "bar": "#bcb4ab",
        "title": {
          "text": "crimson",
          "background": "#fff"
        }
      }
    render(){
        
      // var FA = require('react-fontawesome')
        return(
            <div className="skills">
               <div className="skillsone">
               <h1>skills</h1>
               <SkillBar skills={this.SKILLS} colors={this.colors}  height={'8vh'}/>
               </div>
               
            </div>
        )
    }
}

export default Skills;
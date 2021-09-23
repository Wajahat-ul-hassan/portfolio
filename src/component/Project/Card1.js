import React from "react";
import "./Project.css";

class Card extends React.Component{
    render(){
        return(
            <div className="root">
            <div className="maincard">
            <img src={this.props.value.img} alt=""/>
            <h2>{this.props.value.RS}</h2>
            <p>{this.props.value.Des}</p>
            
            </div>
            </div>
 
        )
    }
}


export default Card;
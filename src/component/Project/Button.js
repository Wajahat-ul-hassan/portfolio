import React from "react";
import "./Project.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
 
class Button1 extends React.Component{
    render(){
        return(
            <div className="root1">
               <Button variant="info" onClick={this.props.button}>ALL</Button>
               <Button variant="info" onClick={this.props.button1}>mobile</Button>
               <Button variant="info" onClick={this.props.button2}>watch</Button>
               {/* <button onClick={this.props.button}>ALL</button> */}
               {/* <button onClick={this.props.button1}>mobile</button> */}
               {/* <button onClick={this.props.button2}>others</button> */}
            </div>
        )
    }
}
 export default Button1 ;
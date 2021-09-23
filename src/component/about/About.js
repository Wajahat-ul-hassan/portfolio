import React from "react"
import "./about.css"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

class About extends React.Component{
    render(){
        return(
            <div className="about">
            
                <div className="aboutone">
                 <img alt="" src="https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
                </div>
                <div className="abouttwo">
                <h1>About Me</h1>
                <p>simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting
                    , remaining essentially unchanged. It was popularised in the 1960s with the release of
                    letraset sheets containing simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only</p>
                <Button variant="outline-danger" size="lg">hire me</Button>
                <Button variant="outline-danger" size="lg">see cv</Button>
                </div>
            </div>
        )
    }
}

export default About;
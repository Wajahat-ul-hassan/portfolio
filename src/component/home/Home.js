import React from "react"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./home.css"
// import 'aos';
import ScrollAnimation from "react-animate-on-scroll";


class Home extends React.Component{
   
    render(){
        return(
            
            <div className="homecontainer">
            <div className="homeheading" >
            <ScrollAnimation animateIn='fadeIn'
               animateOut='fadeOut'>
                <h1>hi, </h1>
                <h1>i am <span>wajahat</span></h1>
                <h1> <span>React js  </span> developer</h1>
                <Button variant="outline-danger" size="lg">hire me</Button>
                <Button variant="outline-danger" size="lg">see cv</Button>
                </ScrollAnimation>
            </div>
            
            <div className="homeimage">
                <img alt="" src="https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"></img>
            </div>
                
            </div>
        )
    }
}

export default Home;
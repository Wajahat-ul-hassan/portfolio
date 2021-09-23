import React from "react" 
import "./Navbar.css"
import {Link} from "react-router-dom"
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
// import  Main from "../Authentication/Main";
class Navbar1 extends React.Component{
    state={
        islogedin:false,
        whoin:"guest"
    }
    componentDidMount(){
        const isLogin = localStorage.getItem('isLogin')
        const whoin = localStorage.getItem("whoin")
        console.log(isLogin)
        this.setState({islogedin:isLogin})
        this.setState({whoin:whoin})
    }
    handleLogout = () => {
        localStorage.setItem('isLogin', false)
        localStorage.setItem('whoin', "guest")
        this.setState({islogedin:false})
        window.location.reload()
      }
    render(){
        return(
            <div>
                <Navbar  expand="lg" className="logo ">
                    <Navbar.Brand  className="logo1" > <Link to="/" className="logo2" >portfo<span>lio.</span></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        {this.state.whoin !== "guest" && <>
                            <Nav.Link href="#"><Link to="/about" className="links">about</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="/skills"  className="links">skills</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="/contact"  className="links">contact</Link></Nav.Link>
                            <Nav.Link href="#"><Link to="/chat"  className="links">chat</Link></Nav.Link></> }
                            {this.state.islogedin == "true" ? <button onClick={this.handleLogout}>logout</button> : 
                            <Nav.Link href="#"><Link to="/login"  className="links">login</Link></Nav.Link>}
                           
                            {/* <h1>{this.state.whoin}</h1> */}
                        </Nav>
                    </Navbar.Collapse>
                   
                </Navbar>
            </div>
        )
    }
}

export default Navbar1;
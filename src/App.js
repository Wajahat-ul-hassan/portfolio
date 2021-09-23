import React from "react";
import "./App.css"
import About from "./component/about/About"
import Skills from "./component/Skills/Skills"
import Main from "./component/Authentication/Main"
import Home from "./component/home/Home"
import Navbar1 from "./component/navbar/Navbar"
import Contact from "./component/Contact/Contact"
import Project from "./component/Project/Project"
import Chat from "./component/Chat/Chat"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
class App extends React.Component{
  render(){
    return(
      <Router>
         <div className="nav">
          
        <Navbar1 username={"wajahat"}/>
        <Switch>
        <Route exact path="/"> <Home/></Route>
        <Route path="/about"> <About/></Route>
        <Route path="/skills"> <Skills/></Route>
        <Route path="/login">  <Main/></Route>
        <Route path="/contact"> <Contact/></Route>
        <Route path="/project"> <Project/></Route>
        <Route path="/chat"> <Chat/></Route>
         </Switch>
         </div>
         </Router>
    )
  }
}

export default App;
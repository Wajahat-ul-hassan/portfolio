import React from "react"
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import { Row,Col } from "react-bootstrap";
import "./login.css"

class Login extends React.Component{

   

  handleclick=()=>{
    console.log(this.state.loginemail)
  }

    render(){
        return(
            <div>
                <div className="maincontainer">
              <Row xs={1} md={2}>
                <Col xs={12} md={4}>
                <div  className="seconddiv">
                  <form>

                    <input type="email" 
                    value={this.props.loginemailvalue}
                    placeholder="email address or phone number"
                    onChange={this.props.loginemail}>
                    </input>

                    <input type="password" 
                    value={this.props.loginpassvalue}
                    placeholder="password"  
                    onChange={this.props.loginpassword} >
                    </input>

                    <button className="button1" type="button"
                    onClick={this.props.loginclick}>
                    Log In
                    </button>

                    <p className="p">forgotten pasword?</p><hr></hr>

                    <button className="button2" type="button"
                    onClick={this.props.register}>
                    register your self
                    </button>
                  </form>
                  </div></Col>
                  </Row>
                </div>
            </div>
        )
    }
}

export default Login;
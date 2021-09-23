import React from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css"
import { Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form'
import "./signup.css"

class Register extends React.Component{
render(){
    return(
        
    <div className="statediv">
            <div className="firstdiv1">
                 <h1>Signup</h1>
                     <Form className="stateform">

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter name" onChange={this.props.signupname} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  onChange={this.props.signupemail}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={this.props.signuppassword} />
                            </Form.Group>
                        </Form.Row>

                        <button variant="varient" type="button" className="button1" onClick={this.props.signupsumbit}>
                            Submit
                        </button>
                        </Form>
                </div>
            </div>
    )
}
}
export default Register;
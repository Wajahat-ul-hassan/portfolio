import React from "react";
import firebase from 'firebase';
import swal from '@sweetalert/with-react'
import Login from "./Login";
import Register from "../Authentication/signup"


const firebaseConfig = {
  apiKey: "AIzaSyCvJBM3uuvNewfhDaxIaCTkX7Pa8RQ16eA",
  authDomain: "portfolio-c3c55.firebaseapp.com",
  projectId: "portfolio-c3c55",
  storageBucket: "portfolio-c3c55.appspot.com",
  messagingSenderId: "610236843000",
  appId: "1:610236843000:web:e53a76bde046015c424c0d"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}

class Main extends React.Component{
  constructor(){
    super();
    this.state = {
    button2:false,
    main:true,
    loginemail:"",
    loginpasword:"",
    signupname:"",
    signupemail:"",
    signuppassword:"",
    }
  }

  handleinputes =(e , key) =>{
    this.setState({[key]:e.target.value})
    console.log(key)
  } 

  loginclick1 = () =>{
    const { loginemail, loginpasword } = this.state

   if(loginemail && loginpasword){
     this.handlefirebaseLogin()
     }
     else if(loginemail){
       swal("please enter password")
     }
     else if(loginpasword){
      swal("please enter pasword")
    }
    else{
      swal("please enter email or password")
    }
     
   }
  

  handlefirebaseLogin = () => {
    const {loginemail, loginpasword } = this.state
    firebase.auth().signInWithEmailAndPassword(loginemail, loginpasword)
    .then((res) => {
                var obj={
                email_in:res.user.email,
                uid_in:res.user.uid
              };
              console.log(obj.email_in , obj.uid_in)
           localStorage.setItem('usered', JSON.stringify(obj))
           localStorage.setItem('isLogin', true)
           localStorage.setItem('whoin', loginemail)
           alert('Login Hogaya')
           this.setState({loginemail:'', loginpasword:''})
           window.location.reload()
    })
    .catch((error) => {
        swal(error.message)
    })
}

  signupsumbit = () =>{
    const {signupemail , signuppassword} = this.state;
    if(signupemail && signuppassword ){
      this.handlefirebaseSignup()
    }
    else if(signupemail){
      swal(<div>plaese enter password</div>);
    }
    else if(signuppassword){
      swal(<div>plaese enter email</div>);
    }
    else{
      swal(<div>plaese enter email or password</div>);
    }
  }

  
  handlefirebaseSignup = () => {
    const { signupemail, signuppassword } = this.state
    firebase.auth().createUserWithEmailAndPassword(signupemail, signuppassword)
    .then(() => {
        swal('Signup Hogaya')
        this.setState({signupemail:"", signuppassword:"",signupname:""})
    })
    .catch((error) => {
      swal(error.message)
    })
}

  register = () =>{
    this.setState({button2: !this.state.button2})
    this.setState({main:false})

  }
  render(){
    return(
      <div >
         { this.state.main && <Login  
              loginclick={this.loginclick1} 
              register={this.register}  
              loginemail={(e)=>{this.handleinputes(e,"loginemail")}} 
              loginpassword={(e)=>{this.handleinputes(e,"loginpasword")}} /> }  
         
         {this.state.button2 && <Register 
              signupname={(e)=>{this.handleinputes(e,"signupname")}} 
              signupemail={(e)=>{this.handleinputes(e,"signupemail")}} 
              signuppassword={(e)=>{this.handleinputes(e,"signuppassword")}} 
              signupsumbit={this.signupsumbit}/> }
      </div>
    )
  }
}

export default Main;
import React from "react"
import "./Chat.css"
import firebase from 'firebase'



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
class Chat extends React.Component{

    state={
        text:"",
        massage:[],
        uid:[]
    }
    componentDidMount(){
        this.getdata()
    }
 

    getdata = () => {
        const data = []
        // firebase.firestore()
        // .collection("text")
        // .get()
        // .then((msg)=>{
        //     msg.forEach(val =>{
        //         data.push(val.data())
        //     })
        //     this.setState({massage:data})
        // })

            firebase.firestore()
            .collection("text")
            .onSnapshot((msg)=>{
                const data = []
                const adduid = []
                // console.log(msg)
                msg.forEach((val) =>{
                    data.push(val.data())
                    console.log(data)
                    const uid = val.data().uid
                    adduid.push(uid)
                })
                this.setState({massage:data});
                this.setState({uid:adduid})
                
            })
    }
    

    send = () =>{
        console.log(this.state.text)
        const user = JSON.parse(localStorage.getItem("usered"))
        console.log(user)
        firebase.firestore()
        .collection("text")
        .add({msg:this.state.text , uid: user.uid_in , time: new Date().toTimeString()})
        .then(()=>{
            this.setState({text:""})
        })
        .catch(()=>{})
      }
      
    render(){
        const uid = JSON.parse(localStorage.getItem("usered"))
        const userid = uid.uid_in
        return(
            <div className="main">
            <div className="Chats">
                   {this.state.massage.map((val , ind) =>{
                return(
                    
                     <div className="chatleft">
                      <h1 key={ind}>{val.mag}</h1>
                      </div>  
                )
            }
            )}
            
         
                 
                 <div className="chatright">
                     <h1>hello</h1>
                 </div>
                 
            </div>
                <div>
                <input type="text" value={this.state.text} placeholder="text here" onChange={(e)=>{this.setState({text:e.target.value})}}></input>
                <button type="button" onClick={this.send}>Send</button>
                </div>
            </div>
        )
    }
}
export default Chat;
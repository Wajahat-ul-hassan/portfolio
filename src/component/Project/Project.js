import React from "react";
import "./Project.css";
import Card2 from "./Card";
import Card from "../Project/Card1";
import Button1 from "./Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
const image = "https://cdn.vox-cdn.com/thumbor/XyV4MO1uhTFwRO2BZxHVHjz29d0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19710515/vpavic_200206_3899_0127.jpg"
const image1 ="https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"
const image2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYSOsc0HTD99e2EEw4DeADI5fihM--ZnGSKg&usqp=CAU"
const image3="https://www.imore.com/sites/imore.com/files/styles/large_wm_blw/public/field/image/2019/09/rear-camera-iphone-11-pro-hero.jpg";
const image4="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605123348-1943394.jpeg.transform.buying-options_watch_1000.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=480:*";
const image5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATGL0N2xcLx4_SrBu-IbQRisiLIvwxf_sQw&usqp=CAU";
const image6="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd30Z8NwBecI6Qcwa1KrrdtbgH0dMg8B9LCw&usqp=CAU";
const image7="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRsG6KQltSaagOpl0px32STG7OWikXaO6S5w&usqp=CAU";

class Project extends React.Component{
  
  state = {
    button1:true,
    button2:true,
    // button:true,

  olxcard:[
    {
      img:image,
      RS:"RS"+10000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image1,
      RS:"RS"+20000,
      Des:"Lorem Ipsum has been the industry's standard   "
    },
    {
      img:image2,
      RS:"RS"+30000,
      Des:" Ipsum has been the industry's standard "
    },
    {
      img:image3,
      RS:"RS"+10000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image3,
      RS:"RS"+20000,
      Des:"Lorem Ipsum has been the industry's standard   "
    },
    {
      img:image2,
      RS:"RS"+30000,
      Des:"Lorem Ipsum has been the industry's standard "
    },
    {
      img:image1,
      RS:"RS"+10000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image,
      RS:"RS"+20000,
      Des:"Lorem Ipsum has been the industry's standard   "
    }
  ],
  olxcard1:[
    {
      img:image4,
      RS:"RS"+10000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image5,
      RS:"RS"+20000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image6,
      RS:"RS"+30000,
      Des:"Lorem Ipsum has been the industry's standard "
    },
    {
      img:image7,
      RS:"RS"+10000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image7,
      RS:"RS"+20000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image6,
      RS:"RS"+20000,
      Des:"Lorem Ipsum has been the industry's standard  "
    },
    {
      img:image5,
      RS:"RS"+30000,
      Des:"Lorem Ipsum has been the industry's standard "
    },
    {
      img:image4,
      RS:"RS"+10000,
      Des:"Lorem Ipsum has been the industry's standard  "
    }
  ],

  }
  all = () => {
    // this.setState({button:true})
    this.setState({button1:true})
    this.setState({button2:true})
  }
  mobile = () => {
    // this.setState({button:false})
    this.setState({button1:true})
    this.setState({button2:false})
  }
  others = () => {
    // this.setState({button:false})
    this.setState({button1:false})
    this.setState({button2:true})
  }

  render(){
    return(
      <div >
      <Button1  button={this.all} button1={this.mobile} button2={this.others}/>
      {this.state.button1 &&  <div>
       
        <Row md={4}>
          {this.state.olxcard.map((value , index)=>(  
          <Card2 value={value} key={index}/>
          ))} 
        </Row>
       
      </div>}
      {this.state.button2 && <div>
      
        <Row md={4}>
         {this.state.olxcard1.map((value , index)=>(  
          <Card value={value} key={index}/>
         ))} 
        </Row>
       
    </div>}
      
       
      </div>
      
    )
  }
}
export default Project;
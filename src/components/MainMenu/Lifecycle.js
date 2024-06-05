import React, { Component } from 'react';
import bellA from '../../assets/images/bellA.png'
import bellB from '../../assets/images/bellB.png'

class Lifecycle extends Component {
  constructor(){
    super();
    this.state={
      text:'Subscribe',
      message:'Please Subscribe to my channel',
      imageUrl:bellB,
      color:'black'
    }
  }
 changestatus=()=>{
  this.setState({
    message:'Click on bell  to get Notification',
    text:'Subscribed',
    color:'white'
  })
 }

 changebellicon=()=>{
  this.setState({
    message:'Thank you for Subscribing!',
    imageUrl:bellA
  })
 }
  

  render() {
    return <div className='App'>
      <h2>{this.state.message}</h2>
      <button onClick={this.changestatus} style={{color:this.state.color}} >{this.state.text}</button><br/>
      <img style={{height:'60px', width:'60px'}} src={this.state.imageUrl} onClick={this.changebellicon} />
      <button>SK</button>
    </div>;
  }
}

export default Lifecycle;

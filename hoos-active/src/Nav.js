import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import CreateEventBox from './CreateEventBox.js'

var x = 38.022
var y = -78.481
var n = "Cricket"
var c = "Varun"

export default class Nav extends React.Component{
constructor(props){
    super(props);
    this.state={
        create: false
    }
}


onCreate(e){
        
        this.setState({
            create: true
        })
}

onsubmit(x,y,n,c,d){
    this.props.createEvent(x,y,n,c,d)
}

render(){
    var eventBox='';
    if (this.state.create){
        eventBox = <CreateEventBox onsubmit={this.onsubmit.bind(this)}/>
    }
 return(
     <div>
            <div id="nav" className= "navbar">
                        {/*<a href="#" id="account">
                            Username
                        </a>    */}
                        <a href="#" id="events" onClick={e => this.onCreate(e)}>
                            Create Pickup Game
                        </a>    
                        {/*<a href="#" id="profile">
                            Edit Profile
                        </a>*/}
            </div>
            {eventBox} 
        </div>       
      )  
}
}

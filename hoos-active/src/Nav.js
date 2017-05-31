import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="nav" className= "navbar">
                        <a href="#" id="account">Username</a>
                        <a href="#" id="events">Create Event</a>
                        <a href="#" id="profile">Edit Profile</a>
            </div>        
      )  
    }
}
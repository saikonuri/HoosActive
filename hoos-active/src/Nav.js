import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="nav" className= "navbar">
                        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                        <a href="#">Username</a>
                        <a href="#">Edit Profile</a>
                        <a href="#">Create Event</a>
            </div>
      )  
    }
}
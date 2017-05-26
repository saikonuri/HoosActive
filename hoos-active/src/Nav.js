import React from 'react';
import ReactDOM from 'react-dom';

export default class Nav extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <nav>
                <ul>
                <li><a id='username' href='profile'>Username</a></li>
                <li><a class="active" id='event-button' href="#event">Create Event</a></li>
                <li><a id='edit-profile' href="#editProfile">Edit Profile</a></li>
                </ul>
            </nav>
        )
    }
}
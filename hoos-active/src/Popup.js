import React from 'react';
import ReactDOM from 'react-dom';

export default class Popup extends React.Component{
    constructor(props){
    super(props);

}

render(){
    return(
        <div >
            <p>Event Name</p>
            <p>Time</p>
            <p>Creator Info</p>
            <p>Yes?No?</p>
            <p>People Going</p>
            <p>Description</p>
        </div>
    )
}
}

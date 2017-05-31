import React from 'react';
import ReactDOM from 'react-dom';

export default class Popup extends React.Component{
    constructor(props){
    super(props);

}

render(){
    return(
        <div id="popup" >
            <ul id="list">               
                <li>Event Name: {this.props.event}</li>
                <li>Time: </li>
                <li>Creator Info: {this.props.creator}</li>
                <li>Yes? No?</li>
                <li>People Going</li>
                <li>Description</li>
            </ul>
        </div>
    )
}
}

import React from 'react';
import ReactDOM from 'react-dom';

export default class Popup extends React.Component{
    constructor(props){
    super(props);

}

render(){
    return(
        <div id="vertical-menu">
            <a href="#" className="menu">Menu</a>
            <a href="#">Event Name : {this.props.event}</a>
            <a href="#"> Time: </a>
            <a href="#">Creator Info: {this.props.creator}</a>
            <a href ="#"> Yes? No?</a>
            <a href="#"> People Going </a>
            <a href="#"> Description </a>
        </div>
    )
}
}

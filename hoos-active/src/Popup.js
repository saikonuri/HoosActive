import React from 'react';
import ReactDOM from 'react-dom';

export default class Popup extends React.Component{
    constructor(props){
    super(props);

}

render(){
    return(
        <div id="vertical-menu">
            <a href="#" className="menu">Game Details</a>
            <a href="#">Sport : {this.props.event}</a>
            <a href="#"> Time: {this.props.time} </a>
            <a href="#">Creator: {this.props.creator}</a>
            <a href="#">Place: {this.props.placeName}</a>
            <a href ="#"> Going?</a>
            {/*<a href="#"> People Going </a>*/}
        </div>
    )
}
}

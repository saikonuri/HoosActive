import React from 'react';
import ReactDOM from 'react-dom';

export default class Popup extends React.Component{
    constructor(props){
    super(props);
}

addPeopleGoing(){
    this.props.addPeopleGoing();
}

render(){
    return(
        <div id="vertical-menu">
            <a href="#" className="menu">Game Details</a>
            <a href="#" className="styleSubs">Sport : {this.props.event}</a>
            <a href="#" className="styleSubs"> Time: {this.props.time} </a>
            <a href="#" className="styleSubs">Creator: {this.props.creator}</a>
            <a href="#" className="styleSubs">Place: {this.props.placeName}</a>
            <a href ="#"  className="styleSubs" onClick={() => {this.addPeopleGoing()}}> Going?</a>
            {/*<a href="#"> People Going </a>*/}
        </div>
    )
}
}

import React from 'react';
import ReactDOM from 'react-dom';

export default class Popup extends React.Component{
    constructor(props){
    super(props);

    this.state={
        number : 1
    }
}

componentWillMount(){
        this.setState({
            number: this.props.number
        })
}

addPeopleGoing(){
    var newNumber = this.state.number+1
    this.setState({
        number: newNumber
    })
    
}

render(){
    return(
        <div id="vertical-menu">
            <a href="#" className="menu">Game Details</a>
            <a href="#" className="styleSubs">Sport : {this.props.event}</a>
            <a href="#" className="styleSubs"> Time: {this.props.time} </a>
            <a href="#" className="styleSubs">Creator: {this.props.creator}</a>
            <a href="#" className="styleSubs">Place: {this.props.placeName}</a>
            {/*<a href="#" className="styleSubs" onClick={() => {this.addPeopleGoing()}}> Going? {this.state.number}</a>*/}
            {/*<a href="#" onClick={()=> this.deleteEvent()}> Delete Game</a>*/}
        </div>
    )
}
}

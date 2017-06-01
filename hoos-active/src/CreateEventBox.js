import React from 'react';

export default class CreateEventBox extends React.Component{
        constructor(props){
            super(props);
            this.state={
                lat: '',
                lng : '',
                sport: '',
                time: '',
                name: '',
            }
        }

        handleSportChange(e){
            this.setState({
                sport: e.target.value
            })
        }

        handleTimeChange(e){
            this.setState({
                time: e.target.value
            })
        }

        handleNameChange(e){
            this.setState({
                name: e.target.value
            })
        }

        handleLatChange(e){
            this.setState({
                lat: e.target.value
            })
        }

        handleLongChange(e){
            this.setState({
                lng: e.target.value
            })
        }

        onSubmit(e){
            this.props.onsubmit(this.state.lat,this.state.lng,this.state.sport,this.state.name,this.state.time);
        }

        render(){
            return(
                <form>
                    Latitude:<br/>
                    <input type="text" onChange={e => this.handleLatChange(e)}/>
                    <br/>
                    Longitude:<br/>
                    <input type="text" onChange={e => this.handleLongChange(e)}/>
                    <br/>
                    Sport:<br/>
                    <input type="text" onChange={e => this.handleSportChange(e)}/>
                    <br/>
                    Time:<br/>
                    <input type="text" placeholder="HH:MM" onChange={e =>this.handleTimeChange(e)}/>
                    <br/>
                     Your Name:<br/>
                    <input type="text" onChange={e => this.handleNameChange(e)}/>
                    <br/>
                    <button onClick={e => this.onSubmit(e)}> Submit </button>
                </form>    
            )
        }

}
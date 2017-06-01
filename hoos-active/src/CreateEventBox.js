import React from 'react';

const locations = [
    {
        place: 'AFC',
        lat: 38.032994,
        lng: -78.513485
    },
    {
        place: 'Slaughter',
        lat: 38.0350,
        lng: -78.5179
    },
    {
        place: 'Memorial Gym',
        lat: 38.037713,
        lng: -78.507128
    },
    {
        place: 'Snyder Tennis Courts',
        lat: 38.038934,
        lng: -78.506515
    },
    {
        place: 'Dell Courts',
        lat: 38.036193,
        lng: -78.508932
    },
    {
        place: 'North Grounds',
        lat: 38.052514,
        lng: -78.515193   
    },
    {
        place: 'Nameless Field',
        lat: 38.037500,
        lng: -78.506407
    },
    {
        place: "Carr's Hill Field",
        lat: 38.040261,
        lng: -78.505230   
    },
    {
        place: "Old Dorms Tennis Courts",
        lat: 38.036242,
        lng: -78.510437
    }
]
export default class CreateEventBox extends React.Component{
        constructor(props){
            super(props);
            this.state={
                lat:'',
                lng:'',
                sport: '',
                time: '',
                name: '',
                place: '',
                selectValue: 0
            }
        }

        handleLocationChange(e){
            console.log(e.target.value)
            this.setState({
                // lat : locations[e.target.value].lat,
                // lng : locations[e.target.value].lng,
                // place: locations[e.target.value].place,
                selectValue: e.target.value
            })
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

        onSubmit(e){
            this.props.onsubmit(locations[this.state.selectValue].lat,locations[this.state.selectValue].lng,this.state.sport,this.state.name,this.state.time,locations[this.state.selectValue].place);
        }

        render(){
            return(
                <form id ="createEvents" className="container">
                    <text id="location">Location:</text> <br/>
                    <div className="styled-select green rounded">
                        <select id="locations"value={this.state.selectValue} onChange={(e) => this.handleLocationChange(e)}>
                            <option value={0}>AFC</option>
                            <option value={1}>Slaughter</option>
                            <option value={2}>Mem</option>
                            <option value={3}>Snyder Tennis Courts</option>
                            <option value={4}>Dell Courts</option>
                            <option value={5}>North Grounds</option>
                            <option value={6}>Nameless Field</option>
                            <option value={7}>Carr's Hil Field</option>
                            <option value={8}>Old Dorms Tennis Courts</option>
                        </select>
                    </div>
                    <br/>      
                    <text id="sport">Sport:</text><br/>
                    <input id="sportStyle"className="style" type="text" placeholder="ex:football" onChange={e => this.handleSportChange(e)}/>
                    <br/>
                    <text id="time">Time:</text><br/>
                    <input id="timeStyle" type="text" className="style" placeholder="HH:MM" onChange={e =>this.handleTimeChange(e)}/>
                    <br/>
                     <text id="name"> Your Name:</text><br/>
                    <input id="nameStyle" className="style" type="text" placeholder="ex:Shawn" onChange={e => this.handleNameChange(e)}/>
                    <br/>
                    <button id="submit" className="style" onClick={e => this.onSubmit(e)}> Submit </button>
                </form>    
            )
        }

}
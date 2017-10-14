import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: this.props.location,
            googleMapsResults: {},
            isLoaded: false
        }
    }
    componentWillMount() {
        const googleMapsGeoCodeUrl = 'http://maps.googleapis.com/maps/api/geocode/json?address=' + this.state.location;
        axios.get(googleMapsGeoCodeUrl)
        .then(res => res.data)
        .then(mapResults => {
            this.setState({
                googleMapsResults: mapResults.results[0].geometry,
                isLoaded: true
            })
        });
    }
    render() {
        if(this.state.isLoaded){
            console.log(this.state)
            return (
                <div className='display-map-results'>
                    <GoogleMapReact
                        defaultCenter={this.state.googleMapsResults.location}
                        viewPort={this.state.googleMapsResults.viewport}
                        zoom={13}>
                    </GoogleMapReact>
                </div>
            );    
        } else {
            return (
                <div className='map-loading'>
                Loading maps...
                </div>
            );
        }
    }
}

export default MapContainer;
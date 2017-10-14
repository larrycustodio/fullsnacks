import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const MapMarker = (props) => {
    return (
        <div>
            <img className='    '
            src={'./assets/svg/location.svg'} alt={props.index} />
        </div>
    )
}

class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            location: this.props.location,
            yelpResults: {},
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
                yelpResults: this.props.yelpResults,
                isLoaded: true
            })
        });
    }
    render() {
        if(this.state.isLoaded){
            console.log('Loaded Google Maps!')
            return (
                <div className='display-map-results'>
                    <GoogleMapReact
                        defaultCenter={{
                            "lat": this.state.yelpResults[0].coordinates.latitude,
                            "lng": this.state.yelpResults[0].coordinates.longitude 
                        }}
                        viewPort={this.state.googleMapsResults.viewport}
                        zoom={12}>
                        {this.state.yelpResults.map((marker,index) => {
                            return (
                                <MapMarker key={index}
                                lat={marker.coordinates.latitude}
                                lng={marker.coordinates.longitude}
                                text={index} /> 
                            );
                        })}
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
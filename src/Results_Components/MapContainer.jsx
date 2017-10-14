import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;


class MapContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            center: { lat: 59.95, lng: 30.33 },
            zoom: 11
        }
    }
    render() {
        return (
            <div className='display-map-results'>
                <GoogleMapReact
                    defaultCenter={this.state.center}
                    defaultZoom={this.state.zoom}>
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text={'Kreyser Avrora'}/>
                </GoogleMapReact>
            </div>
        );
    }
}

export default MapContainer;
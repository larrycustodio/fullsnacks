import React, { Component } from 'react';
import axios from 'axios';

class ResultsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFilters: {
                name: this.props.search.name,
                location: this.props.search.location,
                category_filter: this.props.search.categories,
                limit: '10',
                sort: '1',
            },
            results: []
        }
    }
    componentWillMount() {
        axios.get('http://localhost:3002/sample')
            .then(res => res.data)
            .then(results => this.setState({ results }));
    }
    render() {
        return (
            <div className='search-results-view'>
                <ResultsContainer
                    results={this.state.results}
                    toggleIcons={this.props.categories} />
                <MapContainer />
            </div>
        );
    }
}

const ResultsContainer = (props) => {
    return (
        <div className='display-scroll-results'>
            <div className='results-nearby'>
                Found {props.results.length} places nearby!
            </div>
            <div className='toggle-cat'>
                {props.toggleIcons.map((icon,index) => {
                    return (
                        <div key={'sprite-'+index}
                        className='cat-icon'>
                            <img className='cat-icon-svg' src={icon.spriteSrc} />
                            <p className='cat-icon-name'>{icon.name.toUpperCase()}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const MapContainer = (props) => {
    return (
        <div className='display-map-results'>
            Map Goes here!
        </div>
    )
}

export default ResultsView;
import React, { Component } from 'react';
import LoadingContainer from './LoadingView';
import axios from 'axios';
import YelpResultsContainer from './Results_Components/YelpResultsContainer';
import MapContainer from './Results_Components/MapContainer';

class ResultsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchFilters: {
                category_filter: this.props.search.categories,
                limit: '10',
                location: this.props.search.location,
                name: this.props.search.name,
                sort: '1',
            },
            yelpResults: {},
            googleMapsResults: {},
            isSearchDone: false
        }
    }
    onClickHandler(e) {
        //todo on toggle
    }
    componentWillMount() {
        const search = this.state.searchFilters;
        const yelpRequestUrl = 'http://localhost:3002/api/yelp/search/' + search.category_filter + '/location/' + search.location;
        axios.get(yelpRequestUrl)
            .then(res => res.data)
            .then(yelpResults => {
                this.setState({
                    yelpResults: yelpResults,
                    isSearchDone: true
                });
            });
    }
    render() {
        if (!this.state.isSearchDone) {
            console.log('loading Yelp results...');
            return (
                <LoadingContainer />
            );
        } else {
            console.log('done!');
            return (
                <div className='view-container view-search-results'>
                    <YelpResultsContainer
                        businesses={this.state.yelpResults.businesses}
                        categories={this.props.categories}
                        onClick={this.onClickHandler} />
                    <MapContainer location={this.state.searchFilters.location} />
                </div>
            );
        }
    }
}

export default ResultsView;
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
                name: this.props.search.name,
                category_filter: this.props.search.categories,
                location: this.props.search.location,
                dataValue: this.props.search.dataValue,
                limit: '10',
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
                        onClick={this.onClickHandler}
                        prevSelectedIndex={this.state.searchFilters.dataValue} />
                    <MapContainer
                        location={this.state.searchFilters.location}
                        yelpResults={this.state.yelpResults.businesses} />
                </div>
            );
        }
    }
}

export default ResultsView;
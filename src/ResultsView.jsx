import React, { Component } from 'react';
import axios from 'axios';

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
            results: {}
        }
    }
    onClickHandler(e) {
        //todo on toggle
    }
    componentWillMount() {
        const search = this.state.searchFilters;
        const requestUrl = 'http://localhost:3002/api/yelp/search/' + search.category_filter + '/location/' + search.location; 
        console.log(requestUrl);
        axios.get(requestUrl)
            .then(res => res.data)
            .then(results => {
                this.setState({
                    results: results
                });
            });
        console.log(this.state.results);
    }
    render() {
        return (
            <div className='search-results-view'>
                <ResultsContainer
                    results={this.state.results}
                    toggleIcons={this.props.categories}
                    onClick={this.onClickHandler} />
                <MapContainer />
            </div>
        );
    }
}

const ResultsContainer = (props) => {
    return (
        <div className='display-list-results'>
            <div className='results-nearby'>
                Found 'xyz' places nearby!
            </div>
            <div className='result-list'>
            </div>
            <div className='toggle-cat'>
                {props.toggleIcons.map((icon, index) => {
                    return (
                        <CategorySprite className='cat-icon'
                            key={'sprite-' + index}
                            index={index}
                            onClick={props.onClick}
                            icon={icon} />
                    );
                })}
            </div>
        </div>
    );
}
const CategorySprite = (props) => {
    return (
        <div className='cat-icon'
            onClick={props.onClick}
            data-category-value={props.index} >
            <img className='cat-icon-svg'
                data-category-value={props.index}
                src={props.icon.spriteSrc} />
            <p className='cat-icon-name'>
                {props.icon.name.toUpperCase()}
            </p>
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
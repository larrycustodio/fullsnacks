import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchFilter: {
                categories: '',
                location: ''
            },
            options: [
                {
                    name: 'coffee',
                    categories: ['coffee', 'coffeeroasteries'],
                    selectionSrc: './assets/svg/coffee.svg',
                    spriteSrc: './assets/svg/coffee_sprite.svg'
                },
                {
                    name: 'donut',
                    categories: ['donuts', 'bakeries'],
                    selectionSrc: './assets/svg/donut.svg',
                    spriteSrc: './assets/svg/donut_sprite.svg'
                },
                {
                    name: 'brunch',
                    categories: ['breakfast_brunch'],
                    selectionSrc: './assets/svg/breakfast.svg',
                    spriteSrc: './assets/svg/breakfast_sprite.svg'
                }
            ]
        }
        this.clickOptionHandler = this.clickOptionHandler.bind(this);
        this.enterLocationHandler = this.enterLocationHandler.bind(this);
    }
    enterLocationHandler(e) {
        e.preventDefault();
        const updateChoice = Object.assign({}, this.state.searchFilter);
        updateChoice.location = e.target.location.value;
        this.setState({
            searchFilter: updateChoice
        });
    }
    clickOptionHandler(e) {
        e.preventDefault();
        const updateChoice = Object.assign({}, this.state.searchFilter);
        const optionIndex = e.target.dataset.categoryValue;
        updateChoice.categories = this.state.options[optionIndex].categories;
        this.setState({
            searchFilter: updateChoice
        });
    }
    render() {
        return (
            <div className='container'>
                <nav className='nav'>
                    <a href='/'>Breakfast Finder</a>
                </nav>
                <section className='section-container'>
                    {this.state.searchFilter.categories == '' ?
                        <CategoryOptionsView
                            categories={this.state.options}
                            onClick={this.clickOptionHandler} /> :
                        this.state.searchFilter.location == '' ?
                            <LocationInputView onEnter={this.enterLocationHandler} /> :
                            <ResultsView 
                            searchQuery={this.state.searchFilter}
                            categories={this.state.options} />
                    }
                </section>
            </div>
        );
    }
}

const CategoryOptionsView = (props) => {
    return (
        <div className=''>
            <header className='header-container'>
                <h1 className='section-header'>Good morning!</h1>
                <p className='section-subheader'>what do we feel like having today?</p>
            </header>
            <form className='selection-category'>
                {props.categories.map((option, index) => {
                    return <BreakfastOption
                        key={'breakfast-option-' + option.name}
                        index={index}
                        category={option}
                        onClick={props.onClick} />
                })}
            </form>
        </div>
    );
}

const BreakfastOption = (props) => {
    return (
        <div className='selection-option'>
            <img className='select-icon'
                src={props.category.selectionSrc}
                onClick={props.onClick}
                data-category-value={props.index}
                alt={props.category.name + '-icon-option'} />
        </div>
    );
}

const LocationInputView = (props) => {
    return (
        <div className=''>
            <header className='header-container'>
                <h1 className='section-header'>Great Choice!</h1>
                <p className='section-subheader'>where are you headed this morning?</p>
            </header>
            <LocationInput onEnter={props.onEnter} />
        </div>
    )
}

const LocationInput = (props) => {
    return (
        <form className='location-form'
            onSubmit={props.onEnter}>
            <input type='text'
                name='location'
                id='inputLocation'
                className='input-text-location' />
            <label htmlFor='search_location'>ENTER YOUR CITY/ZIP CODE</label>
        </form>
    );
}

class ResultsView extends Component {
    constructor(props){
        super();
        this.state = {
            searchFilters: {
                location: '',
                category_filter: '',
                limit: '10',
                sort: '1',
            },
            results: ['','']
        }
    }
    render(){
        return (
            <div className='search-results-view'>
                <ResultsContainer 
                results={this.state.results}
                toggleIcons={this.props.categories}/>
                <MapContainer />
            </div>
        );
    }
}
const ResultsContainer = (props) => {
    return (
        <div className='display-scroll-results'>
            <div className='results-nearby'>
                Found {props.results.length||0} places nearby!
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
export default App;
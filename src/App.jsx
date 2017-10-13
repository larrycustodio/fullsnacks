import React, { Component } from 'react';
import CategoryView from './CategoryView';
import LocationView from './LocationView';
import ResultsView from './ResultsView';

class App extends Component {
    constructor() {
        super();
        this.state = {
            searchFilter: {
                name: '',
                categories: '',
                location: ''
            },
            options: [
                {
                    name: 'coffee',
                    categories: 'coffee',
                    selectionSrc: './assets/svg/coffee.svg',
                    spriteSrc: './assets/svg/coffee_sprite.svg'
                },
                {
                    name: 'donut',
                    categories: 'donuts',
                    selectionSrc: './assets/svg/donut.svg',
                    spriteSrc: './assets/svg/donut_sprite.svg'
                },
                {
                    name: 'brunch',
                    categories: 'breakfast_brunch',
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
        updateChoice.name = this.state.options[optionIndex].name;
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
                    {
                        this.state.searchFilter.categories == '' ?
                        <CategoryView
                            categories={this.state.options}
                            onClick={this.clickOptionHandler} /> :
                        this.state.searchFilter.location == '' ?
                            <LocationView onEnter={this.enterLocationHandler} /> :
                            <ResultsView
                                search={this.state.searchFilter}
                                categories={this.state.options}
                                />
                    }
                </section>
            </div>
        );
    }
}
export default App;
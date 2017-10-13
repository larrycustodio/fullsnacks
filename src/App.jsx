import React, { Component } from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

class App extends Component {
    constructor() {
        super();

        this.state = {
            activeSelection: {
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
        const updateChoice = Object.assign({}, this.state.activeSelection);
        updateChoice.location = e.target.location.value;
        this.setState({
            activeSelection: updateChoice
        });
        console.log(this.state);
    }
    clickOptionHandler(e) {
        e.preventDefault();
        const updateChoice = Object.assign({}, this.state.activeSelection);
        const optionIndex = e.target.dataset.categoryValue;
        updateChoice.categories = this.state.options[optionIndex].categories;
        this.setState({
            activeSelection: updateChoice
        });
    }
    render() {
        return (
            <div className='container'>
                <nav className='nav'>
                    Breakfast Finder
                </nav>
                <section className='section-container'>
                    <ChooseItem />
                    <form className='selection-category'>
                        {this.state.options.map((option, index) => {
                            return <BreakfastOption
                                key={'breakfast-option-' + option.name}
                                index={index}
                                category={option}
                                onClick={this.clickOptionHandler} />
                        })}
                    </form>
                    <ChooseLocation />
                    <LocationInput onEnter={this.enterLocationHandler} />
                </section>
            </div>
        );
    }
}

const ChooseItem = (props) => {
    return (
        <header className='header-container'>
            <h1 className='section-header'>Good morning!</h1>
            <p className='section-subheader'>what do we feel like having today?</p>
        </header>
    );
}

const ChooseLocation = (props) => {
    return (
        <header className='header-container'>
            <h1 className='section-header'>Great Choice!</h1>
            <p className='section-subheader'>where are you headed this morning?</p>
        </header>
    )
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

const LocationInput = (props) => {
    return (
        <form className='location-form'
            onSubmit={props.onEnter}>
            <div className='form-input-group'>
                <input type='text'
                    name='location'
                    id='inputLocation'
                    className='input-text-location' />
                <img src='./assets/svg/location.svg'
                    className='input-text-button'
                    onClick={props.onFindLocation} />
            </div>
            <label htmlFor='search_location'>ENTER YOUR CITY/ZIP CODE</label>
        </form>
    );
}

export default App;
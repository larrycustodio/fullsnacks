import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();

        this.state = {
            activeSelection: {
                activechoice: '',
                time: ''
            },
            options: [
                {
                    name: 'coffee',
                    categories: ['coffee', 'coffeeroasteries'],
                    selectionSrc: './assets/coffee.svg',
                    spriteSrc: './assets/coffee_sprite.svg'
                },
                {
                    name: 'donut',
                    categories: ['donuts','bakeries'],
                    selectionSrc: './assets/donut.svg',
                    spriteSrc: './assets/donut_sprite.svg'
                },
                {
                    name: 'brunch',
                    categories: ['breakfast_brunch'],
                    selectionSrc: './assets/breakfast.svg',
                    spriteSrc: './assets/breakfast_sprite.svg'
                }
            ]
        }
        this.onClickOption = this.onClickOption.bind(this);
    }
    onClickOption(selection){
        console.log(selection);
    }
    render() {
        return (
            <div className='container'>
                <nav className='nav'>
                    Breakfast Finder
                </nav>
                <HomeOptions 
                options={this.state.options}
                onClick={this.onClickOption} />
            </div>
        );
    }
}

function HomeOptions(props) {
    return (
        <section className='section-container'>
            <h1 className='section-header'>Good morning!</h1>
            <p className='section-subheader'>what do you feel like having today?</p>
            <div className='section-selection'>
                {props.options.map((breakfastItem, index) => {
                    return (
                        <BreakfastOption
                            key={'breakfast-' + index}
                            item={breakfastItem}
                            onClick={props.onClickOption} />
                    );
                })}
            </div>
        </section>
    );
}

function BreakfastOption(props) {
    console.log(props.item.name);
    return (
        <div className='breakfast-option' onClick={props.onClickOption}>
            <p>{props.item.name}</p>
            <img src={props.item.selectionSrc} />
        </div>
    )
}
export default App;
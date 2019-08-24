import React from 'react';

const BreakfastOption = (props) => {
    return (
        <div className='category-option'>
            <img className='select-icon'
                src={props.category.selectionSrc}
                onClick={props.onClick}
                data-category-value={props.index}
                alt={props.category.name + '-icon-option'} />
        </div>
    );
}

const CategoryView = (props) => {
    return (
        <div className='view-container'>
            <header className='header-container category-header'>
                <h1 className='section-header'>Good morning!</h1>
                <p className='section-subheader'>what do we feel like having today?</p>
            </header>
            <div className='category-selections'>
                {props.categories.map((option, index) => {
                    return <BreakfastOption
                        key={'breakfast-option-' + option.name}
                        index={index}
                        category={option}
                        onClick={props.onClick} />
                })}
            </div>
        </div>
    );
}

export default CategoryView;
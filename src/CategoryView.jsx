import React from 'react';

const CategoryView = (props) => {
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

export default CategoryView;
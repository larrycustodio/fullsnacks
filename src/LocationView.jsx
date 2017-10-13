import React from 'react';

const LocationView = (props) => {
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

export default LocationView;
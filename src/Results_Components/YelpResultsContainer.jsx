import React from 'react';

const YelpResultsContainer = (props) => {
    return (
        <div className='display-list-results'>
            <div className='results-nearby'>
                <p>{'Found ' + props.businesses.length + ' places nearby!'}</p>
            </div>
            <div className='results-list'>
                {props.businesses.map((place,index) => {
                    return (
                        <BusinessList className='list'
                        key={'list-'+index}
                        businessInfo={place} />
                    );
                })}
            </div>
            <div className='toggle-cat'>
                {props.categories.map((icon, index) => {
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
const BusinessList = (props) => {
    const info = props.businessInfo;
    const backgroundImage = {
        background: 'linear-gradient(rgba(87,87,87,0.61),rgba(87,87,87,0.61)), url(' + props.businessInfo.image_url + ')',
        backgroundSize: 'cover',
    }
    const ratingStars = Math.trunc(info.rating) !== info.rating ? Math.trunc(info.rating) + '_half' : info.rating; 
    return (
        <div className='result-list-card' style={backgroundImage}>
            <p className='list-name'>{info.name}</p>
            <img className='list-rating'
                src=  {'./assets/yelp_stars/small/small_' + ratingStars + '.png' } />
            <p className='list-distance'>{'~'+ (info.distance * 0.622 * 0.001).toFixed(1) + ' miles away'}</p>
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

export default YelpResultsContainer;
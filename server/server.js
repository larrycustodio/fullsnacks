const express = require('express');
const app = express();
const morgan = require('morgan');

const Yelp = require('yelpv3');
const cors = require('cors');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

/* Yelp Fusion API */
app.get('/api/yelp/search/:term/location/:location', (req, res) => {
    const yelp = new Yelp({
        app_id: 'Ts9mXy-CsdlBMR8Ub9RpOg',
        app_secret: '1r4iNuYsYsY4Dc6ITMPTeZoyH8fzKPuAVJAQLOTaweYvNaA2SSb4T7OodY6VZPBA'
    });
    yelp.search({
        term: req.params.term,
        location: req.params.location,
        limit: 10,
        sort: 1,
    }).then(data => {
        res.send(data);
    }).catch(err => {
        res.send('Error occured, try again! :(');
        console.log(err);
    });
});

module.exports = app;

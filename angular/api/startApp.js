/*eslint-disable no-console */
import open from 'open';
import express from 'express';
import { favourites } from '../api/favourites'
import bodyParser from 'body-parser';
import path from 'path';
import _ from 'lodash';

function start(app, port) {

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    app.get('/api/favourites', (req, res) => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify({ favourites }));
    });

    app.post('/api/favourites', (req, res) => {
        if (!_.find(favourites, item => {
                return item.id === req.body.id;
            })) {
            favourites.push(req.body);
        }
        res.end();
    });

    app.delete('/api/favourites', (req, res) => {
        let fav = _.find(favourites, item => {
            return item.id === req.query.id;
        });
        if (fav) {
            favourites.pop(fav);
        }
        res.end();
    });

    app.use('/templates', express.static(path.join(__dirname, '../src/templates')))

    app.get('*', function(req, res) {
        res.redirect('/');
    });

    app.listen(port, function(err) {
        if (err) {
            console.log(err);
        } else {
            open('http://localhost:' + port);
        }
    });
}

export default start;
/*eslint-disable no-unused-vars */
/*eslint-disable no-console */

import _ from 'lodash';

export default function(giphyService) {

    const main = this;
    let lastCallToApi = {};
    main.offset = 0;
    main.results = [];

    function mapResults(results) {

        results.then(
            function(results) {
                let mappedResults = _.map(results.data.data, item => {
                    return {
                        id: item.id,
                        thumbnail: item.images.fixed_width_still.url,
                        fullSize: item.images.original.url,
                        source: item.source_post_url
                    }
                });
                main.results = mappedResults;
            },
            function(fail) {
                console.log(fail);
            });
    }

    main.getKittens = function(offset) {
        let results = giphyService.searchApi('kittens', offset);
        if (lastCallToApi !== main.getKittens) main.offset = 0
        lastCallToApi = main.getKittens;
        mapResults(results);
    }

    main.getPuppies = function(offset) {
        let results = giphyService.searchApi('puppies', offset);
        if (lastCallToApi !== main.getPuppies) main.offset = 0
        lastCallToApi = main.getPuppies;
        mapResults(results);
    }

    main.more = function() {
        main.offset += 15;
        lastCallToApi(main.offset);
    }

    main.back = function() {
        main.offset -= 15;
        if (main.offset <= 0) main.offset = 0;
        lastCallToApi(main.offset);
    }

    main.displayPopup = function(item) {
        main.selectedItem = item;
    }

    main.addToFavourites = function(item) {
        giphyService.addToFavourites(item);
    }

    main.removeFromFavourites = function(item) {
        giphyService.removeFromFavourites(item);
    }

    main.getFavourites = function() {
        let results = giphyService.getFavourites().then(
            function(results) {
                main.favourites = results.data.favourites;
            },
            function(fail) {
                console.log(fail);
            });
    }

    main.getFavourites();
}
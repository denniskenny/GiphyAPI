/*eslint-disable no-unused-vars */
/*eslint-disable no-console */
const giphyService = function($http) {

    let returnVal = {};

    returnVal.searchApi = function(searchTerm, offset) {

        if (!offset) offset = 0;
        return $http.get(`http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api=1PxfCFVSyCqRKaRLa6G02bZWHcDbobVv&limit=15&offset=${offset}`);

    };

    returnVal.addToFavourites = function(data) {

        $http.post('/api/favourites', data).then(
            function(success) {},
            function(fail) {
                console.log(fail);
            });
    };

    returnVal.removeFromFavourites = function(data) {

        $http.delete(`/api/favourites?id=${data.id}`).then(
            function(success) {},
            function(fail) {
                console.log(fail);
            });
    };




    returnVal.getFavourites = function() {

        return $http.get('/api/favourites');
    };

    return returnVal;
};

export default giphyService;

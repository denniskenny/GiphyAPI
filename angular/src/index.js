/*eslint-disable no-console */
/*eslint-disable no-unused-vars */
import './index.css';
import './css/bootstrap.css'
import './css/thumbnail-gallery.css'
import './fonts/glyphicons-halflings-regular.eot'

import bootstrap from 'bootstrap';
import angular from 'angular';

import ngRoute from 'angular-route';
import ngResource from 'angular-resource';
import mainController from './app/mainController';
import giphyService from './app/giphyService';

let app = angular.module("giphyApp", ["ngRoute", "ngResource"]);

let exceptionHandler = function($injector) {
    return function(exception, cause) {
        console.error(exception, cause, exception.stack);
    };
};

app.factory("giphyService", ["$http", giphyService]);
app.controller("mainController", ["giphyService", mainController]);

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/favourites", {
            templateUrl: 'templates/favourites.html',
            controller: "mainController",
            controllerAs: "main"
        })
        .when("/", {
            templateUrl: 'templates/mainPanel.html',
            controller: "mainController",
            controllerAs: "main"
        });
}]);

app.factory("$exceptionHandler", ["$injector", exceptionHandler]);
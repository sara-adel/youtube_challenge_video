var app = angular.module('youtubeVideosList', ['ngRoute']);

app.config(function ($routeProvider) {

    $routeProvider
        .when("/", {
            templateUrl: "templates/main.html",
            controller: 'mainController'
        })

        .when('/details/:video_id', {
            templateUrl: 'templates/details.html',
            controller: 'detailsController'
        });

});

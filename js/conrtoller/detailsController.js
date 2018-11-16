app.controller('detailsController', function ($scope, youtubeService, $routeParams, localStorageService) {
    var videoId = $routeParams.video_id;
    youtubeService.getVideoDetails($scope, videoId);
    $scope.maxRating = 5;
    $scope.videoRate = localStorageService.getValue("rating", videoId);
    $scope.videoFavorite = localStorageService.getValue("favorite", videoId);

    var searchBox = angular.element(document).find('#searchBox');
    searchBox.addClass('hide');

    $scope.addToFavorite = function (videoId) {
        var key = "favorite";
        var favoriteObj = {
            "video_id": videoId,
            "favorite": true
        };

        $scope.videoFavorite = favoriteObj;
        localStorageService.push(key, favoriteObj);
    };

    $scope.setRating = function (videoId, rating) {
        var key = "rating";
        var ratingObj = {
            "video_id": videoId,
            "rating": rating
        };

        localStorageService.push(key, ratingObj);
    }

});

app.controller('mainController', function ($scope, youtubeService) {
    $scope.prograssing = false;
    var searchBox = angular.element(document).find('#searchBox');
    searchBox.removeClass('hide');

    var channelId = 'UCpInjhuJ1WUekcFeXPPyGGg';
    var maxResults = 5;
    var url = youtubeService.getChannelUrl(channelId, maxResults);

    youtubeService.getChannelVideos($scope, url);

    $scope.date = new Date();
    $scope.orderProperty = "+snippet.title";
    $scope.prograssing = true;
    $scope.order = function (column) {
        var currentColumn = $scope.orderProperty.slice(1);
        var currentDirection = $scope.orderProperty.slice(0, 1);
        var dir = '+';

        if (column === currentColumn) {
            dir = currentDirection === '+' ? '-' : '+';
        }
        $scope.orderProperty = dir + column;
    };

    $scope.paginate = function (pageToken) {
        $scope.prograssing = false;
        var url = youtubeService.getChannelUrl(channelId, maxResults, pageToken);
        youtubeService.getChannelVideos($scope, url);
        $scope.orderProperty = "+snippet.title";
        $scope.prograssing = true;

    };


})
;
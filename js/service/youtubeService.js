(function () {
    app.service('youtubeService', function ($http) {
        var baseUrl = "https://www.googleapis.com/youtube/v3/";
        var API_KEY = 'AIzaSyDRNKaZn8iasRyqT23odR-CICafXcWjn_U';

        this.getVideoUrl = function (videoId) {
            var url = baseUrl + "videos?part=snippet,contentDetails,statistics,status&fields=items(id,snippet," +
                "statistics,contentDetails,status)&id=" + videoId + "&key=" + API_KEY;
            return url
        };

        this.getChannelUrl = function (channelId, maxResults, pageToken) {
            if (pageToken == undefined) { // To handel error in first time request without pageToke
                pageToken = "";
            }
            var url = baseUrl + "search?part=snippet&channelId=" + channelId
                + "&maxResults=" + maxResults + "&key=" + API_KEY + "&pageToken=" + pageToken;
            return url;
        };


        this.getChannelVideos = function ($scope, url) {
            return $http({
                method: "GET",
                url: url,
                 cache: true
            }).then(function mySuccess(response) {
                $scope.videos = response.data.items;
                $scope.nextPageToken = response.data.nextPageToken;
                $scope.prePageToken = response.data.prevPageToken;

            });
        };
        this.getVideoDetails = function ($scope, videoId) {
            var url = this.getVideoUrl(videoId);
            console.log(url);
            return $http({
                method: "GET",
                url: url
            }).then(function mySuccess(response) {
                $scope.videoData = response.data.items[0];
            });

        }

    });
})();

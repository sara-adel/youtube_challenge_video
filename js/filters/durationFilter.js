(function () {
    app.filter('duration', function () {
        return function (input) {
            var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
            var hours = 0, minutes = 0, seconds = 0, totalseconds;
            var result = "";
            if (reptms.test(input)) {
                var matches = reptms.exec(input);
                if (matches[1]) {
                    hours = Number(matches[1]);
                    result += hours + ":";
                }
                if (matches[2]) {
                    minutes = Number(matches[2])
                    result += minutes + ":";
                }
                if (matches[3]) {
                    seconds = Number(matches[3]);
                    result += seconds
                }
            }
            return (result);
        };
    });
})();



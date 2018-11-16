(function () {
    app.service('localStorageService', function () {
        this.set = function (key, value) {
            localStorage.setItem(key, JSON.stringify(value));
        };

        this.get = function (key) {
            return JSON.parse(localStorage.getItem(key) || '[]');
        };

        this.push = function (key, value) {
            var data = this.get(key);
            data = this.addOrUpdate(key, data, value);
            this.set(key, data);

        };

        this.addOrUpdate = function (key, data, object) {
            var updated = false;
            for (var i = 0; i < data.length; i++) {
                if (data[i].video_id === object['video_id']) {
                    data[i][key] = object[key];
                    updated = true;
                    break;
                }
            }
            if (!updated) {
                data.push(object)
            }
            return data;

        };

        this.getValue = function (key, itemId) {
            var values = this.get(key);
            for (var i = 0; i < values.length; i++) {
                if (values[i].video_id === itemId) {
                    return values[i];
                }
            }
            return {};
        };

    });

})();

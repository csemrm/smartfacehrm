const Http = require("sf-core/net/http");
exports.getStoreLocation = getStoreLocation;

function getStoreLocation(callback) {
    Http.request({
            'url': 'http://hrm.swlbd.com/index.php/rest/shops/get',
            'method': 'GET'
        },
        function(response) {
            try {
                var data = JSON.parse(response.body.toString());
            }
            catch (ex) {
                callback && callback(ex);
            }
            callback && callback(null, data);
        },
        function(e) {
            callback && callback(e);
        });
}

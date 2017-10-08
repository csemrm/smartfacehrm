/* globals */
(function() {
const Http = require("sf-core/net/http");


function getPersonnelInfo(callback) {
    Http.request({
            'url': 'http://www.hrm.swlbd.com/index.php/rest/personnel_info/index',
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
exports.getPersonnelInfo = getPersonnelInfo;

function getPersonnelInfoById(ID,callback) {
    Http.request({
            'url': 'http://www.hrm.swlbd.com/index.php/rest/personnel_info/get/id/'+ID,
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
exports.getPersonnelInfoById = getPersonnelInfoById;

})();
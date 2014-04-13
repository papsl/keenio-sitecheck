'use strict';

var keen = require('keen.io');
var appConfig = require('./appConfig');
var keen = keen.configure(appConfig.keenConfig);

var miniLoger = function (messageText, responseTime, statusCode) {
    keen.addEvent("checkSite", { "website": messageText, "time": responseTime, "statusCode": statusCode }, function (err) {
        if (err) {
            console.log("Oh no, an error writing to keen.io!");
        }
    });
};

var checkSite = function (timeOut, siteAddress, callback) {

    var unirest = require('unirest');
    var dateStart = new Date();

    unirest.get(siteAddress)
        .timeout(timeOut)
        .headers({ 'Accept': 'text/html' })
        .end(function(response) {
            var dateEnd = new Date();

            if (isNaN(response.statusCode)) {
                response.statusCode = 0;
            }
            callback(response, siteAddress, dateEnd - dateStart);
        });
};

setInterval(
    (function () {
        checkSite(
            appConfig.responseTimeout
            , appConfig.siteURL
            ,function (response, address, requestTime) {
                console.log("Request %s took %dms status %d", address, requestTime, response.statusCode);
                miniLoger(address, requestTime, response.statusCode);
            }
        );
    })
, appConfig.responseRepeatDelay);


    
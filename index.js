var AWS = require("aws-sdk");
var https = require('https');

AWS.config.getCredentials(function(err) {
    if (err) console.log(err.stack);
    else
    console.log("Access Key:", AWS.config.credentials.accessKeyId);
});

https.get(process.env.moniturl, function(res) {
    console.log("StatusCode: ", res.statusCode);
    if (res.statusCode == 200) {
        const params = require("./extras/UP.js")
        var sendPromise = new AWS.SES({apiVersion: '2010-12-01', region: 'us-east-1'}).sendEmail(params).promise();
        sendPromise.then(
            function(data) {
                console.log(data.MessageId);
            }).catch(
                function(err) {
                    console.error(err, err.stack);
                });
    } else {
        const params = require("./extras/DOWN.js")
        var sendPromise = new AWS.SES({apiVersion: '2010-12-01', region: 'us-east-1'}).sendEmail(params).promise();
        sendPromise.then(
            function(data) {
                console.log(data.MessageId);
            }).catch(
                function(err) {
                    console.error(err, err.stack);
            });
            
    }
});
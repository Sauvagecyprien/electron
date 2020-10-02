var app = {};
const startingApp = require('./electronSetup');

function start(callback) {
    init(function() {
        /* On démarre le routeur défini juste avant */
        startingApp.router.start(function() {
            if(typeof callback != 'undefined') {
                callback();
            }
        });
    });
}

function init(callback) {
    /* On instancie notre module router */
    startingApp.router = require('./router');

    if(typeof callback != 'undefined') {
        callback();
    }
}

module.exports = {
    start: start
};
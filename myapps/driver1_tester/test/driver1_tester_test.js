var assert = require('assert');
var path = require('path');
var test = require('test');

var appRunner = require('ruff-app-runner');

var mock = require('ruff-mock');
var verify = mock.verify;
var when = mock.when;
var atLeast = mock.atLeast;

var appPath = path.join(__dirname, '..');

module.exports = {
    'test should run application': function () {
        appRunner
            .run(appPath, function () {
                when($('mygpio')).readValue().thenReturn(0);

                setTimeout(function() {
                    verify($('led-r'), atLeast(1)).turnOn();
                }, 500);
            })
            .end(function () {
//                verify($('led-r'), atLeast(1)).turnOff();
            });
    }
};

test.run(module.exports);

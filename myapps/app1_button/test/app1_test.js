var assert = require('assert');
var path = require('path');
var test = require('test');

var appRunner = require('ruff-app-runner');
var mock = require('ruff-mock');

var verify = mock.verify;

var appPath = path.join(__dirname, '..');

module.exports = {
//    'test should run application': function () {
//        appRunner
//            .run(appPath, function () {
//                $('button').emit('push');
//                verify($('led-r')).turnOn();
//
//                $('button').emit('release');
//                verify($('led-r')).turnOff();
//            })
//            .end(function () {
////                verify($('led-r')).turnOff();
//            });
//    }

    'test should trun on led if button pressed': function () {
        appRunner
            .run(appPath, function () {
                $('button').emit('push');
                verify($('led-r')).turnOn();
            });
    },

    'test should trun off led if button released': function () {
        appRunner
            .run(appPath, function () {
                $('button').emit('release');
                verify($('led-r')).turnOff();
            });
    },

    'test should trun off led if app is stopped': function () {
        appRunner
            .run(appPath, function() {})
            .end(function () {
                verify($('led-r')).turnOff();
            });
    }
};

test.run(module.exports);

'use strict';

var driver = require('ruff-driver');

var MAX_SPEED = 30;
var MAX_VOLTAGE = 5;

module.exports = driver({
    attach: function (inputs) {
        this._adc = inputs['adc'];
    },
    exports: {
        getVelocity: function (callback) {
            this._adc.getVoltage(function (error, voltage) {
                if (error) {
                    callback(error);
                    return;
                }
                callback(undefined, (MAX_SPEED * voltage / MAX_VOLTAGE).toFixed(3) - 0);
            });
        }
    }
});

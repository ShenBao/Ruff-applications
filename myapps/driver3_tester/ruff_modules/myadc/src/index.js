'use strict';

var driver = require('ruff-driver');

module.exports = driver({
    attach: function (inputs) {
        //do init steps here
        //this._gpio = inputs.getRequired('gpio');

        this._adc = inputs.getRequired('myadc');
    },

    detach: function () {
        //do clean work here
    },

    exports: {
        readCurrent: function() {
          return this._adc.getCurrent();
        },
        readVoltage: function() {
          return this._adc.getVoltage();
        },
        read: function() {
          return this._adc.getRawValue();
        }
    }
});
